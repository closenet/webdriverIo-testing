@prereg
Feature: ROI customers will get into the pre-reg form to get them
  register their interest for the Fibre to the Home FTTH product

  Background:
    Given a fresh test session is created
    And Roi customer open the prereg page

#valid scenarios
  Scenario: Prospect customer register their interest for FTTH in the pre-reg form successfully
    Given clicks on the prospect button
    When enters the following personal details here
      | firstName | lastName  | email             | phone        | eircode  |
      | Mohammed  | Al-Nuaimi | test@prereg.co.uk | 011133325114 | A65 F4E2 |
    Then submits the form
    And verify message to thanks the customer Thanks, Sky Fibre to the Home is now just around the corner.

  Scenario: Existing customers register their interest for FTTH in the pre-reg form successfully
    Given clicks on the existing button
    And login using 430008195116.swE05PR@sky.uk and test1234 as credanials
    When enter Eircode A65 F4E2 for existing customer
    Then submits the form
    And verify message to thanks the customer Thanks, Sky Fibre to the Home is now just around the corner.

  Scenario: agent register customer interest in FTTH in the pre-reg form successfully
    Given agent directed to the agent page
    When enters the following personal details by agent
      | agentId | channel | callType | accountNumber | isExsiting | firstName | lastName  | email             | phone        | eircode  |
      | 12345   | web     | urgent   | 430008195116  | yes        | Mohammed  | Al-Nuaimi | test@prereg.co.uk | 011133325114 | A65 F4E2 |
    Then submits the form
    And verify message to thanks the customer Thanks, Sky Fibre to the Home is now just around the corner.



# invalid scencarios
  Scenario: Prospect customer not register their interest for FTTH in the pre-reg form successfully
    Given clicks on the prospect button
    When enters the following personal details here
      | firstName | lastName | email            | phone | eircode |
      | mohammed@ |          | testprereg.co.uk | 3423  | A65     |
    Then submits the form
    Then verify the following values for the customer are invalid
      | firstName                                              | lastName                             | email                                                                                     | phone                                                               | eircode                               |
      | Error:\nYour name must not contain special characters. | Error:\nPlease enter your last name. | Error:\nSorry, we do not recognise that email address. Please double check and try again. | Error:\nYour mobile phone number is invalid. Do not include spaces. | Error:\nPlease enter a valid eircode. |


  Scenario: Existing customers not register their interest for FTTH in the pre-reg form successfully
    Given clicks on the existing button
    And login using 430008195116.swE05PR@sky.uk and test1234 as credanials
    When enter Eircode A65 for existing customer
    Then submits the form
    Then verify the following values for the customer are invalid
      | eircode                               |
      | Error:\nPlease enter a valid eircode. |
