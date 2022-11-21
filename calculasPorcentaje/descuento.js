const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');

const pResult = document.querySelector('#result');
let text;
class coupon {
    constructor(name, discount) {
        this.name = name;
        this.discount = discount;
    }
}

const coupons = [];
coupons.push(new coupon("D30", 30), new coupon("D20", 20), new coupon("D15", 15));

btn.addEventListener('click', () => {
    const price = Number(inputPrice.value);
    const discount = inputCoupon.value;
    const couponValidate = coupons.find(item => item.name == discount);
    if (!price) {
        text = `Ingrese el precio para poder realizar el calculo gracias`;
        pResult.innerText = text;    
    }
    else if (couponValidate != undefined) {
        const newPrice = (price * (100 - couponValidate.discount)) / 100;
        text = `El precio final es de: $ ${newPrice}`;
        pResult.innerText = text;
    } else {
        text = `Ingrese un cupon valido`;
        pResult.innerText = text;
    }
}); 