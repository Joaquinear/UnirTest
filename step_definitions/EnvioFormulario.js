const {I,unirHome,informacionPage} = inject()

Given("esta en la pagina de UNIR", () => {
    // TODO: replace with your own step
    unirHome.visit()
    //unirHome.aceptacionCokie();
  });
  When("El usuario presione en el boton Solicitar informacion abriendose el formulario",()=>{
    
    informacionPage.visit()
    
  });
  Then("El usuario presione en el boton Solicitar informacion abriendose el formulario llenandolo",()=>{
    unirHome.aceptacionCokie()
    unirHome.requestInformacion()
    
    
    informacionPage.fillFormRequestInformacion("JoaquinQA","AlconQA","74600101","esto es una prueba",'Grados','Ingeniería','Curso de Adaptación Ingeniería Informática','BO','BO-S',"JoaquinQaUnir@unirqacupon.com",'Diplomado');
    informacionPage.recibirInformacionWtpp(true)
    //informacionPage.recibirInformacionMail(false)

  });
  Then("Usuario persiona enviar formulario mostrandose mensaje de confirmacion",()=>{
    informacionPage.envioForm()
    informacionPage.validationSendInformacionPage()
  })
 
 
