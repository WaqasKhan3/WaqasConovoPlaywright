Feature: Create Text Letter Order

  Scenario Outline: Create Text Letter Order for FNF
    Given I open the application
    And I login with username "<username>" and password "<password>"
    When I navigate to Text Letter page
    And I select recipient "<recipient>"
    And I type message "<message>"
    And I check the terms checkbox
    And I proceed to payment
    And I select credit card "<creditCard>"
    Then The credit card confirmation should be visible

  Examples:
    | username                                   | password    | recipient | message                     | creditCard |
    | hafizmuhammadwaqas.khan+10@conovoinc.com   | Abcd@1234   | Jawad     | This is for Automation test | 536753839  |
