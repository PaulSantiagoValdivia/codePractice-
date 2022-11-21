const salary = [230,300,400,500,320,402];

calculateMean(salary);
function calculateMean(salary){
    if(esPar(salary)){
        const indexMeanPair1 = (salary.length /2)-1;    
        const indexMeanPair2 = salary.length /2;    
        let result;
        console.log (indexMeanPair1); 
        console.log (indexMeanPair2); 
        result = (salary[indexMeanPair1] + salary[indexMeanPair2])/2;
        console.log (result); 
    }else{
    const indexMeanOdd = Math.floor(salary.length /2);
    const meandOdd = salary[indexMeanOdd];
    console.log(indexMeanOdd);
    console.log(meandOdd);
    return meandOdd;
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
    const average = additionSalary / salary.length;
    console.log(average);

