# Tycoon Strategy Game — Design & Technical Plan

## Concept

A transportation network tycoon game inspired by Sid Meier's Railroad Tycoon, reimagined with large-scale hex maps and a dual-currency political system. The player is not just a railroad company — they are a regional power broker who builds infrastructure as a means of political and economic expansion.

---

## Core Gameplay Loop

1. Start in a chosen city with inherited political standing
2. Build transportation routes to deliver raw goods to industries
3. Industries produce processed goods; deliver these to cities
4. Cities reward political capital; businesses reward fiat capital
5. Use both currencies to expand the network into new regions
6. Cities and industries grow organically, increasing demand and unlocking higher-tier goods

---

## Dual Currency System

### Fiat Capital
- Earned by delivering goods that businesses want
- Spent on building and maintaining infrastructure
- Standard economic resource — flows like money

### Political Capital
- A **rate**, not a pool — accrues per in-game time period (e.g. per week) based on how well you serve your cities
- Rate goes up/down based on city satisfaction, events, and competitor activity
- Spent on:
  - Gaining access to build through cities and regions
  - Sabotaging competitor routes or relationships
  - Negotiating preferential terms with industries
  - Influencing events and decisions in your favor
- Some tiles have a **political sensitivity modifier** — building through them costs extra political capital regardless of financial cost (e.g. historic districts, sacred land)

---

## Starting Condition

- Player picks a starting city on the map
- Begins with inherited political capital in that city — no bootstrapping problem
- AI opponents start in rival cities with similar standing
- Expansion is earned, not given — you grow your influence outward from your base

---

## Technology Progression (Emergent)

**No tech currency. No tech tree. Tech emerges from economic success.**

- Industries have a **wealth level** that rises as they receive consistent inputs and sell outputs
- At wealth thresholds, industries naturally upgrade:
  - Sawmill → Lumber Mill → Furniture Manufacturer
  - Iron Mine → Foundry → Machine Works
- Cities receiving better goods grow in population and diversity
- Wealthy cities start producing engineers, investors, and institutions — unlocking faster political capital accrual or new building types
- Players can **indirectly influence** tech pace by controlling supply chains
  - Want to slow a rival city's industrialization? Corner their coal supply
  - Want to accelerate your own? Prioritize consistent, high-quality supply routes

One optional player lever: a city can **request** an industry upgrade, and the player chooses whether to prioritize supplying it — keeping agency without adding a separate mechanic.

---

## Random Events (Design Still Open)

General direction: events should create **judgment calls**, not optimization puzzles.

Approaches being considered:
- **Hidden magnitude** — you know the choice but not exactly how good/bad the outcome will be
- **Cascading consequences** — choices shift city mood in ways that affect future events, not just a one-time transaction
- **Time-limited windows** — events expire, forcing intuitive decisions over min-maxing

Example event: Choose between access to a farming region or an iron region. Iron gives more fiat opportunity but carries a political capital penalty because the city wanted the farming region. The tradeoff is real but the exact magnitudes are uncertain.

---

## Map & Tile System

