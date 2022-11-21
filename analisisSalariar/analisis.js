//analisis personal
function  findPerson(personInSearch){
return salarios.find((persona) =>persona.name == personInSearch);
}
 function meanPorPerson(personInSearch){
    const jobs = findPerson(personInSearch).trabajos;
    const wage = jobs.map(function(element){
        return element.salario;
    });
    const meanWages = SantiagoMath.calculateMean(wage);
    console.log(meanWages);
 } 
 function screeningPerPerson(personInSearch){
    const jobs = findPerson(personInSearch).trabajos;
    let salaryGrothPercentage = [];
    for (let i = 1;  i < jobs.length; i++) {
        const currentSalary = jobs[i].salario;
        const previusSalary = jobs[i-1].salario;
        const growth = currentSalary - previusSalary;
        const growthPerventage = growth /previusSalary;
        salaryGrothPercentage.push(growthPerventage);
    }
    const meanGrowthPerventage = SantiagoMath.calculateMean(salaryGrothPercentage);
    const lastSalary = jobs[jobs.length-1].salario;
    const increase = lastSalary * meanGrowthPerventage ;
    const newSalary = increase + lastSalary ;
    console.log(newSalary);
}

//analisis por empresas

const business={};
for (person of salarios) {
  for (job of person.trabajos) {
    if(!business[job.empresa]){
        business[job.empresa] = {};
    }
    if(!business[job.empresa][job.year]){
        business[job.empresa][job.year]= [];
    }
    business[job.empresa][job.year].push(job.salario)
  }   
}
console.log(business)

function meanBusineesYear(name, year){
    if(!business[name]){
        console.warn('La empresa no existe');
    }else if(!business[name][year]){
        console.warn('La empres no dio salarios ese year');   
    }else{
        return SantiagoMath.calculateMean(business[name][year]);
    }
}

function screeningPerBusiness(name){
    
    if(!business[name]){
        console.warn('La empresa no existe');
    }else{
        const businessYears = Object.keys(business[name])
        const listMeanYears = businessYears.map((year)=>{
            return meanBusineesYear(name, year)
        });
        let salaryGrothPercentage = [];
        for (let i = 1;  i < listMeanYears.length; i++) {
            const currentSalary = listMeanYears[i];
            const previusSalary = listMeanYears[i-1];
            const growth = currentSalary - previusSalary;
            const growthPerventage = growth /previusSalary;
            salaryGrothPercentage.push(growthPerventage);
        }
        const meanGrowthPerventage = SantiagoMath.calculateMean(salaryGrothPercentage);
        const lastMeanSalary = listMeanYears[listMeanYears.length-1];
        const increase = lastMeanSalary * meanGrowthPerventage ;
        const newMeanSalary = increase + lastMeanSalary ;
        console.log(newMeanSalary);
    }
}