const prompt = require('prompt-sync')();
let acumulador = 0;
let resultado = 1;
let numero = Number(prompt('Ingresa el numero que deseas saber el factorial: '));

for(let i=1; i<numero;i++){
    acumulador = i +1;
    resultado = acumulador*resultado
    console.log(`${i} x ${acumulador} = ${resultado}`);
}
console.log(`El factorial de ${numero} es: ${resultado}`)