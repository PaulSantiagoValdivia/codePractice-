const salary = [230, 300, 400, 1000, 500, 320];
const additionSalary = salary.reduce((accumulator, courrentValue) => accumulator + courrentValue);
const average = additionSalary / salary.length;
console.log(average);
calculateMean(salary);  
function calculateMean(salary) {
    const listSalary = salary.sort((accumulator, courrentValue) => accumulator - courrentValue);
    if (esPar(listSalary)) {
        const indexMeanPair1 = (listSalary.length / 2) - 1;
        const indexMeanPair2 = listSalary.length / 2;
        let result;
        console.log(indexMeanPair1);
        console.log(indexMeanPair2);
        result = (listSalary[indexMeanPair1] + listSalary[indexMeanPair2]) / 2;
        console.log(result);
    } else {
        const indexMeanOdd = Math.floor(listSalary.length / 2);
        const meandOdd = listSalary[indexMeanOdd];
        console.log(indexMeanOdd);
        console.log(meandOdd);
        return meandOdd;
    }
}

function esPar(listSalary) {
    let validate;
    if (listSalary.length % 2 === 0) {
        validate = true;
    } else {
        validate = false;
    }
    return validate;
};




