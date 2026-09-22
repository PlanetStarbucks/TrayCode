import { Grid, defineHex, rectangle, Orientation, type Point } from "honeycomb-grid";
import { createNoise2D } from "simplex-noise";

// Mirrors the TerrainType / OverlayType unions from tycoon-game-plan.md
type TerrainType = "plains" | "hills" | "mountains" | "water" | "desert";
type ResourceType = "ore_deposit" | null;

interface TileData {
	terrain: TerrainType;
	elevation: number;
	resource: ResourceType;
}

const TERRAIN_COLORS: Record<TerrainType, string> = {
	plains: "#7fb069",
	hills: "#a98467",
	mountains: "#8d99ae",
	water: "#457b9d",
	desert: "#e0c068",
};
const TERRAIN_TYPES = Object.keys(TERRAIN_COLORS) as TerrainType[];

const PADDING = 40;

const Hex = defineHex({ dimensions: 12, orientation: Orientation.FLAT });
const grid = new Grid(Hex, rectangle({ width: 60, height: 60 }));

// Elevation bands: low -> water, high -> mountains, the middle band mixes
// the remaining terrain types randomly (the "middle should feel more random" idea).
const WATER_THRESHOLD = -0.15;
const MOUNTAIN_THRESHOLD = 0.45;
const MIDDLE_TERRAIN: TerrainType[] = ["plains", "hills", "desert"];

// Bigger = smoother, larger terrain features (pixels of noise-space per unit).
const NOISE_SCALE = 250;

const noise2D = createNoise2D();

// Layers a few frequencies of noise on top of each other so coastlines and
// mountain ranges get some texture instead of perfectly smooth blobs.
function fractalNoise(x: number, y: number, octaves = 4, persistence = 0.5): number {
	let total = 0;
	let frequency = 1;
	let amplitude = 1;
	let maxAmplitude = 0;

	for (let i = 0; i < octaves; i++) {
		total += noise2D(x * frequency, y * frequency) * amplitude;
		maxAmplitude += amplitude;
		amplitude *= persistence;
		frequency *= 2;
	}

	return total / maxAmplitude; // normalized back to roughly [-1, 1]
}

function terrainForElevation(elevation: number): TerrainType {
	if (elevation < WATER_THRESHOLD) return "water";
	if (elevation > MOUNTAIN_THRESHOLD) return "mountains";
	return MIDDLE_TERRAIN[Math.floor(Math.random() * MIDDLE_TERRAIN.length)];
}

// Map-gen pass: assign terrain + resource once per tile, same as the plan's
// "modifiers computed once at map gen from terrain + overlays" idea.
const tiles = new Map<string, TileData>();
grid.forEach((hex) => {
	const elevation = fractalNoise(hex.x / NOISE_SCALE, hex.y / NOISE_SCALE);
	const terrain = terrainForElevation(elevation);
	const resource: ResourceType = terrain === "mountains" && Math.random() < 0.35 ? "ore_deposit" : null;
	tiles.set(hex.toString(), { terrain, elevation, resource });
});

const canvas = document.querySelector<HTMLCanvasElement>("#hexCanvas")!;
const ctx = canvas.getContext("2d")!;
const infoPanel = document.querySelector<HTMLDivElement>("#tileInfo")!;
const legend = document.querySelector<HTMLUListElement>("#legend")!;

for (const terrain of TERRAIN_TYPES) {
	const li = document.createElement("li");
	li.innerHTML = `<span class="swatch" style="background:${TERRAIN_COLORS[terrain]}"></span>${terrain}`;
	legend.appendChild(li);
}

let selectedKey: string | null = null;

function draw(): void {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	ctx.translate(PADDING, PADDING);

	grid.forEach((hex) => {
		const key = hex.toString();
		const tile = tiles.get(key);
		if (!tile) return;

		const corners = hex.corners;

		ctx.beginPath();
		corners.forEach((corner, i) => {
			if (i === 0) ctx.moveTo(corner.x, corner.y);
			else ctx.lineTo(corner.x, corner.y);
		});
		ctx.closePath();

		ctx.fillStyle = TERRAIN_COLORS[tile.terrain];
		ctx.fill();

		const isSelected = key === selectedKey;
		ctx.strokeStyle = isSelected ? "#ffffff" : "rgba(0, 0, 0, 0.35)";
		ctx.lineWidth = isSelected ? 3 : 1;
		ctx.stroke();

		if (tile.resource) {
			ctx.beginPath();
			ctx.arc(hex.x, hex.y, 5, 0, Math.PI * 2);
			ctx.fillStyle = "#fff3b0";
			ctx.fill();
		}
	});

	ctx.restore();
}

canvas.addEventListener("click", (event: MouseEvent) => {
	const rect = canvas.getBoundingClientRect();
	const point: Point = {
		x: event.clientX - rect.left - PADDING,
		y: event.clientY - rect.top - PADDING,
	};

	const hex = grid.pointToHex(point, { allowOutside: false });
	if (!hex) return;

	const key = hex.toString();
	const tile = tiles.get(key);
	if (!tile) return;

	selectedKey = key;
	infoPanel.innerHTML = `
    <div><span class="label">Cube coords:</span> q=${hex.q}, r=${hex.r}, s=${hex.s}</div>
    <div><span class="label">Terrain:</span> ${tile.terrain}</div>
    <div><span class="label">Elevation:</span> ${tile.elevation.toFixed(2)}</div>
    <div><span class="label">Resource:</span> ${tile.resource ?? "none"}</div>
  `;
	draw();
});

draw();
