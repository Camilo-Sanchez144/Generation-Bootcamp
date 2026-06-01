class Contenido{
    constructor(titulo, genero, anio){
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha(){
        return `
        titulo: ${this.titulo}
        genero: ${this.genero}
        año: ${this.anio}`
    }
    retirar(){
        this.disponible = false;
        return 'Se cambió el estado y ya no está disponible'
    }
    estado(){
        if(this.disponible) return `${this.titulo} está disponible`
        else return `${this.titulo} no está disponible. Fue retirado`
    }
}
class Pelicula extends Contenido{
    constructor(titulo, genero, anio, duracion){
        super(titulo,genero,anio)
        this.duracion = duracion
    }
    duracionFormateada(){
        const horas = Math.floor(this.duracion / 60)
        const minutos = this.duracion % 60
        return `${horas}h ${minutos}min`
    }
    ficha(){
        const fichaPelicula = super.ficha()
        return `${fichaPelicula}
        hora: ${this.duracionFormateada()}
        `
    }
}

class Serie extends Contenido{
    constructor(titulo, genero, anio, temporadas){
        super(titulo, genero, anio)
        this.temporadas = temporadas
        this.episodiosPorTemporada = 0
    }
    registrarEpisodios(cantidad){
        this.episodiosPorTemporada = cantidad
    }
    totalEpisodios(){
        return `${this.temporadas * this.episodiosPorTemporada}`
    }
    ficha(){
        const fichaSerie = super.ficha()
        return `${fichaSerie}
        numero de temporada: ${this.temporadas}
        total episodios: ${this.totalEpisodios()}
        `
    }
}
const pelicula1 = new Pelicula("Spiderman", "Accion", 2004, 128)
const pelicula2 = new Pelicula("The Avengers", "Accion", 2010, 230)
const pelicula3 = new Pelicula("Avatar", "Fantasi", 2000, 180)

const serie1 = new Serie("Black Clover", "Fantasia", 2011, 4)
const serie2 = new Serie("Dragon Ball", "Anime", 1994, 10)
const serie3 = new Serie("Black Mirror", "Thriller", 2022, 3)

const catalogo = [pelicula1,pelicula2,pelicula3, serie1,serie2,serie3]

for(let i =0 ; i< catalogo.length ; i++){
    console.log(catalogo[i].ficha())
}
pelicula1.retirar()
serie1.retirar()
console.log(`${pelicula1.estado()}
${serie1.estado()}`)

let contador = 0
for(let i =0 ; i< catalogo.length ; i++){
    if(catalogo[i].disponible){
        contador = contador + 1
    }
}
console.log('Hay disponibles '+ contador)

/* 
serie1.registrarEpisodios(10)
serie2.registrarEpisodios(17)

console.log(pelicula1.ficha(),
pelicula2.ficha(),
serie1.ficha(),
serie2.ficha());
 */