/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1” */
const inputnumero1 = document.getElementById('numero1')
const inputnumero2 = document.getElementById('numero2')
const inputnumero3 = document.getElementById('numero3')
const boton = document.getElementById('boton')
const resultado = document.querySelector('.resultado')

boton.addEventListener('click',()=>{
    numero1 = Number(inputnumero1.value)
    numero2 = Number(inputnumero2.value)
    numero3 = Number(inputnumero3.value)
    console.log('se tocó el boton')
    ordenarNumeros(numero1,numero2, numero3)
})

function ordenarNumeros(numero1, numero2, numero3){

if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    resultado.innerHTML = '<p>Debe ingresar números válidos.</p>'
    return;
}
if(numero1 == numero2 && numero2 == numero3 && numero1==numero3){
    resultado.innerHTML = '<p>Los números son iguales.</p>'
    return;
}

let numeroMayor
let numeroMedio
let numeroMenor

if(numero1>=numero2 && numero1>=numero3){
    numeroMayor = numero1
}
else if(numero2>=numero1 && numero2>=numero3){
    numeroMayor = numero2
}
else if(numero3>=numero2 && numero3 >= numero1){
    numeroMayor = numero3
}
if(numero1<=numero2 && numero1<=numero3){
    numeroMenor = numero1
}
else if(numero2<=numero1 && numero2<=numero3){
    numeroMenor = numero2
}
else if(numero3<=numero2 && numero3 <= numero1){
    numeroMenor = numero3
}
numeroMedio = numero1+numero2+numero3-numeroMenor-numeroMayor

resultado.innerHTML = `
    <p>Mayor a menor: ${numeroMayor}, ${numeroMedio}, ${numeroMenor}</p>
    <p>Menor a mayor: ${numeroMenor}, ${numeroMedio}, ${numeroMayor}</p>
`
}
