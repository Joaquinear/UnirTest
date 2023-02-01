const {I} = inject()

class InformationPage{

    
    constructor(){
        this.confirmationPageInformacion= "//h1[normalize-space()='Solicita Información']"
        this.studiType = "#productType" //select
        this.areaProduct = "//select[@id='productArea']"//select
        this.titleInteres = "//select[@id='product']" //selec
        this.nameStudent = "#name"
        this.lastName = "#last-name"
        this.mail = "#email"
        this.countrySelect = "(//select[@id='country'])[1]"//select
        this.provinceSelect = "(//select[@id='states'])[1]"//select
        this.phone = "#phone"
        this.whtppYes = "(//input[@id='unir_acepta_wa_c-1'])[1]"
        this.whtppNo = "//label[@class = 'form__label  is_ok']/input[@name='unir[acepta_wa_c]'][2]"
        this.lastStudies = "#lastStudies"
        this.comentari = "#comments"
        this.comboSendInformacion = "//label[@class='form__label form__text-small']//span[contains(text(),'Deseo recibir información de UNIR, así como del re')]"
        this.btnSendInformacion = "#submitProduct"

        this.sendedConfirmacion = "//h3[normalize-space()='Hemos recibido tu solicitud correctamente']"


    }
    
    visit (){
        //I.amOnPage("")
        I.waitForElement(this.confirmationPageInformacion,4)
        //I.click(this.cookies,30)
        I.seeInCurrentUrl('')
    }

    fillFormRequestInformacion(name,lastName,phone,comentari,studiType,areaProduct,titleInteres,country,province,mail,lastStudies){
        
        //I.click(this.studiType)
        I.wait(8)
        I.waitForElement(this.studiType,10)
        I.selectOption(this.studiType,studiType)//"Grados"
        //I.click(this.this.areaProduct)
        I.selectOption(this.areaProduct,areaProduct,5)//"Ingeniería"
        //I.click(this.this.titleInteres)
        I.selectOption(this.titleInteres,titleInteres,5)//"Grado en Ingeniería Informática"
        I.fillField(this.nameStudent,name,5)
        I.fillField(this.lastName,lastName,5)
        I.fillField(this.mail,mail,5)
        //I.click(this.this.countryelect)
        I.waitForElement(this.countrySelect,10)
        I.selectOption(this.countrySelect,country)//"Bolivia" BO
        //I.click(this.this.provinceSelect)
        I.waitForElement(this.provinceSelect,10)
        I.selectOption(this.provinceSelect,province,5)
        //I.click(this.this.lastStudies)
        I.waitForElement(this.lastStudies,10)
        I.selectOption(this.lastStudies,lastStudies,5)// 
        I.fillField(this.phone,phone,5)
        I.fillField(this.comentari,comentari,5)
    }
    recibirInformacionWtpp(siOno){
        if(siOno == true){
            I.waitForElement(this.whtppYes,10)
            I.checkOption(this.whtppYes)
        }
        else{
            I.wait(10)
            I.waitForElement(this.whtppNo,10)
            I._locateClickable(this.whtppNo,10)
        }
    }
    recibirInformacionMail(siOno){
        if(siOno == true){
            I.waitForElement(this.comboSendInformacion,10)
            I.checkOption(this.comboSendInformacion)
        }
        else{
        }
    }
    envioForm(){
        I.click(this.btnSendInformacion)
    }
    validationSendInformacionPage(){
        I.wait(8)
        I.waitForElement(this.sendedConfirmacion,10)
    }

}

module.exports = new InformationPage()
module.exports.InformationPage = InformationPage