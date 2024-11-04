
const usuariosExistentes = localStorage.getItem('usuarios');
let usuariosExistentesParseados = {usuarios: [] };

if(usuariosExistentes !=null){
    usuariosExistentesParseados = JSON.parse(usuariosExistentes);
}

form = document.getElementById('login_js');

let campoUserName = form.elements['username'];
let campoPassword = form.elements['password'];

let mensajeError= document.getElementById('error_js');
mensajeError.innerHTML = `Usuario o contraseña incorrectos. <br/> Por favor intentelo nuevamente`;

campoUserName.addEventListener('click' , (event) =>{
    mensajeError.style.display= 'none';
});

campoPassword.addEventListener('click' , (event) =>{
    mensajeError.style.display= 'none';
});

form.addEventListener('submit', (event) =>{

    event.preventDefault();

    let userName = form.elements['username'].value;
    let password = form.elements['password'].value;

    let coincidencia;
    const chequearUsuarioYcontrasenia = (usuario) => {

        if (userName == usuario.name && password == usuario.password){
            return true;
        }
    }

    coincidencia = usuariosExistentesParseados.usuarios.filter(chequearUsuarioYcontrasenia);

    if(coincidencia.length){
        delete coincidencia[0].password;
        localStorage.setItem('loggedUser', JSON.stringify(coincidencia));

        form.submit();
    }else{        
        mensajeError.style.display ='unset';
    }
})