//Calcular pagos en cuotas sobre un monto determinado.
let montoIngresado = parseInt(prompt("Ingrese el monto a financiar"));
let cuotasIngresadas = parseInt(prompt("Ingrese las cuotas deseadas"));

function calculoCuotas(monto, cuotas){
    let importeCuotas = monto / cuotas;
    return importeCuotas;
}

let resultado = calculoCuotas(montoIngresado, cuotasIngresadas);

alert("El importe según las cuotas seleccionadas es: " + resultado);