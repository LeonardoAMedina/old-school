async function loadHTML(file, tagName, callback) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementsByTagName(tagName)[0].innerHTML = text;
    if (callback) callback();
}

const loadShoppingCart = (id) => {
    const cursosData = localStorage.getItem('cursos');
    const cursosArray = JSON.parse(cursosData);    
    let curso = undefined;

    for ( let i = 0 ; i < cursosArray.cursos.length && ! curso; i ++) {
        if (id == cursosArray.cursos[i].id) {
            curso = cursosArray.cursos[i];
        }
    }
    //Si no se encuentra el curso termina la funcion
    if(! curso) {
        console.error("Curso no encontrado!!!")
        return;
    }
    const shoppingCartData = localStorage.getItem('shoppingCartCursos');
    let shoppingCartArray= JSON.parse(shoppingCartData);
    const cursoShoppingCart = {"id": id, "name": curso.name,
        "precio": curso.precio};
    
    //agrego nuevo curso al shopping cart
    if(shoppingCartArray) {
        if (shoppingCartData.includes('"id":"'+id+'"')) {
            //el curso ya se encuentra cargado
            return;
        }
        shoppingCartArray.cursos.push(cursoShoppingCart);
    } else {        
        shoppingCartArray = {"cursos":[{"id": id, "name": curso.name,
            "precio": curso.precio}]};
    }
    localStorage.setItem('shoppingCartCursos', JSON.stringify(shoppingCartArray));
    renderShoppingCart(); 
}

/* Renderiza el listado en el shopping cart */ 
const renderShoppingCart = () => {
    const pagarBtn = '<a class="link-button" href="./metodosPago.html">Pagar</a>';

    const shoppingCartData = localStorage.getItem('shoppingCartCursos');
    const shoppingCartObj = JSON.parse(shoppingCartData);
    let shoppingCartContent = '';

    //shopping cart empty
    if (! shoppingCartObj) {
        document.getElementById('cartSidebar').innerHTML = 
            '<div class="cart-item"><strong>Seleccionar cursos</strong></div>';
        const shoppingCounter = document.querySelector('.badge');
        shoppingCounter.innerText = 0;
        shoppingCounter.style.display = '';
        return;
    }
    document.getElementById('cartSidebar').innerHTML='';

    for (let i = 0 ; i < shoppingCartObj.cursos.length ; i++) {
        let curso = shoppingCartObj.cursos[i];
        shoppingCartContent += '<div class="cart-item">' +
        '<span>' + curso.name + '  $ '+ curso.precio +'</span>' +
            '<button class="remove-item" onClick="deleteFromShoppingCart('
            + curso.id +')">❌</button>' +
        '</div>';
    }
    document.getElementById('cartSidebar').innerHTML= shoppingCartContent + pagarBtn;

    const shoppingCounter = document.querySelector('.badge');
    shoppingCounter.innerText = shoppingCartObj.cursos.length;
    shoppingCounter.style.display = 'block';
}

const deleteFromShoppingCart = (id) => {    
    const shoppingCartData = localStorage.getItem('shoppingCartCursos');
    let shoppingCartArray= JSON.parse(shoppingCartData);

    let cursosArray = [];
    for (let i = 0 ; i < shoppingCartArray.cursos.length ; i++) {
        if (id != shoppingCartArray.cursos[i].id) {
            cursosArray.push(shoppingCartArray.cursos[i]);
        }
    }
    if (cursosArray.length > 0) {
        localStorage.setItem('shoppingCartCursos',
            JSON.stringify({"cursos":cursosArray}));
    } else {
        localStorage.removeItem('shoppingCartCursos');
    }
    renderShoppingCart();
    console.log("Borrando: " + id);
} 

loadHTML('commons/header.html', 'header', renderShoppingCart);
loadHTML('commons/footer.html', 'footer');

