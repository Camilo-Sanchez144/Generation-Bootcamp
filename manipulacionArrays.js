/* Ejercicio 1: Calculadora de Propinas
- Una app para calcular propinas en restaurantes.
Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de
propina, y retorne el monto final a pagar (total + propina). */

function calcularPropina(total, porcentaje){
    propina = total * porcentaje / 100
    totalAPagar = total + propina
    return console.log('El total a pagar es: '+ totalAPagar)
}
calcularPropina(500000, 10);

/* Ejercicio 2: Validar Contraseña
- Formulario de registro.
Crea una función validarContraseña(contraseña) que retorne true si:
- Tiene al menos 8 caracteres.
- Incluye un número.
- Incluye una mayúscula */

function validarContrasena(contrasena){
    if(contrasena.length<=8) return console.log('debe tener al menos 8 caracteres');
    else if(!/[0-9]/.test(contrasena)) return console.log('debe contener al menos un numero');
    else if(!/[A-Z]/.test(contrasena)) return console.log('debe contener al menos una mayuscula');
    else return console.log('contrasena guardada con exito');
}
validarContrasena("Holamundoo9");

/* Ejercicio 3: Buscar Producto en Inventario
- Sistema de gestión de inventario.
Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El
inventario debería estar PREDEFINIDO
ejemplo:
const inventario = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Zapatos", precio: 50 }
];*/

function buscarProducto(nombre){
    const inventarioProductos =[
        {
            nombre: "Camisa", precio: 20
        },
        {
            nombre: "Zapatos", precio:50
        },
        {
            nombre: "Chaqueta", precio: 80
        }
    ]
    const producto_existe = inventarioProductos.findIndex(inventarioProductos => inventarioProductos.nombre === nombre);
    if(producto_existe >= 0) return console.log(inventarioProductos[producto_existe])
    else return console.log('No existe en el inventario')
}
buscarProducto("Chaqueta")

/* Ejercicio 4: Calcular Promedio de Notas
- Plataforma educativa.
Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
(separadas por comas) y retorne el promedio (redondeado a 2 decimales). */

function calcularPromedio(notas){
    let acumulador = 0
    for(let i = 0; i < notas.length; i++){
        acumulador = notas[i] +acumulador
        console.log(acumulador)
    }
    promedio = acumulador / notas.length
    return console.log(`El promedio del estudiante es: ${promedio.toFixed(2)}`)
}
calcularPromedio([1.5,2.6,3.8,4.7,5.0,1.0])

/* Ejercicio 5: Filtrar Usuarios por Edad
- Red social.
Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
cumplen con tener más de 18. */
const prompt = require('prompt-sync')();
const Usuarios = [
    {
        nombre:"Ana",
        edad:25
    },
    {
        nombre:"Camilo",
        edad: 22
    },
    {
        nombre:"Andres",
        edad:35
    }
]
/* function filtrarUsuarios(usuarios, edadMinima){
    for(i=0;i<usuarios.length;i++){
        let edadPersona = usuarios[i].edad
        if(edadPersona>edadMinima){
            console.log(usuarios[i]);
            return;
        }
    }
}
const edadMin = parseInt(prompt('Introduce la edad minima: '))
filtrarUsuarios(Usuarios, edadMin)
 */
/* Ejercicio 6: Contador de Palabras
-Editor de texto.
Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
espacios). */

function contarPalabras(texto){
 const palabras = texto.trim().split(" ")
 console.log(`hay ${palabras.length} palabras en la oración`)
}
contarPalabras(' Hola como estas ')

/* Ejercicio 7: Simulador de Cajero Automático
-App bancaria.
Crea una función retirarDinero(saldo, monto) que:
Pide al usuario su saldo actual y el monto a retirar.
Muestra el nuevo saldo o "Fondos insuficientes". */

function retirarDinero(saldo, monto){
    if(saldo>monto) return console.log(`Su nuevo saldo es: ${saldo-monto}`)
    else return console.log('Fondos insuficientes');
}
const consultarSaldo = parseInt(prompt('Ingrese su saldo actual: '))
const saldoaRetirar = parseInt(prompt('Ingrese el monto que desea retirar: '))
retirarDinero(consultarSaldo,saldoaRetirar)

/* Ejercicio 8: Cambio de Moneda
-App de viajes.
Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
pedir al usuario monto en COP y la moneda con la que desea hacer la converción. */

function convertirMoneda(monto, monedaDestino){
    if(monedaDestino = "USD"){
        const cambio = monto / 3700
        console.log('Tienes:', cambio.toFixed(3), 'USD');
        return;
    }
    if(monedaDestino = "EUR"){
        const cambio = monto / 4500
        console.log('Tienes:', cambio.toFixed(3), 'EUR');
        return;
    }
    else{
        console.log('No manejamos esa moneda')
        return;
    }
}
const montoMoneda = parseInt(prompt('Ingrese el monto a cambiar: '))
const moneda = prompt('Ingrese a que moneda desea cambiar (USD o EUR): ')
convertirMoneda(montoMoneda, moneda)