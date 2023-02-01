const {I,loginPage} = inject()

Given('Im on the right page', () => {
    // TODO: replace with your own step
    loginPage.visit()
  });
  When(/^I fill the form with my email: "([^"]*)" and my password: "([^"]*)"$/,(email,password)=>{
    loginPage.login(email, password)
  });
  Then('I should see the dasboard page',()=>{
    loginPage.validateLogin()
  });

  When(/^I fill the form with my (.*) and my (.*)$/,(email,password)=>{
    loginPage.login(email, password)
  });
  Then('I should see the dasboard page',()=>{
    loginPage.validateLogin()
  });