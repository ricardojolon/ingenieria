

$(document).on('ready', inicio);

function inicio(){
	$('#enviar').on('click', enviar);
    
}

function enviar(){
    if(validaformulario()){
        alert("Envio correcto");
    }    
}

function validaformulario(){
    // Campos de texto
    $('#formulario input').removeAttr('style');


    if($('#nombre').val() == ""){
    	alert("Falta colocar nombre.")
        $('#nombre').css('border-color','red').focus();
        return false;

        }


    if($('#correo').val() == ""){
    	alert("Falta colocar correo.")
        $('#correo').css('border-color','red').focus();
        return false;
    }   
   
  



    return true; // Si todo esta¡ correcto
}

