Feature: Computer Deletion - basic functionality

 Background:
   Given I am on the Computer database screen

 @COMPUTER_MANAGER @DELETE @HIGH @REGRESSION
 Scenario: [COMPUTER_MANAGER] Delete a computer
  And I select "StonewareDelete" in a list
  When I press the button Delete
  Then I should see an action confirmation message "Done! Computer has been deleted"

 