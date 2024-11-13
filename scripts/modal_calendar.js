const cursos = JSON.parse(localStorage.getItem('cursos'));
const cursoModal1 = cursos.cursos[0];
const cursoModal2 = cursos.cursos[3];
const cursoModal3 = cursos.cursos[2];

const modal1=document.getElementById('modal1');
const modal2=document.getElementById('modal2');
const modal3=document.getElementById('modal3');

const descripcionModal1=document.getElementById('modal-desc-1_js');
const descripcionModal2=document.getElementById('modal-desc-2_js');
const descripcionModal3=document.getElementById('modal-desc-3_js');

descripcionModal1.innerHTML=`			
<div id="curso__detalles_js" class="curso__detalles">
				<h1>${cursoModal1.name}</h1>
				<ul class="curso__detalles-lista">
					<li><span class="titulos">Valor: </span>$ ${cursoModal1.precio}</li>
					<li><span class="titulos">Tiempo de dedicacion necesario:</span> ${cursoModal1.duracion}</li>
					<li><span class="titulos modalidad-${cursoModal1.modalidad}">${cursoModal1.modalidad}</span> </li>
				</ul>
			</div>`;

descripcionModal2.innerHTML=`			
<div id="curso__detalles_js" class="curso__detalles">
				<h1>${cursoModal2.name}</h1>
				<ul class="curso__detalles-lista">
					<li><span class="titulos">Valor: </span>$ ${cursoModal2.precio}</li>
					<li><span class="titulos">Tiempo de dedicacion necesario:</span> ${cursoModal2.duracion}</li>
					<li><span class="titulos modalidad-${cursoModal2.modalidad}">${cursoModal2.modalidad}</span> </li>
				</ul>
			</div>`;

descripcionModal3.innerHTML=`			
<div id="curso__detalles_js" class="curso__detalles">
				<h1>${cursoModal3.name}</h1>
				<ul class="curso__detalles-lista">
					<li><span class="titulos">Valor: </span>$ ${cursoModal3.precio}</li>
					<li><span class="titulos">Tiempo de dedicacion necesario:</span> ${cursoModal3.duracion}</li>
					<li><span class="titulos modalidad-${cursoModal3.modalidad}">${cursoModal3.modalidad}</span> </li>
				</ul>
			</div>`;
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close-button');


const abrir_modal=(valor)=>{
    if(valor == 1)
        modal1.showModal();

    if(valor==2)
        modal2.showModal();

    if(valor==3)
        modal3.showModal();
}

const cerrar_modal=(valor)=>{
    if(valor == 1)
        modal1.close();

    if(valor==2)
        modal2.close();

    if(valor==3)
        modal3.close();
}

const redirigir_modal=(valor)=>{
    if(valor == 1)
        window.location.href = "./courseDetail-dv.html?curso=1";

    if(valor==2)
        window.location.href = "./courseDetail-dv.html?curso=4";

    if(valor==3)
        window.location.href = "./courseDetail-dv.html?curso=3";
}


// closeBtn.addEventListener('click', event =>{
//     modal1.close();
// })

// closeBtn.addEventListener('click', event =>{
//     modal2.close();
// })

// closeBtn.addEventListener('click', event =>{
//     modal3.close();
// })