const usuarioLogueado= JSON.parse(localStorage.getItem('loggedUser'));

let botonesContenedor;
const manejarUsuarioLogueado=()=>{
    botonesContenedor= document.getElementById('header-btn-js');
    botonesContenedor.innerHTML=`
    <p class="logged-name">Perfil de ${usuarioLogueado[0].name.toUpperCase()}</p>
    <img src="images/header/logged-user.svg" class="logged"> 
    </br>
    <div id="userSidebar" class="user-sidebar">
    
        <button class="link-button" onclick="cerrarSesion()">Cerrar sesión</button>
        <button class="link-button" onclick="eliminarUsuario()">Eliminar Usuario</button>
    
    </div>
    `;
    botonesContenedor.style.cssText +='align-items:center';
};

if(usuarioLogueado){
    manejarUsuarioLogueado();
}


const cerrarSesion= () =>{
    let respuesta = confirm('Esta seguro de que desea cerrar sesion?');
    if(respuesta){
        localStorage.removeItem('loggedUser');
        window.location.href = './old-school.html';
    }
}

const eliminarUsuario= () =>{
    const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios'));
    
    let respuesta = confirm('Esta seguro de que desea eliminar usuario? Esta accion es irreversible');
    if(respuesta){
        let usuariosFiltrados = usuariosExistentes;
        usuariosFiltrados.usuarios = usuariosExistentes.usuarios.filter((usuario) => usuario.name !== usuarioLogueado[0].name); // filtramos

        localStorage.setItem('usuarios', JSON.stringify(usuariosFiltrados));
        localStorage.removeItem('loggedUser')

        window.location.href = './old-school.html';
    }
}