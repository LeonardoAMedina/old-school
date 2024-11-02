const form = document.getElementById('crearUsuario_js');
const usuariosExistentes = localStorage.getItem('usuarios');
let usuariosExistentesParseados = {usuarios: [] };

if(usuariosExistentes !=null){
    usuariosExistentesParseados = JSON.parse(usuariosExistentes);
};

form.addEventListener('submit', (event) =>{

    event.preventDefault();

    let email = form.elements['email'].value;
    let userName = form.elements['username'].value;
    let password = form.elements['password'].value;
    let passwordCheck = form.elements['passwordCheck'].value;

    /* Faltan todas las validaciones, chequear valores, chequear coincidencia de passwords, chequear que nombre de usuario no exista*/

    /*Si todo esta bien entonces creamos usuario y lo agregamos a la lista de usuarios*/
    let nuevoUsuario ={ email: email, name: userName, password: password};
    usuariosExistentesParseados.usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosExistentesParseados));

    /*Ahora podemos hacer submit, en este caso vamos a hacer que se loguee el usuario*/
    /*los datos se envian con GET, charlado en clase*/

    

    form.submit();

});