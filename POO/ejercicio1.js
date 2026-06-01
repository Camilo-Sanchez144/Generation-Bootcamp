class Empleado{
    constructor(nombre, cargo, salario){
        this.nombre = nombre
        this.cargo = cargo
        this.salario = salario
        this.activo = true
    }
    presentarse(){
        return `Hola a todos mi nombre es ${this.nombre} y ejerceré el rol de ${this.cargo}`
    }
    calcularSalarioAnual(){
        let calculoSalarial = this.salario * 12
        return `Salario anual de ${calculoSalarial}`
    }
    desactivar(){
        this.activo = false;
        return 'Se ha cambiado el estado y ahora es false'
    }
    info(){
        return `
            nombre: ${this.nombre}
            cargo: ${this.cargo}
            salario: ${this.salario}
            activo: ${this.activo}`
    }
}
class Lider extends Empleado{
    constructor(nombre, salario, equipo){
        super(nombre, "Lider de equipo" ,salario)
        this.equipo = equipo
    }
    presentarEquipo(){
        return `personas a cargo: ${this.equipo}`
    }
    agregarMiembro(nombre){
        const agregarMiembro = this.equipo.push(nombre)
        return `Se agrego a ${nombre} en las personas a cargo`
    }
    info(){
        const infoLider = super.info()
        return `${infoLider}
            numero de personas en el equipo : ${this.equipo.length}`
    }
}
let empleado1 = new Empleado("Andres", "Ing QA", 50000)
let empleado2 = new Empleado("Juan","Ing Soporte", 70000)
let empleado3 = new Empleado("Camilo", "Ing Senior", 100000)
let empleado4 = new Empleado("Karol","Ing FrontEnd", 60000)

let lider1 = new Lider("Camilo", 50000, [empleado1.nombre, empleado2.nombre, empleado3.nombre])
let lider2 = new Lider("Luis", 50000, [empleado4.nombre, empleado3.nombre])

let nomina = empleado1.salario + empleado2.salario + empleado3.salario + empleado4.salario + lider1.salario + lider2.salario
console.log(`La nomina de todos es ${nomina}`);
console.log(`La nomina anual de todos es ${nomina * 12}`);
empleado1.desactivar()
console.log(empleado1.info());
console.log(lider1.info(), lider1.presentarEquipo());
console.log(lider2.info(), lider2.presentarEquipo());




