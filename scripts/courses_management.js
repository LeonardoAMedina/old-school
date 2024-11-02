fetch('./assets/data.json')
.then(response => {
   return response.json();
})
.then(data => {
    localStorage.setItem('cursos', JSON.stringify(data));


const cursosGuardados = localStorage.getItem('cursos');
const cursosGuardadosParseados=JSON.parse(cursosGuardados);
const cursosContainer = document.getElementById('cursos__relacionados_js');

const cargarCursos = () =>{
    cursosGuardadosParseados.cursos.forEach((curso)=>{

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