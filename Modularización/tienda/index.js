import { Usuario, UsuarioVIP } from "./Usuario.js";
import { Producto, ProductoDigital } from "./Producto.js";

const usuario1 = new Usuario("Camilo", "cami@gmail.com")
const usuario2 = new Usuario("Karol", "Karol@gmail.com", "Administrador")
const usuario3 = new UsuarioVIP("Andres", "Andrei@gmail.com", "Gold")

const producto1 = new Producto("PANTENE", 25000, "ASEO")
const producto2 = new Producto("ARROZ DIANA", 2000, "COMIDA")
const producto3 = new ProductoDigital("AUDIFONOS", 250000, true)
const producto4 = new ProductoDigital("SILLA", 30000, true)

console.log(usuario1.desactivar())
console.log(usuario1.resumen());
console.log(producto1.aplicarDescuento(0.20));
console.log(producto1.tarjeta(), producto2.tarjeta(), producto3.tarjeta(), producto4.tarjeta());
console.log(usuario1.resumen(), usuario2.resumen(), usuario3.resumen())
