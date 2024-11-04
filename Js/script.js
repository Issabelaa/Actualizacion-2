console.log("Hola, mundo desde un archivo externo");

let a = 5;
let b = 3;
let resultado = ((a + b - 2)* 3) / 2;
console.log (resultado);
resultado += 1;
console.log(a > b);
console.log(a === b);
console.log(resultado % 3 == 0 ? "👍" : "👎");
let cadena = "Hola, " + "mundo!";
console.log(cadena);

let anio = prompt("En que año naciste?");
let anio_actual = new Date().getFullYear();
let edad = anio_actual - anio;
if (edad >= 18){
    console.info("Eres mayor de edad");
}
else if (edad >= 12 && edad < 18){
    if (edad == 12){
        console.log("Eres un preadolescente")
    }
    else{
        console.log ("Eres un adolescente");
    }
}
else {
    console.warn("Eres un niño");
}

let dia = parseInt (prompt ("Ingresa un número del 1 al 7"));
switch (dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.error("Dia no valido");
    }
