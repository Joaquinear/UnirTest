Feature: Logging in

Scenario: Iniciar session en la pagina

Given Im on the right page
When I fill the form with my email: "joaquinear21@gmail.com" and my password: "123456789"
Then I should see the dasboard page


@probando
Scenario Outline: Iniciar session en la pagina

Given Im on the right page
When I fill the form with my <Email> and my <Password> 
Then I should see the dasboard page

Examples:
    | Email                   | Password  |
    | joaquinear21@gmail.com  | 12345678  |
    | jasd@gmail.com          | 12332312  |
