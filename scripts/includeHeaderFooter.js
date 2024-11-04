async function loadHTML(file, tagName) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementsByTagName(tagName)[0].innerHTML = text;
}

const loadShoppingCart = (id) => {
    const cursosData = localStorage.getItem('cursos');
   // console.log(cursosData);
    const cursosArray = JSON.parse(cursosData);
    console.log(cursosArray.cursos[2].name);

    const curso = cursosArray.cursos[id];
    if(! curso) {
        console.error("Curson no encontrado!!!")
        return;
    }
    //TODO verificar si el curso ya fue ingresado sino ingresarlo

    //TODO generar codigo a partir de la coleccion de cursos seleccionados
    document.getElementById('cartSidebar').innerHTML += 
    '<div class="cart-item">' +
        '<span>Nuevo Articulo</span>' +
            '<button class="remove-item" onClick=deleteFromShoppingCart('
             + id + ')>❌</button>' +
    '</div><a class="link-button" href="./metodosPago.html">Pagar</a>';

    const shoppingCounter = document.querySelector('.badge');
            let currentCount = parseInt(shoppingCounter.innerText);
            shoppingCounter.innerText = currentCount + 1;
            shoppingCounter.style.display = 'block';
}

const deleteFromShoppingCart = (id) => {
    console.log("Borrando: " + id);
} 

loadHTML('commons/header.html', 'header');
loadHTML('commons/footer.html', 'footer');
