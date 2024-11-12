const modal1=document.querySelector('.modal1');
const modal2=document.querySelector('.modal2');
const modal3=document.querySelector('.modal3');

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