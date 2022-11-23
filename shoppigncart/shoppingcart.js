const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard = document.getElementById('template-card').content;
const templateFooter = document.getElementById('template-footer').content;
const templateTrolley = document.getElementById('template-carrito').content;
const fragment = document.createDocumentFragment();
let shoppingCart ={};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});
cards.addEventListener('click', e =>{
    addTrolley(e);
})
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        paintCards(data);
    } catch (error) {
        console.log(error);
    }
}

const paintCards = data => {
      data.forEach(producto => {

        templateCard.querySelector('h5').textContent = producto.title;
        templateCard.querySelector('P').textContent = producto.precio;
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl);
        templateCard.querySelector('.btn-dark').dataset.id = producto.id;

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })

    cards.appendChild(fragment);

}
const addTrolley = e => {

    e.target.classList.contains('btn-dark') ? setShoppingCart(e.target.parentElement): false;
    e.stopPropagation()

}
const setShoppingCart = objeto => {
    const product = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad : 1
        
    }
    shoppingCart.hasOwnProperty(product.id)? product.cantidad = shoppingCart[product.id].cantidad + 1 : false;
    shoppingCart[product.id] = {...product};
    paintTrolley();
}
const paintTrolley = () =>{
    items.innerHTML='';
    Object.values(shoppingCart).forEach(product => {
        templateTrolley.querySelector('th').textContent= product.id;
        templateTrolley.querySelectorAll('td')[0].textContent = product.title; 
        templateTrolley.querySelectorAll('td')[1].textContent = product.cantidad;
        templateTrolley.querySelector('.btn-info').dataset.id =product.id;
        templateTrolley.querySelector('.btn-danger').dataset.id =product.id;
        templateTrolley.querySelector('span').textContent = product.cantidad * product.precio;

        const clone = templateTrolley.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment)
}