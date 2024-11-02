
form = document.getElementById('login_js');
const usuariosExistentes = localStorage.getItem('usuarios');
let usuariosExistentesParseados = {usuarios: [] };

if(usuariosExistentes !=null){
    usuariosExistentesParseados = JSON.parse(usuariosExistentes);
}

form.addEventListener('submit', (event) =>{
    let coincidencia;
    event.preventDefault();

    let userName = form.elements['username'].value;
    let password = form.elements['password'].value;

    const chequearUsuarioYcontrasenia = (usuario) => {

        if (userName == usuario.name && password == usuario.password){
            return true;
        }
    }

    coincidencia = usuariosExistentesParseados.usuarios.filter(chequearUsuarioYcontrasenia);

    if(coincidencia.length >0){
        localStorage.setItem('loggedUser', JSON.stringify(coincidencia));
        console.log("login correcto");
        /*form.submit();*/
    }else{        
        /* Agregar mensaje cuando usuario y contraseña son incorrectas*/
        console.log("login falla");
    }
})