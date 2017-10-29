Feature: Computer Creation - basic functionality
 As a user
 I want to create computers

 Background:
   Given I am on the Computer database screen

 @COMPUTER_MANAGER @HIGH @CREATE @REGRESSION
 Scenario Outline: [COMPUTER_MANAGER] Create a new computer with different values
  When I press button Add a New Computer
  And I "create" computer name <Name>, introduced date <Introduced>, discontinued date <Discontinued> and select the company <Company>
  And I press button "Create this computer"
  Then I should see an action confirmation message <Name>

   Examples:
  |Name			    |Introduced 	|Discontinued 	|	Company 		  |
  |"Stoneware"	    |"2012-08-15"	|"2018-06-25"	|"Lenovo Group"		  |
  |"Samsung MQ32"	|""				|"2023-08-18"	|"Samsung Electronics"|
  |"ASUS Z0897" 	|"2008-04-23"	|""				|"ASUS" 			  |
  |"W045897"		|"2011-10-16"	|"2043-11-08"	|""        			  |


 @COMPUTER_MANAGER @HIGH @CREATE @REGRESSION
  Scenario: [COMPUTER_MANAGER] Create a new computer without required fields
  And I press button Add a New Computer
  When I "create" computer name "", introduced date "2012-08-15", discontinued date "2023-08-18" and select the company "ASUS"
  And I press button "Create this computer"
  Then I should see a message for a field "name"

 @COMPUTER_MANAGER @MEDIUM @CREATE
 Scenario: [COMPUTER_MANAGER] Cancel computer creation
  And I press button Add a New Computer
  When I "create" computer name "Stoneware", introduced date "2012-08-15", discontinued date "2023-08-18" and select the company "ASUS"
  And I press the button Cancel
  Then I should not see a computer created

   @COMPUTER_MANAGER @HIGH @CREATE @REGRESSION
 Scenario Outline: [COMPUTER_MANAGER] Validate Introduce and Discontinued fields
  And I press button Add a New Computer
  When I "crete" computer name <Name>, introduced date <Introduced>, discontinued date <Discontinued> and select the company <Company>
  And I press button "Create this computer"
  Then I should see a message for a field <Message>

  Examples:
  |Name			    |Introduced 	|Discontinued 	|	Company 		  | Message                 |
  |"Stoneware"	    |"20120815"		|"2018-06-25"	|"Lenovo Group"		  |"introduced"             |
  |"Samsung MQ32"	|"2012-08-15"	|"20230818"		|"Samsung Electronics"|"discontinued"           |
  |"ASUS	Z0897"	|"20120815"		|"20120815"		|"ASUS"				  |"introduced"             |



