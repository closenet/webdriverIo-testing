@winback
Feature: UK customer entering the tv winback journies

  Background:
    Given a fresh test session is created

@temp
  Scenario: a customer select discounted tv pack on its own
    Given the customer open the winback page
    When the TV_ELIGIBLE_TO_WINBACK performs sky-id login
    Then verify winback home page content
    And verify offered products amounts
    And verify products discounted amount
    When opening to confirm details in split page
    Then verify 'Is this your address' header on the page
    When click the option 'I still live here'
    And verify 'is your satellite dish' header on the page
    When click 'yes, my dish is still up'
    Then verify the 'We think you have a sky HD box' header on the page
    When click the option 'I will be using this Sky Box'
    Then verify the 'Still have your Sky viewing card' header on the page
    When clicking the option 'Yes'
    Then verify the 'Your new Direct Debit with Sky' header on the page
    And the bank details box does exist
    When ticking the box 'I am the holder of the above account'
    Then the review button becomes active and can be clickable
    When clicking the review order button
    Then verify the Review and confirm your order does exist
    When clicking the 'Buy now' button
    Then verify content on confirmation
    And click the Rest App link to rest the customer data



  Scenario Outline: verify different product selection and the total price when selecting them with tv pack
    Given the customer open the winback page
    When the TV_ELIGIBLE_TO_WINBACK performs sky-id login
    And select to add <product> tv product(s)
    Then verify the total cost is <amount> when buying <product> with TV base pack
    And click checkout to continue
    Examples:
      | product  | amount |
      | box sets | £18    |
      | cinema   | £28    |
      | sports   | £33.50 |
      | kids     | £18    |
      | sky hd   | £18    |


  Scenario: verify sports hd gets enabled then seleceted after selecting sports product
    Given the customer open the winback page
    When the TV_ELIGIBLE_TO_WINBACK performs sky-id login
    Then verify sports hd button is disabled
    When select to add sports tv product(s)
    Then verify sports hd button is enabled
    When select to add sports hd tv product(s)
    Then verify the total cost is £35.50 when buying sports hd with TV base pack
    And click checkout to continue
