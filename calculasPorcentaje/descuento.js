const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const result = document.querySelector('#result');
let text;

btn.addEventListener('click', () => {
    //(p*(100-d)) / 100
    const price = inputPrice.value;
    const discount = 10;
    const newPrice = (price * (100 - discount)) / 100;
    text = `El precio final es de: $ ${newPrice}`;
    result.innerText =  text;
});