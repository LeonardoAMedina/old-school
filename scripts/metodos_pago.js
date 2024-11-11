const cursosEnCarrito = localStorage.getItem('shoppingCartCursos');
const cursosEnCarritosParseados=JSON.parse(cursosEnCarrito);

const tituloPagina= document.getElementById('pago-curso-titulo_js');
const listadoDeCursosAPagar = document.createElement('ul');
listadoDeCursosAPagar.style.listStyleType='none';
const puntoDeInsercion = document.getElementById('tipo-pago_js');
const contenedorTitulos= document.getElementById('pago-curso-cabecera_js');

let montoTotal = 0;
let contenedorMontoTotal= document.getElementById('pago-curso-form-importe_js');

cursosEnCarritosParseados.cursos.forEach(curso => {
    let tituloCurso= document.createElement('li');
    tituloCurso.innerHTML=`${curso.name}`;
    listadoDeCursosAPagar.appendChild(tituloCurso);
    
    let precioUnitario= parseFloat(curso.precio.replace(',','.'));
    montoTotal+=precioUnitario;
});

contenedorTitulos.insertBefore(listadoDeCursosAPagar,puntoDeInsercion);
contenedorMontoTotal.innerHTML=`$ ${montoTotal.toPrecision(5)}`;
