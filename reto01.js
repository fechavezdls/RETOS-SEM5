let l = Number(prompt("Ingrese cantidad de litros producidos:"));
let tg= (l / 3.785);
let pg = Number(prompt("Ingrese precio por galón:"));
let ga = pg * tg.toFixed(2);
console.log("Galones vendidos: "+tg.toFixed(1)+"// Ganancia del dia: S/"+ga.toFixed(2));


 //toFixed redondea a la cantidad de decimales que indico
 //console.log(valor.toFixed(2));