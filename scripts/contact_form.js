const form = document.getElementById('contact-form_js');

const mensajeError= document.getElementById('error_js');
const contenedorCaracteresIngresados = document.getElementById('caracteres-ingresados_js');

const datosIngresados = form.elements['datos'];
const saltoDeLinea = document.createElement("br");

datosIngresados.addEventListener("keyup",(event)=>{
    contenedorCaracteresIngresados.innerHTML= `Cantidad de caracteres ingresados: ${datosIngresados.value.length} 
    </br> Caracteres restantes ${1000 -datosIngresados.value.length} </br>`;
    contenedorCaracteresIngresados.style.display='unset';
});

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    mensajeError.innerHTML='';
    mensajeError.style.display ='none';
    let formTieneErrores = false;

    let email = form.elements['email'].value;
    let nombre = form.elements['name'].value;
    let apellido = form.elements['surname'].value;
    let telefono = form.elements['tel'].value;
    let datos = form.elements['datos'].value;

    if(! /([A-Za-z])/.test(nombre) ){
        let nombreIncompleto = document.createTextNode(`* Por favor complete su nombre`);       
        mensajeError.appendChild(saltoDeLinea);
        mensajeError.appendChild(nombreIncompleto);
        formTieneErrores = true;
    }

    if(! /([A-Za-z])/.test(apellido) ){
        let apellidoIncompleto = document.createTextNode(`* Por favor complete su apellido`);
        mensajeError.appendChild(saltoDeLinea);
        mensajeError.appendChild(apellidoIncompleto);
        formTieneErrores = true;
    }

    if(datos.length > 1000 || datos.length == 0){
        let datosError = document.createTextNode(`* El mensaje no puede estar vacio ni contener mas de 1000 caracteres`);       
        mensajeError.appendChild(saltoDeLinea);
        mensajeError.appendChild(datosError);
        formTieneErrores = true;
    }

    if(! /([A-Za-z]){1,}[@]([A-Za-z]){1,}[.]([A-Za-z]){1,}/.test(email)){
        let datosError = document.createTextNode(`* El mail debe cumplir con el formato ejemplo@ejemplo.com`);       
        mensajeError.appendChild(saltoDeLinea);
        mensajeError.appendChild(datosError);
        formTieneErrores = true;
    }

    if(!(/[0-9]{4}[-]{1,}[0-9]{4}/.test(telefono) ||  /[0-9]{8}/.test(telefono))){
        let datosError = document.createTextNode(`* Los formatos de telefono permitidos son: 12345678 o 1234-1234 `);       
        mensajeError.appendChild(saltoDeLinea);
        mensajeError.appendChild(datosError);
        formTieneErrores = true;
    }

    if(formTieneErrores){
        mensajeError.style.display ='unset';
    }else{
        let modal = document.getElementById('modal');
        modal.classList.add('open');
        document.body.classList.add('modal-open');
    }
});

function closeModal(){
    window.location.replace('./old-school.html');
}