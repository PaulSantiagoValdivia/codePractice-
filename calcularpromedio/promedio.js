const salary = [230,300,400,500,320,402];
const initialValue=0;
const additionSalary = salary.reduce( (accumulator, courrentValue) => accumulator + courrentValue);
const promedio = additionSalary / salary.length;
console.log(promedio);