Feature: Computer Updated - basic functionality
  As a user
  I want to update computers

 Background:
   Given I am on the Computer database screen

 @COMPUTER_MANAGER @HIGH @UPDATE @REGRESSION
  Scenario: [COMPUTER_MANAGER] Update a computer
   And I select "Stoneware" in a list
   When I "update" computer name "StonewareUpdate", introduced date "", discontinued date "" and select the company "ASUS"
   And I press button "Save this computer"
   Then I should see an action confirmation message "StonewareUpdate"

  @COMPUTER_MANAGER @MEDIUM @UPDATE @REGRESSION
   Scenario: [COMPUTER_MANAGER] Cancel updated computer
   And I select "Stoneware" in a list
   When I "update" computer name "Update", introduced date "", discontinued date "" and select the company "ASUS"
   And I press the button Cancel
   Then I should not see a computer created

   @COMPUTER_MANAGER @MEDIUM @UPDATE
   Scenario: [COMPUTER_MANAGER] Update a computer without required fields
    And I select "Stoneware" in a list
    When I "update" computer name "", introduced date "", discontinued date "" and select the company ""
    And I press button "Save this computer"
    Then I should see a message for a field "name"

   @COMPUTER_MANAGER @MEDIUM @UPDATE
  Scenario Outline: [COMPUTER_MANAGER] Validate Introduce and Discontinued dates in updated
     And I select "Stoneware" in a list
     When I "update" computer name <Name>, introduced date <Introduced>, discontinued date <Discontinued> and select the company <Company>
     And I press button "Save this computer"
     Then I should see a message for a field <Message>


  Examples:
  |Name			    |Introduced 	|Discontinued 	|	Company 		  | Message  	  |
  |"Stoneware"	    |"20120815" 	|""	            |""         		  |"introduced"   |
  |"Samsung MQ32"	|""	            |"20230818"		|"Samsung Electronics"|"discontinued" |
  |"ASUS	Z0897"	|"20120815"		|"20120815"		|"ASUS"				  |"introduced"	  |
