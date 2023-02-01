const {I} = inject()

class UnirHomePage{
    constructor(){
        this.NavBar = "//div[@class='header__navbar l-flex--row l-flex--center -padding-lateral']"
        this.btnSolInformacion = "//a[normalize-space()='Solicita Información']"
        this.cookies = "//button[@id='truste-consent-button']"
    }
    visit(){
        I.amOnPage("")
        I.waitForElement(this.NavBar,10)
        I.waitForElement(this.btnSolInformacion,10)
        I.seeInCurrentUrl("")
    }
    aceptacionCokie(){
        I.wait(15)
        I.click(this.cookies)
    }
    requestInformacion(){
        
        I.click(this.btnSolInformacion)
    }
    
}
module.exports = new UnirHomePage()
module.exports.UnirHomePage = UnirHomePage