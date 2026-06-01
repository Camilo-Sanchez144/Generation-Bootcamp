class Usuario{
    constructor(nombre, email, rol= "Cliente"){
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }
    saludo(){
        return `Hola! Mi nombre es ${this.nombre} y soy ${this.rol}`
    }
    desactivar(){
        this.activo = false;
        return 'Se cambió el estado'
    }
    resumen(){
        let is_active = ""
        if(this.activo) is_active = "cuenta activa"
        else is_active = "cuenta inactiva"
        return `        
        nombre: ${this.nombre}
        email: ${this.email}
        rol: ${this.rol}
        estado: ${is_active}
        `
    }
}

class UsuarioVIP extends Usuario{
    constructor(nombre, email, membresia){
        super(nombre, email, "cliente VIP");
        this.membresia = membresia
    }
    saludo(){
        const saludoVIP = super.saludo()
        return `${saludoVIP} con membresia ${this.membresia}
        `
    }
    beneficios(){
    switch (this.membresia) {
        case "Gold":
            return "Tienes membresia Gold que tiene acceso a descuentos exclusivos y soporte prioritario.";

        case "Platinum":
            return "Tienes membresia Gold que tiene acceso a todos los beneficios Gold, atención VIP y eventos exclusivos.";

        default:
            return "Tienes membresia general con beneficios básicos.";
    }
    }
}
export { Usuario, UsuarioVIP }