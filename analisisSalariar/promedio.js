
const SantiagoMath = {};

SantiagoMath.avergaeSalary = function avergaeSalary(salary) {
    const additionSalary = salary.reduce((accumulator, courrentValue) => accumulator + courrentValue);
    const average = additionSalary / salary.length;
    console.log(average);
}

SantiagoMath.calculateMean = function calculateMean(salary) {
    const listSalary = salary.sort((accumulator, courrentValue) => accumulator - courrentValue);
    let esPar = listSalary.length % 2 == 0 ? true: false;
    if (esPar) {
        const indexMeanPair1 = (listSalary.length / 2) - 1;
        const indexMeanPair2 = listSalary.length / 2;
        const result = (listSalary[indexMeanPair1] + listSalary[indexMeanPair2]) / 2;
        return result;
    } else {
        const indexMeanOdd = Math.floor(listSalary.length / 2);
        const meandOdd = listSalary[indexMeanOdd];
        return meandOdd;
    }
}

SantiagoMath.calculateMode = function calculateMode(salary) {
    const listSalaryRepeated = {};
    for (let i = 0; i < salary.length; i++) {
        const element = salary[i];
        if (listSalaryRepeated[element]) {
            listSalaryRepeated[element] += 1;
        } else {
            listSalaryRepeated[element] = 1;
        }
    }
    const copy = Object.entries(listSalaryRepeated);
    const orderedCopy = copy.sort((accumulator, courrentValue) => accumulator[1] - courrentValue[1]);
    const repeatingMaximumSalary = orderedCopy[copy.length - 1];
    console.log("el salario promedio es " + repeatingMaximumSalary[0]);

}
