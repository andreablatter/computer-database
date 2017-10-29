Feature: Computer Navigation - basic functionality

 Background:
   Given I am on the Computer database screen

  @COMPUTER_MANAGER @HIGH @NAVIGATION @REGRESSION
  Scenario: [COMPUTER_MANAGER] Grid Navigation
  And I navigate to the "next" page
  When I open an item in a grid
  Then I should see the first page

  @COMPUTER_MANAGER @HIGH @NAVIGATION @REGRESSION
  Scenario: [COMPUTER_MANAGER] Sort in grid buttons
    When I open an item in a grid
    And I press sort column
    Then I should see the items ordered

