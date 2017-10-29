Installation

	• On computer-database folder run a command
	            npm install
	• For running regression test execute
		protractor --cucumberOpts.tags=@REGRESSION

Description

- Scenarios are tagged and can be run by
	1- Functionality: @CREATE, @NAVIGATION, @UPDATE,@DELETE
		protractor --cucumberOpts.tags=@NAVIGATION,@CREATE
	2- Priority: @HIGH, @MEDIUM,  @LOW
    3- Regression Suite: @REGRESSION
	4- Feature: @COMPUTER_MANAGER

- Every  scenario has a prefix between []  with the feature name,  for identify and manage Test Scenarios when creating a Regression Test Plan

Notes

- I failed the scenario "Sort in grid buttons " because is not working now.
