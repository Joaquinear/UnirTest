@envioFormulario
Feature: Formulario Unir Informacion envio
    Scenario: Envio de formulario solicitud informacion

        Given esta en la pagina de UNIR
        When El usuario presione en el boton Solicitar informacion abriendose el formulario llenandolo
        Then Usuario persiona enviar formulario mostrandose mensaje de confirmacion