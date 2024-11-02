fetch('./assets/data.json')
.then(response => {
   return response.json();
})
.then(data => {
    localStorage.setItem('cursos', JSON.stringify(data));

const parametrosUrl = new URLSearchParams(window.location.search);
const idDeCurso= parametrosUrl.get('curso');

const cursosGuardados = localStorage.getItem('cursos');
const cursosGuardadosParseados=JSON.parse(cursosGuardados);

const buscarCurso = (curso) =>{
    return curso.id == idDeCurso;
}

const cursoAMostrar = cursosGuardadosParseados.cursos.filter(buscarCurso);

//Si el curso no se encuentra redireccionamos al home
if(cursoAMostrar.length==0){
    window.location.href = './old-school-dv.html';
}

const cursoContainer = document.getElementById('curso_container_js');
cursoContainer.innerHTML = 
            `
			<div class="curso-contenedor-img">
				<img src="${cursoAMostrar[0].imgUrl}" alt="Imagen del curso" class="curso__imagen">
			</div>
			<div id="curso__detalles_js" class="curso__detalles">
				<h1>${cursoAMostrar[0].name}</h1>
				<ul class="curso__detalles-lista">
					<li><span class="titulos">Valor: </span>$ ${cursoAMostrar[0].precio}</li>
					<li><span class="titulos">Tiempo de dedicacion necesario:</span> ${cursoAMostrar[0].duracion}</li>
					<li><span class="titulos modalidad-${cursoAMostrar[0].modalidad}">${cursoAMostrar[0].modalidad}</span> </li>
					<li><span class="titulos">Descripcion del curso: </span>
						<article>
                        ${cursoAMostrar[0].descripcion}
						</article>
					</li>
					<li><span class="titulos">Requisitos Previos: </span></li>
						<ul class="curso__detalles-requisitos">
                            ${cursoAMostrar[0].requisitos.map(requisito =>`<li> ${requisito}</li>`).join('')}
						</ul>
				</ul>
			</div>
			<div class="curso-cronograma">
				<h2>Contenidos por clase</h2>
				${cursoAMostrar[0].contenidosPorClase.map(clase =>`
				<details>
					<summary class="curso_cronograma-unidad">${clase.nombreClase}</summary>
					${clase.unidades.map(unidad =>`
					<div class="curso-cronograma-unidad-extendido">
						<div class="curso-cronograma-unidad-extendido-tipo">
							<img src="${unidad.iconUrl}">
						</div>

						<div class="curso-cronograma-unidad-extendido-nombre">
							<span>${unidad.nombre}</span>
						</div>

						<div class="curso-cronograma-unidad-extendido-duracion">
							<img src="./images/clock-icon.svg">
							<span>${unidad.duracion}</span>
						</div>
					</div>
					`).join('')}
					
				</details>
				`).join('')}
			</div>
            `;
const curso_detalles = document.getElementById('curso__detalles_js');
const link= document.createElement('a');
link.classList.add('link-button');

if (cursoAMostrar[0].modalidad == 'online'){
	link.href='./metodosPago.html';
	link.innerHTML= 'Agregar al carrito';
}

if (cursoAMostrar[0].modalidad == 'presencial'){
	link.href='./registrationForm.html';
	link.innerHTML= 'Inscribirse';
}

curso_detalles.appendChild(link);

const docenteContainer = document.getElementById('docente_container_js');
const calificacionDocente= Number(cursoAMostrar[0].docente.calificacion);
docenteContainer.innerHTML=
	`
		<div class="docente-contenedor-imagen">
			<img src="${cursoAMostrar[0].docente.imgUrl}" alt="Foto docente" class="docente-imagen">
		</div>
		<div class="docente__detalles">
			<ul class="docente__detalles-lista">
				<li class="docente__detalles-lista-nombre">${cursoAMostrar[0].docente.nombre}</li>
				<li>Calificacion
					<div id="docente-calification_js" class="docente-calification">
					</div>
				</li>
			</ul>
			<br>
			<article class="docente__detalles-extracto">					
				${cursoAMostrar[0].docente.descripcion}
			</article>
		</div>		

	`;

const calificacionContainer = document.getElementById('docente-calification_js');
let yellowStarElement = document.createElement('a');
let whiteStarElement = document.createElement('a');
whiteStarElement.classList.add('docente-calification_inactive');
yellowStarElement.innerHTML='&#9733;';
whiteStarElement.innerHTML='&#9733;';
for(let i=0; i< calificacionDocente;i++){
	calificacionContainer.appendChild(yellowStarElement.cloneNode(true));
};

if(calificacionDocente < 5){
	const estrellasFaltantes= 5 - calificacionDocente;
	for(let i=0; i< estrellasFaltantes;i++){
		calificacionContainer.appendChild(whiteStarElement.cloneNode(true));
	};	
}

const cursosContainer = document.getElementById('cursos__relacionados_js');

const cursosRelacionados= cursosGuardadosParseados.cursos.splice(4);

const cargarCursos = () =>{
    cursosRelacionados.forEach((curso)=>{

        const tarjetaCurso= document.createElement("div");
        tarjetaCurso.classList.add("cursos-relacionados-item");
        tarjetaCurso.innerHTML= 
        `
                <div class="cursos-relacionados-item-contenedor-imagen">
                    <img src="${curso.imgUrl}" alt="Foto Curso ${curso.name}" class="cursos-relacionados-item__imagen">
                </div>
                <div class="cursos-relacionados-item-contenedor-lista">
                <ul class="cursos-relacionados-item-lista">
                    <li>${curso.name}</li>
                    <li>${curso.duracion}</li>
                    <li>$${curso.precio}</li>
                    <li class="modalidad-${curso.modalidad}">${curso.modalidad}</li>
                </ul>
                <a class="link-button" href="./courseDetail-dv.html?curso=${curso.id}">Ver detalle</a>
                </div>
            `;
        
        cursosContainer.appendChild(tarjetaCurso);
    }
    )
}

cargarCursos();

});