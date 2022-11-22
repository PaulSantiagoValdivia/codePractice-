let temperatura ;

temperatura = parseInt(prompt("ingrese la temperatura de hoy "));

let validate = temperatura > 30 ? true : false;

if(validate){
    alert("Dia caluroso!")
}else{
    alert('Dia agradable')
}