### Hex Grid
- Hex tiles using **cube coordinate system** (not offset — offset is intuitive but bad for math)
- Reference: [redblobgames.com](https://www.redblobgames.com/grids/hexagons/) — the definitive hex grid math resource
- All route cost calculations operate in hex/cube space
- Visual rendering is a layer on top; simulation never knows how it's displayed

### Tile Structure

```typescript
type TerrainType = 'plains' | 'hills' | 'mountains' | 'water' | 'desert';
type OverlayType = 'forest' | 'river' | 'ore_deposit' | 'fertile' | 'urban';

interface TileModifiers {
  buildCost: number;           // multiplier, 1.0 = baseline
  maintenanceCost: number;     // separate from build — a tunnel may be cheap to maintain
  speedModifier: number;       // affects transit time
  politicalSensitivity: number; // extra PC cost to build through
}

interface Tile {
  coords: CubeCoords;
  terrain: TerrainType;
  overlays: OverlayType[];     // stacked on top of base terrain
  modifiers: TileModifiers;    // computed once at map gen from terrain + overlays
  resource?: ResourceType;     // if this tile produces a raw good
}
```

### Tile Capacity & Upgrades
- Each tile has a **capacity** (max simultaneous vehicles)
- Players upgrade capacity rather than laying individual tracks/signals
- Upgrade cost scales with terrain modifiers (mountain upgrades cost more)
- Capacity can degrade if maintenance costs aren't met
- Tile capacity and current utilization should always be clearly visible to the player

### Route Cost
- **Shortest path ≠ fastest path** — this is intentional and creates interesting decisions
- Build cost, transit time, and maintenance are separate calculations
- Infrastructure type matters per tile:

```typescript
interface TileModifiers {
  rail_cost_modifier: number;
  road_cost_modifier: number;
  canal_cost_modifier: number | null;  // null = impossible
}
```

---

## Vehicle Simulation

### Design Philosophy
- This is a **tycoon game with trains**, not a train simulator
- No individual signal/switch management
- No manual siding construction
- Players manage network capacity and route strategy, not traffic micromanagement

### Vehicle State Machine

```typescript
type VehicleState =
  | 'idle'         // at depot, no assignment
  | 'dispatched'   // has route, pathfinding to first pickup
  | 'moving'       // traversing tiles along planned path
  | 'waiting'      // blocked by capacity, holding current tile
  | 'loading'      // at source, picking up cargo
  | 'unloading'    // at destination, dropping cargo
  | 'returning'    // heading back (non-circuit routes)
  | 'maintenance'  // out of service / degraded
```

### Vehicle Data

```typescript
interface Vehicle {
  id: string;
  state: VehicleState;
  type: 'train' | 'truck' | 'boat';

  // routing
  assignedRoute: RouteId;
  currentPath: CubeCoords[];    // full planned path
  pathIndex: number;            // cursor into path
  reservedTile: CubeCoords | null;

  // cargo
  capacity: number;
  cargo: CargoManifest | null;

  // economics
  maintenanceAge: number;
  lifetimeRevenue: number;
}
```

### Reservation System
- Before entering a tile, vehicle checks capacity
- If space available: reserve slot, release previous tile, advance
- If full: transition to `waiting`, retry next tick
- Path is preserved while waiting — no recalculation needed

### Deadlock Handling
- After each tick, build a "waiting for" graph across all waiting vehicles
- Detect cycles (A waiting for B's tile, B waiting for A's tile)
- Resolution: lowest-priority vehicle in the cycle backs up one tile
- Player never manages this — it's handled automatically

---

## Simulation Tick Architecture

Turn-based tick at a fixed interval (e.g. 500ms real time = a few hours game time).

**Ordered operations per tick:**
1. Move all vehicles (reservation checks, state transitions)
2. Process loading / unloading (revenue triggers here)
3. Update industry wealth and output levels
4. Update city satisfaction and political capital rate
5. Check tech progression thresholds (industry upgrades)
6. Advance game clock / accrue political capital for the period
7. Run deadlock detection pass

Ordering matters — cargo must be delivered before industry updates, industry before city satisfaction, etc.

---

## Prototype Plan

### Phase 1 — Headless Simulation (TypeScript)
Get the economic engine working with console output before touching rendering:
- Tick loop
- 2–3 vehicles with state machines
- A handful of tiles with capacity
- Two cities, a few industries
- Dual currency accrual

If the simulation loop feels satisfying in text output, the game design is working.

### Phase 2 — Visual Prototype (Browser / TypeScript)
Lowest friction path to visual hex tiles given your TS background:
- **Honeycomb.js** — TypeScript hex grid library, handles all cube coordinate math
- **PixiJS** — fast 2D WebGL renderer, very TS-friendly
- No build pipeline friction — runs in browser, just refresh

Goals: colored tiles, click interaction, route drawing, capacity visualization.

### Phase 3 — Move to Godot
Port simulation logic (well-tested by now) into Godot. Let Godot own rendering, input, and audio. GDScript is Python-like and approachable; C# is also supported if preferred.

---

## Open Questions

- [ ] **Random events** — final design direction (hidden magnitude vs. cascading consequences vs. timed windows)
- [ ] **Competition mechanics** — AI opponents in rival cities; how aggressive, how visible
- [ ] **Failure states** — how does a player actually lose? Bankruptcy? Locked out of key cities permanently?
- [ ] **Political capital decay** — can you lose standing in a city, or only fail to grow it?
- [ ] **Map generation** — procedural vs. hand-crafted scenarios
- [ ] **Vehicle types** — do trains/trucks/boats have meaningfully different economics, or just different terrain access?

---

## Key References

- [redblobgames.com — Hex Grid Math](https://www.redblobgames.com/grids/hexagons/)
- [Honeycomb.js](https://abbekeultjes.nl/honeycomb/) — TypeScript hex grid library
- [PixiJS](https://pixijs.com/) — 2D WebGL renderer
- [Godot Engine](https://godotengine.org/) — target shipping engine (free, open source)
- [OpenTTD](https://www.openttd.org/) — open source transport tycoon, good architectural reference
