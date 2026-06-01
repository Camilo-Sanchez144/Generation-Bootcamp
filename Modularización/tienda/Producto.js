class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
    calcularTotal(){
        return `${this.precio*0.19}`
    }
    aplicarDescuento(porcentaje){
        const descuento = this.precio * (porcentaje / 100);
        return `total con descuento: ${this.precio - descuento}`;
    }
    resumen(){
        return `
        nombre: ${this.nombre}
        categoria: ${this.categoria}
        precio base: ${this.precio}`
    }
    tarjeta(){
        return `
        nombre: ${this.nombre}
        categoria: ${this.categoria}
        precio con IVA: ${this.calcularTotal()}`
    }
}
class ProductoDigital extends Producto{
    constructor(nombre, precio, licencia){
        super(nombre, precio);
        this.licencia = licencia;
    }
    calcularTotal(){
        return 'Los producto digitales no tienen IVA';
    }
    tarjeta(){
        const tarjeta = super.tarjeta()
        return `
        ${tarjeta}
        licencia: ${this.licencia} `
    }
}
const producto1 = new Producto("PANTENE", 25000, "Aseo")
const producto2 = new ProductoDigital("Audifonos", 250000, "Tecnología")

export { Producto, ProductoDigital }
