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