
const boton = document.getElementById('boton')
const input = document.getElementById('input')
const category = document.getElementById('categorySelect')
const espaciotareas = document.querySelector('.tareas')
const total = document.getElementById('total')
const hechas = document.getElementById('hechas')
const urgentes = document.getElementById('urgentes')
const pendientes = document.getElementById('pendientes')
const estado = document.getElementById('statusTask')

const tareas = []
let tareasurgentes = 0
let tareashechas = 0
let tareasPendientes = 0

function listatareas(){
    espaciotareas.innerHTML= "";

    for(let i =0; i<tareas.length;i++){
        espaciotareas.innerHTML += `
       <div class="tarea d-flex justify-content-between align-items-center">
            <div>
                <p class="Title">${tareas[i].tarea}</p>
                <p>${tareas[i].categoria}</p>
            </div>

            <div>
                <button class="btn btn-success" onclick="cambiaraHecha(${i})">Done</button>
                <button class="btn btn-danger" onclick="cambiaraUrgente(${i})">Urgente</button>
                <button class="btn btn-secondary" onclick="borrarTarea(${i})">Delete</button>
            </div>
        </div>`
    }
}
boton.addEventListener('click', () => {

    if(input.value == ""){
        alert('Debe llenar el campo tarea')
        return;
    }
    const tarea = {
        tarea: input.value,
        categoria: category.value,
        prioridad: 'pendiente'
    };
    input.value= "";
    tareas.push(tarea);
    total.innerHTML = `${tareas.length}`
    tareasPendientes += 1
    pendientes.innerHTML = `${tareasPendientes}`
    listatareas();
})

function cambiaraUrgente(tarea){
    if(tareas[tarea].prioridad == 'hecha'){
        tareas[tarea].prioridad = 'urgente';
        tareashechas -= 1
        tareasurgentes += 1
        hechas.innerHTML = `${tareashechas}`
        urgentes.innerHTML = `${tareasurgentes}`
        listatareas();
        return;
    }
    if(tareas[tarea].prioridad != 'urgente'){
        tareas[tarea].prioridad = 'urgente';
        tareasPendientes -= 1
        tareasurgentes += 1
        pendientes.innerHTML = `${tareasPendientes}`
        urgentes.innerHTML = `${tareasurgentes}`
        listatareas();
        return;
    }
    else if(tareas[tarea].prioridad == 'urgente'){
        tareas[tarea].prioridad = 'pendiente';
        tareasPendientes += 1
        tareasurgentes -= 1
        pendientes.innerHTML = `${tareasPendientes}`
        urgentes.innerHTML = `${tareasurgentes}`
        listatareas();
        return;
    }
}
function cambiaraHecha(tarea){

    if(tareas[tarea].prioridad == 'urgente'){
        tareas[tarea].prioridad = 'hecha';
        tareasurgentes -= 1
        tareashechas += 1
        hechas.innerHTML = `${tareashechas}`
        urgentes.innerHTML = `${tareasurgentes}`
        listatareas();
        return;
    }
    else if(tareas[tarea].prioridad != 'hecha'){
        tareas[tarea].prioridad = 'hecha';
        tareasPendientes -= 1
        tareashechas += 1
        pendientes.innerHTML = `${tareasPendientes}`
        hechas.innerHTML = `${tareashechas}`
        listatareas();
        return;
    }
    else if(tareas[tarea].prioridad == 'hecha'){
        tareas[tarea].prioridad = 'pendiente';
        tareasPendientes += 1
        tareashechas -= 1
        pendientes.innerHTML = `${tareasPendientes}`
        hechas.innerHTML = `${tareashechas}`
        listatareas();
        return;
    }
}
function borrarTarea(tarea){
    const prioridad = tareas[tarea].prioridad;

    if(prioridad === 'pendiente'){
        tareasPendientes -= 1;
        pendientes.innerHTML = `${tareasPendientes}`
    } 
    else if(prioridad === 'urgente'){
        tareasurgentes-=1;
        urgentes.innerHTML = `${tareasurgentes}`
    } 
    else if(prioridad === 'hecha'){
        tareashechas-=1;
        hechas.innerHTML = `${tareashechas}`
    }
    total.innerHTML = tareas.length - 1;
    tareas.splice(tarea, 1);
    listatareas();
}
estado.addEventListener('change', (e)=>{
    const estadoTarea = e.target.value;

    espaciotareas.innerHTML= '';

    for(let i =0; i<tareas.length;i++){
        if(estadoTarea == 'todas'){
        
        espaciotareas.innerHTML += `
            <div>
                <p>${tareas[i].tarea}</p>
                <p>${tareas[i].categoria}</p>
                

                <button onclick="cambiaraHecha(${i})">Done</button>
                <button onclick="cambiaraUrgente(${i})">Urgente</button>
                <button onclick="borrarTarea(${i})">Delete</button>
            </div>`
            return;
        }

        else if(tareas[i].prioridad == estadoTarea){
        
        espaciotareas.innerHTML += `
            <div>
                <p>${tareas[i].tarea}</p>
                <p>${tareas[i].categoria}</p>
                

                <button onclick="cambiaraHecha(${i})">Done</button>
                <button onclick="cambiaraUrgente(${i})">Urgente</button>
                <button onclick="borrarTarea(${i})">Delete</button>
            </div>`
            return;
        }
    }
})