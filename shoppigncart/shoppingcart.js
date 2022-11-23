const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let shoppingCart ={}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
});
cards.addEventListener('click', e =>{
    addTrolley(e);
})
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        pintarCards(data);
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
      data.forEach(producto => {

        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('P').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    cards.appendChild(fragment)

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
    console.log(shoppingCart);
}