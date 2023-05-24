# TrayCode

This script is to create a picklist of Webdam folders in the config wizard. When a Webdam auth is successfully loaded, it will call the Webdam API for a list of folders at the root and return them to the user. When the user returns to the page, it will check if that folder is still valid. If so, it will return the current folder value. If not, it will get a new list of folders from the API.
