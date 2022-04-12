let ti = prompt("Ingrese tipo de hamburguesa (simple, doble o triple):");
let n = +prompt("Ingrese cantidad de hamburguesas:");
let tp = confirm("Pago con efectivo?");

console.log(typeof tp);


if (tp === true)
{
    console.log("Usted pidió " + n + " hamburguesas "+ti+ " y pagará con efectivo");
}else
    {
        console.log("Usted pidió " + n + " hamburguesas "+ti+ " y pagará con tarjeta");
    }

if (tp===true)
{
    switch(ti)
    {
    case "simple":
        console.log("Pago total S/ " + n*20);
        break;
    case "doble":
        console.log("Pago total S/ " + n*25);
    break;
    case "triple":
        console.log("Pago total S/ " + n*28);
    break;
    
    default:
    //en caso no cumpla ninguna condicion, se ejecuta el default
        console.log("Ingrese el nombre correcto");
    }
}else
    {
        switch(ti)
        {
        case "simple":
            console.log("Pago total S/ " + n*20 + "// Cargo por uso de tarjeta: S/" + (n*20)*0.05);
            break;
        case "doble":
            console.log("Pago total S/ " + n*25 + "// Cargo por uso de tarjeta: S/" + (n*25)*0.05);
        break;
        case "triple":
            console.log("Pago total S/ " + n*28 + "// Cargo por uso de tarjeta: S/" + (n*28)*0.05);
        break;
        
        default:
        //en caso no cumpla ninguna condicion, se ejecuta el default
            console.log("Ingrese el nombre correcto");
        }

    }