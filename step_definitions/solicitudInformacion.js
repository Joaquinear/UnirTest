const {I,unirHome,informacionPage} = inject()

Given("esta en la pagina de UNIR", () => {
    // TODO: replace with your own step
    unirHome.visit()
  });
  When("El usuario presione en el boton Solicitar informacion",()=>{
    unirHome.requestInformacion()
  });
  Then("se abrira el formulario Soliciar Informacion",()=>{
    informacionPage.visit()
  });
 

