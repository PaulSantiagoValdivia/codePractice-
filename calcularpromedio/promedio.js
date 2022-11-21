const salary = [230,300,400,500,320,402,200];

calculateMean(salary);
function calculateMean(salary){
    if(esPar(salary)){
        console.log('cara de pija');
    }else{
    const meanOdd = Math.floor(salary.length /2);
    console.log(meanOdd);
    }
}

function esPar (salary){
    let validate;
    if(salary.length%2 === 0){
        validate=true;
    }else{
        validate= false;
    }
    return validate;
};

const additionSalary = salary.reduce( (accumulator, courrentValue) => accumulator + courrentValue);
const promedio = additionSalary / salary.length;
console.log(promedio);