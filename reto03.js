let inventario = [
                    {nombre:"Toner",
                    cantidad:"0"},
                    {nombre:"Cabezal",
                    cantidad:"0"},
                    {nombre:"Tinta",
                    cantidad:"0"},    
                ]

let canToner = +prompt("Cantidad de TONER contabilizados: ");
let canCabezal = +prompt("Cantidad de CABEZALES contabilizados: ");
let canTinta = +prompt("Cantidad de TINTA contabilizada: ");

inventario[0].cantidad =canToner;
inventario[1].cantidad =canCabezal;
inventario[2].cantidad =canTinta;


console.table(inventario);
console.log("Cantidad total de productos: "+ (canToner+canCabezal+canTinta));
