const form = document.getElementById('crearUsuario_js');
const usuariosExistentes = localStorage.getItem('usuarios');
let usuariosExistentesParseados = {usuarios: [] };

const saltoDeLinea = document.createElement("br");

if(usuariosExistentes !=null){
    usuariosExistentesParseados = JSON.parse(usuariosExistentes);
};

let mensajeError= document.getElementById('error_js');

form.addEventListener('submit', (event) =>{

    event.preventDefault();
    mensajeError.innerHTML='';
    mensajeError.style.display ='none';

    let email = form.elements['email'].value;
    let userName = form.elements['username'].value;
    let password = form.elements['password'].value;
    let passwordCheck = form.elements['passwordCheck'].value;

    let formTieneErrores = false;
    let usuarioExistente;

    const chequearUsuario = (usuario) => {

        if (userName == usuario.name){
            let errorUsuarioDuplicado = document.createTextNode(`* El nombre de usuario ya existe. Elija otro nombre de usuario`);
            mensajeError.appendChild(errorUsuarioDuplicado);
            mensajeError.appendChild(saltoDeLinea);
            formTieneErrores = true;
            return true;
        }
    }

    usuarioExistente = usuariosExistentesParseados.usuarios.filter(chequearUsuario);

    if(! /[A-z]{4,}/.test(userName) || ! /[A-z]{4,8}/.test(userName)){
        let errorUserName = document.createTextNode(`* Nombre de usuario debe tener entre 4 y 8 caracteres`);
        mensajeError.appendChild(errorUserName);
        mensajeError.appendChild(saltoDeLinea);
        formTieneErrores = true;
    };

    if(/[^a-z]/.test(userName)){
        let errorUserName = document.createTextNode(`* El nombre solo puede estar compuesto por letras`);
        mensajeError.appendChild(errorUserName);
        mensajeError.appendChild(saltoDeLinea);
        formTieneErrores = true;
    }

    if(password == userName){
        let errorNameYPasswordIguales = document.createTextNode(`* La contraseña no puede ser igual al nombre de usuario.`);
        mensajeError.appendChild(errorNameYPasswordIguales);
        mensajeError.appendChild(saltoDeLinea);
        formTieneErrores = true;
    }

    if(password != passwordCheck){
        let errorContraseñasDistintas = document.createTextNode(`* Las contraseñas ingresadas no coinciden.`);
        mensajeError.appendChild(errorContraseñasDistintas);
        mensajeError.appendChild(saltoDeLinea);
        formTieneErrores = true;
    }

    if(password.length < 6){
        let errorContraseñaCorta = document.createTextNode(`* La contraseña debe tener un minimo de 6 caracteres`);
        mensajeError.appendChild(errorContraseñaCorta);
        mensajeError.appendChild(saltoDeLinea);
        formTieneErrores = true;
    }

    if(!formTieneErrores){
        let nuevoUsuario ={ email: email, name: userName, password: password};
        usuariosExistentesParseados.usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosExistentesParseados));
        form.submit();
    }else{
        mensajeError.style.display ='unset';
    }
});