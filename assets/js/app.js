//variables
const listaNotas = document.getElementById('lista-notas')


// Event Listeners
eventListeners();

function eventListeners() {
    //  al enviar la nota, escuchamos el evento submint y ejecutamos la funcion de agregar la nota.
    document.querySelector('#formulario').addEventListener('submit', agregarNota);
    // borrar nota
    listaNotas.addEventListener('click', deleteNota)

    // contenedor desde el LS

    document.addEventListener('DOMContentLoaded', localStorageList);


}


// Functions

function agregarNota(e) {
    e.preventDefault()
    console.log('nota enviada')
    // capturamos el valor de la nota

    const nota = document.getElementById('nota').value
    // creamos el boton de borrar
    const botonDelete = document.createElement('a')
    botonDelete.classList = 'borrar-nota'
    botonDelete.innerText = 'X'

    // creamos elemento
    const li = document.createElement('li')
    li.innerText = nota
    li.appendChild(botonDelete)
    listaNotas.appendChild(li);
 

    // se agrega al local-storage

    agregarNotaLocalStorage(nota)


}

function deleteNota(e) {
    e.preventDefault()

    if (e.target.className === 'borrar-nota') {
        e.target.parentElement.remove();

        borrarNotaLocalStorage(e.target.parentElement.innerText);
    

    }

}

function agregarNotaLocalStorage(nota) {
    let notas
    //agregando al LS
    notas = obtenerNotaLocalStorage();

    notas.push(nota)
    localStorage.setItem('notas', JSON.stringify(notas))
}

function obtenerNotaLocalStorage() {
    let notas

    if (localStorage.getItem('notas') === null) {
        notas = [];
    }
    else {

        notas = JSON.parse(localStorage.getItem('notas'));
    }

    return notas;
}

// datos del local storage

function localStorageList(){
    let notas

    notas = obtenerNotaLocalStorage();
    notas.forEach(function(nota) {
        
        // creamos el boton de borrar
    const botonDelete = document.createElement('a')
    botonDelete.classList = 'borrar-nota'
    botonDelete.innerText = 'X'

    // creamos elemento
    const li = document.createElement('li')
    li.innerText = nota
    li.appendChild(botonDelete)
    listaNotas.appendChild(li);
    });
    console.log(notas);
}

// vacia LS
function borrarNotaLocalStorage(nota){
    let notas, notaBorrado;

    notaBorrado= nota.substring( 0, nota.length -1)

    notas = obtenerNotaLocalStorage();

    notas.forEach(function(nota,index){
        if (notaBorrado === nota){
            notas.splice(index,1)
        }
    });

    localStorage.setItem('notas', JSON.stringify(notas));

}
