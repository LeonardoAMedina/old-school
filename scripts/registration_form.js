/*Carga de curso, busqueda de curso por parametro*/
const parametrosUrl = new URLSearchParams(window.location.search);
const idDeCurso= parametrosUrl.get('idDeCurso');

const cursosGuardados = localStorage.getItem('cursos');
const cursosGuardadosParseados=JSON.parse(cursosGuardados);

const buscarCurso = (curso) =>{
    return curso.id == idDeCurso;
}

const cursoAMostrar = cursosGuardadosParseados.cursos.filter(buscarCurso);

/*Seteando form con datos de curso*/

const nombreCurso = document.getElementById('nombreCurso');
const precioCursoUnitario = document.getElementById('precioUnitario');
const precioTotalContenedor= document.getElementById('precioTotal_js');
let precioTotalValor =0;

nombreCurso.innerHTML=` ${cursoAMostrar[0].name}`;
precioCursoUnitario.innerHTML=`$ ${cursoAMostrar[0].precio}`;

/*El precio nos viene con ',' y necesitamos '.' para convertirlo a number y no perder los decimales*/
let precioUnitario= parseFloat(cursoAMostrar[0].precio.replace(',','.'));

let cantidadDePersonas = 1;

const actualizarPrecioTotal = () =>{
    precioTotalValor = cantidadDePersonas * precioUnitario;
    precioTotalContenedor.innerHTML=precioTotalValor;
}

actualizarPrecioTotal();

/*Formulario*/
const formulario = document.getElementById('registerForm');

const btnLimpiarCampo = document.getElementById('limpiar-form-item_js');

btnLimpiarCampo.addEventListener('click', (event) =>{
    document.getElementById('name1').value = "";
    document.getElementById('surname1').value = "";
    document.getElementById('mail1').value = "";
});

const btnAgregarPersona = document.getElementById('agregarPersona_js');
const puntoDeInsercion = document.getElementById('agregarPersonaContainer_js');
let idsGenerados = 1;

const agregarPersona = () =>{
    idsGenerados++;
    const nuevoRegistro =document.createElement('article');
    nuevoRegistro.classList.add('register-form-item');
    nuevoRegistro.setAttribute('id',`form-registro${idsGenerados}`);
    nuevoRegistro.innerHTML = `                
    <input class="register-form-input"type="text" id="name${idsGenerados}" name="name${idsGenerados}" placeholder="Nombre" required>
    <input class="register-form-input"type="text" id="surname${idsGenerados}" name="surname${idsGenerados}" placeholder="Apellido" required>
    <input class="register-form-input" type="email" id="mail${idsGenerados}" name="mail${idsGenerados}" placeholder="Mail" required>
    <button onclick='eliminarPersona(${idsGenerados})' class="btn-delete-person" type="button">
        <img class="icon" src="./images/minus-icon-wh.svg">
    </button>
    `;
    formulario.insertBefore(nuevoRegistro, puntoDeInsercion);
    cantidadDePersonas++;
    actualizarPrecioTotal();
}

const eliminarPersona = (numeroRegistroAborrar) =>{
    const registroAborrar = document.getElementById(`form-registro${numeroRegistroAborrar}`);
    registroAborrar.remove();
    cantidadDePersonas--;
    actualizarPrecioTotal();
};

/*Manejo de submit y validaciones*/

const botonInscribirse =document.getElementById('inscripcionBtn_js');

const mostrarModalResumen =(registrados) =>{
    const modal= document.getElementById('modal');
    document.getElementById('modal-titulo_js').innerHTML=`Felicitaciones, completaste la inscripcion a ${cursoAMostrar[0].name}.
     <br/> Inscriptos: <br/>`;

    let listadoInscritos = document.getElementById('modal-personas-inscriptas_js');
    listadoInscritos.innerHTML="";
    registrados.forEach(registrado =>{
        let nuevoLi = document.createElement('li');
        nuevoLi.innerHTML= `${registrado.name}  ${registrado.surname}`;
        listadoInscritos.appendChild(nuevoLi);
    });
    
    modal.show();
    
}

let inscripcion ={id: idDeCurso, name:cursoAMostrar[0].name, precio: cursoAMostrar[0].precio, precioTotal: precioTotalValor, registrados:[]};

formulario.addEventListener('submit' ,(event) => {
    
    event.preventDefault();
    let registrados=[];
    var formData = new FormData(formulario);
    let flag=0;
 
    let nuevoRegistrado={};
    for (let key in Object.fromEntries(formData)) {
        let flagArray = ['name', 'surname', 'email'];
        nuevoRegistrado[`${flagArray[flag]}`] = Object.fromEntries(formData)[key];
        if(flag==2){
            registrados.push(nuevoRegistrado);
            flag=0;
            nuevoRegistrado={};
        }else{
           flag++;
        }
      }


        inscripcion.precioTotal=precioTotalValor;
        inscripcion.registrados=registrados;
        mostrarModalResumen(registrados);
        chargeShoppingCard();
});

const terminar = () => {
    window.location.href = './old-school.html';
}