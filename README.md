# TrayCode

This repository if for storing functions used in Tray.io solutions.  These are for the config wizard in embedded, and for JS script nodes that may be used in multiple workflows/solutions.  

bynderMondayGetBoards:

Uses the Tray GraphQL node to fetch a list of boards from the Monday using the Monday Auth slot.  The list of boards is returned to the user to select.

bynderMondayGetColumn:

Activated when the `bynderMondayGetBoards` has a value.  From the given board, gets a list of columns for that board and returns it to the user.

bynderMondayGetTriggerValues:

Activated when the `bynderMondayGetColumn` has a value.  From the given column, return a picklist of defined values, or if there are no defined values allow a user to enter a custom value.  Will reset when a user changes either `bynderMondayGetBoards` or `bynderMondayGetColumn` .  