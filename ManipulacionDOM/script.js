const botonAgregar = document.querySelectorAll('.btn-agregar')
const contenedorProductos = document.getElementById('lista-carrito')
const total = document.getElementById('total')
const badge = document.getElementById('badge')
const botonVaciar = document.getElementById('btn-vaciar')

let totalAcumulado = 0
let cantidadItems = 0
botonAgregar.forEach( boton =>{
    boton.addEventListener('click', evento =>{
        const precioProducto = parseInt(boton.dataset.precio)
        agregarAlCarrito(boton.dataset.nombre, precioProducto)
    })
})
function agregarAlCarrito(nombre, precio){

    const listaProductos = document.createElement('li');
    listaProductos.className = "listaProductos"
    listaProductos.textContent = `Producto: ${nombre} \n Precio: ${precio}`

    const botonEliminar = document.createElement('button')
    botonEliminar.textContent = "✕"
    botonEliminar.classList.add('btn', 'btn-danger', 'botonEliminar');
    botonEliminar.addEventListener('click', () => {
        eliminarItem(listaProductos, precio)
    });

    const contenedordiv= document.createElement('div')
    contenedordiv.className = "carritoLista"

    contenedordiv.appendChild(listaProductos)
    listaProductos.appendChild(botonEliminar)
    contenedorProductos.appendChild(listaProductos)

    totalAcumulado +=  precio
    cantidadItems ++
    
    updateTotal();
    updateBadge();
}
function updateBadge(){
    badge.textContent = cantidadItems
}
function eliminarItem(li, precio){
    li.remove();
    cantidadItems --
    updateBadge();

    totalAcumulado -= precio
    updateTotal();
}
function updateTotal(){
    total.innerHTML = totalAcumulado
}
botonVaciar.addEventListener('click',()=>{
    contenedorProductos.innerHTML = '';
    totalAcumulado = 0
    cantidadItems = 0
    updateBadge();
    updateTotal();
})