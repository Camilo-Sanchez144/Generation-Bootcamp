/* Ejercicio 1: Libro (Objeto básico + if)
Crear un sistema de préstamo de libros.
Tareas:
1.Usa el constructor Libro para crear un objeto con título y autor.
2.Agrega una propiedad prestado = false.
3.Implementa el método prestar() que:
•Cambie prestado a true si el libro está disponible.
•Muestre un mensaje de error si ya está prestado (usando if).
4.Prueba prestar el libro dos veces y observa los mensajes. */

function Libro(titulo, autor){
        this.titulo =titulo,
        this.autor = autor,
        this.prestado = false
    this.prestar = function(){
        if(!this.prestado) {
            this.prestado = true
            console.log("Libro prestado")
        }
        else console.log('ERROR ya fue prestado')
    }
}
const libro1 = new Libro("1984", "George Orwell")
libro1.prestar()
libro1.prestar()

/* Ejercicio 2: Lista de Compras (Array + for)
Gestionar una lista dinámica de productos.
Tareas:
1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
2.Añade 3 productos con el método agregar().
3.Implementa el método mostrar() que use un for para listar los productos numerados (ej:
"1. Manzanas").
4.Muestra la lista completa en consola */

function ListaCompras(){
    this.productos = []
    this.agregar= function(productos){
        this.productos.push(productos)
    }
    this.mostrar = function(){
        for(let i =0; i<this.productos.length; i++){
            console.log(this.productos[i])
        }
    }
}
const lista = new ListaCompras()
lista.agregar(['manzana', 'pera'])
lista.mostrar()

/* Ejercicio 3: Reproductor de Música
Tareas:
1.Crea un objeto Reproductor usando una función constructora con:
•Una propiedad estado con valor inicial "detenido" (otros valores
posibles: "reproduciendo", "pausado").
2.Implementa estos métodos:
•play():
•Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo
música...".
•Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
•pausar():
•Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
•Si no, muestra: "No hay música reproduciéndose.".
•detener(): Cambia el estado a "detenido" y muestra: "Música detenida.". */

function Reproductor(){
    this.estado = "detenido"
    this.play = function(){
        if(this.estado == "detenido"){
            this.estado = "reproduciendo"
            console.log('Reproduciendo música...')
            return;
        }
        if(this.estado == "pausado"){
            this.estado = "reproduciendo"
            console.log('Reproduciendo música...')
            return;
        }
        if(this.estado == "reproduciendo"){
            console.log('Ya se está reproduciendo la música')
        }
    }
    this.pausar = function(){
        if(this.estado == "reproduciendo"){
            this.estado = "pausado"
            console.log('Música pausada');
        }
        else{
            console.log('No hay música reproduciéndose.');  
        } 
    }
    this.detener = function(){
        this.estado = "detenido"
        console.log('Musica detenida')
    }
}
const musica = new Reproductor()
musica.play()

musica.play()

musica.pausar()

musica.play()

/* Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto
usando métodos y condicionales (if/else).
Tareas:
1. Crea un objeto Carrito usando una función constructora o clase que tenga:
•Una propiedad productos (array vacío).
•Una propiedad total (inicialmente 0).
2.Implementa estos métodos:
•agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
•calcularDescuento():
•Si el total es mayor a $100, aplica un 10% de descuento y muestra.
•Si el total es mayor a $50 pero menor o igual a $100, aplica un 5% de descuento y muestra.
•Si no, mostrar total, sin descuento. */

function Carrito(){
    this.productos = []
    this.total = 0
    this.agregarProducto = function(nombre, precio){
        this.productos.push(nombre)
        console.log(this.productos)
        this.total = precio + this.total
    }
    this.calcularDescuento = function(){
        if(this.total>100){
            const descuento = this.total * 0.10
            const totalDescuento = this.total - descuento
            console.log(`Total con 10% descuento: ${totalDescuento}`)
            return;
        }
        else if(this.total>50 && this.total <=100){
            const descuento = this.total * 0.05
            const totalDescuento = this.total - descuento
            console.log(`Total con 5% de descuento: ${totalDescuento}`)
            return;
        }
        else{
            return console.log('total sin descuento', this.total);
        }
    }
}
const compras = new Carrito()
compras.agregarProducto('Arroz', 30)
compras.agregarProducto('Frijoles', 25)
compras.agregarProducto('Papas', 25)
compras.calcularDescuento()