# TrayCode

This repository if for storing functions used in Tray.io solutions. These are for the config wizard in embedded, and for JS script nodes that may be used in multiple workflows/solutions.

---

bynderMondayDynmaicMap:

Creates a table of Monday columns and Bynder metaproperties for metadata mapping. Calls both the Monday API and Bynder API, then formats those responses into a single table.

---

bynderMondayGetBoards:

Uses the Tray GraphQL node to fetch a list of boards from the Monday using the Monday Auth slot. The list of boards is returned to the user to select.

---

bynderMondayGetColumn:

Activated when the `bynderMondayGetBoards` has a value. From the given board, gets a list of columns for that board and returns it to the user.

---

bynderMondayGetTriggerValues:

Activated when the `bynderMondayGetColumn` has a value. From the given column, return a picklist of defined values, or if there are no defined values allow a user to enter a custom value. Will reset when a user changes either `bynderMondayGetBoards` or `bynderMondayGetColumn` .

---

bynderStaticMetaproperty:

This script is to create a static map of metaproperty values for assets uploaded in a Bynder solution. Using a Bynder auth slot, it will call the Bynder metaproperties for that account, and return them in an array.

This is part 1 of creating a mapping tool. With this array, it can be fed into another config slot that uses Tray.io mapping. The fields can be displayed in the mapping table by selecting it from the input field of the tool.

---

genericDatePicker:

This is a generic function for the Tray config wizard. This will force the config slot to be a date picker. If there's already a value in the date picker, it will return the current value.

---

webdamUploadFolder:

This script is to create a picklist of Webdam folders in the config wizard. When a Webdam auth is successfully loaded, it will call the Webdam API for a list of folders at the root and return them to the user. When the user returns to the page, it will check if that folder is still valid. If so, it will return the current folder value. If not, it will get a new list of folders from the API.
