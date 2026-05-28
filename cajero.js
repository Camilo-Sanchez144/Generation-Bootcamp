const prompt = require('prompt-sync')();

let saldo = 500000

function validarContrasena(pin){
    const pinCorrecto = 1234
    if(pin === pinCorrecto ){
        return true
    }
    else{
        return false;
    }
}
function mostrarMenu(){
    console.log('1. Consultar saldo')
    console.log('2. Retirar dinero')
    console.log('3. Despositar dinero')
    console.log('4. Calcular interés del 10% anual')
    console.log('5. Convertir saldo a dolares')
    console.log('6. Salir')
}
function consultarSaldo(){
    console.log(`Su saldo actual son: $${saldo} pesos` )
}
function retirarDinero(cantidadRetiro){
    if(cantidadRetiro<=0 || cantidadRetiro % 10000 !=0){
        console.log('Cantidad no valida')
        return saldo;
    }
    else if(cantidadRetiro>saldo){
        console.log('ERROR el monto supera su saldo actual')
        return;
    }
    else{
        saldo = saldo - cantidadRetiro 
        console.log(`Se retiró $${cantidadRetiro}, ahora su sueldo actual es: $${saldo}`)
        return;
    }
}
function depositarDinero(cantidadDeposito){
    if(cantidadDeposito<0){
        console.log('ERROR debe ser un monto válido')
        return;
    }
    else{
        saldo = saldo + cantidadDeposito
        console.log(`Se depositó $${cantidadDeposito}, ahora su saldo actual es: $${saldo}`)
        return;
    }
}
function calcularInteres(){
    let ganancia = saldo * 10 / 100
    let saldoConInteres = saldo + ganancia
    console.log(`Ganancia obtenida por el interés fue: ${ganancia}`)
    console.log(`Saldo con interés incluido es: ${saldoConInteres}`)
    console.log(`La operación realizada fue: ${saldo} x10 / 100`)
}
function convertirADolares(){
    console.log('Convirtiendo a dólares...')
    console.log(`Saldo actual: ${saldo}`)
    console.log('Tasa de cambio 1 USD = 4000 COP')
    let dolares = saldo / 4000
    console.log(`saldo actual: ${dolares}USD`)
    console.log(`La operación que se realizó fue: ${saldo} / 4000`)
}
function verificarPin(){

}

console.log('Bienvenido al cajero ATM')
let pinIngresado = parseInt(prompt('Por favor ingrese su PIN: '))
if(!validarContrasena(pinIngresado)){
    console.log('El PIN incorrecto. Acceso denegado')
    return
}
else{
    console.log('PIN Correcto, Ingresando al sistema...')
    let opcion = 0
    while(opcion < 6){
        
        mostrarMenu();
        
        opcion = parseInt(prompt('Por favor ingrese el numero de opción: '))
        switch (opcion){
            case 1:
                consultarSaldo();
                break;
            case 2:
                consultarSaldo();
                let cantidadRetiro = parseInt(prompt('Ingrese el monto que desea retirar: '))
                retirarDinero(cantidadRetiro);
                break;
            case 3:
                consultarSaldo();
                let cantidadDeposito = parseInt(prompt('Ingrese la cantidad que desea depositar: '))
                depositarDinero(cantidadDeposito)
                break;
            case 4:
                console.log('calculando el interés del 10 por ciento anual')
                consultarSaldo();
                calcularInteres()
                break;
            case 5:
                convertirADolares();
                break;
            case 6:
                console.log('Gracias por usar nuestros cajeros!')
                break;
            default:
                console.log('La opción seleccionada no es válida, por favor ingrese un numero del 1 al 6')
                break;
        }
    }
}



