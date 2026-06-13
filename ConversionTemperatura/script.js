const prompt = require('prompt-sync')();
let temperatura = prompt('Ingrese los grados Celcius que quiere convertir a Fahrenheit y Kelvin: ')
while(isNaN(Number(temperatura)) || temperatura.trim() === ''){
    console.log('No es un valor válido');
    temperatura = prompt('Ingrese los grados Celcius que quiere convertir a Fahrenheit y Kelvin: ')
}

temperatura = Number(temperatura)
const gradosKelvin = temperatura + 273.15
const gradosFahrenheit = (temperatura*1.8)+32

console.log(`Grados Kelvin: ${gradosKelvin} \n Grados Fahrenheit: ${gradosFahrenheit}`)
