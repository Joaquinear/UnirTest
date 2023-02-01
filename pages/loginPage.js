const {I} = inject()

class LoginPage {

  constructor() {
    this.navBar = "//div[@class='w-100']"
    this.inputEmail = "input[placeholder='Email']"
    this.inputPassword = "input[placeholder='Password']"
    this.submitButton = '(//button[1][@type="submit"])[1]'
    this.loginPageText = "//h2[contains(text(),'Hi,')]"
  }

   visit() {
    I.amOnPage("")
    I.waitForElement(this.navBar,4)
    I.seeInCurrentUrl('login')

    //console.log('Visitando URL ', url)
  }

   login(email, password) {
    I.waitForElement(this.inputEmail,4)
    I.fillField(this.inputEmail, email,4)
    I.fillField(this.inputPassword, password)
    I.click(this.submitButton)
    I.saveScreenshot('pruba.png')
  }

   validateLogin() {
    I.waitForElement(this.loginPageText,10)
    I.waitForElement(this.navBar,10)
  }

}

module.exports = new LoginPage()
module.exports.LoginPage = LoginPage