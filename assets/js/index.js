console.log("Entro index.js");

let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

let inputTitulo = document.getElementById("inputTitulo");
let inputEstreno = document.getElementById("inputEstreno");
let inputGenero = document.getElementById("inputGenero");
let inputImagen = document.getElementById("inputImagen");
let inputSinopsis = document.getElementById("inputSinopsis");

//referencias a los botones

const btnAgregar = document.getElementById('btnAgregar');
const btnBorrarTodo = document.getElementById('btnBorrarTodo');

const divPeliculas = document.getElementById("divPeliculas");
const alertSinPeliculas = document.getElementById("alertSinPeliculas");

let indexEditar = null;

class Pelicula {
    constructor(titulo, estreno, genero, imagen, sinopsis) {
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.imagen = imagen;
        this.sinopsis = sinopsis;
    }
}

function guardarPelicula() {
    let titulo = inputTitulo.value;
    let estreno = inputEstreno.value;
    let genero = inputGenero.value;
    let imagen = inputImagen.value;
    let sinopsis = inputSinopsis.value;
    let pelicula = new Pelicula(
        titulo,
        estreno,
        genero,
        imagen,
        sinopsis
    );
    console.log(pelicula);
    if (indexEditar === null) {
        console.log("Agregar Pelicula");
        peliculas.push(pelicula);
    } else {
        console.log("Editar Pelicula");
    }
    localStorage.setItem("peliculas", JSON.stringify(peliculas))
    console.log("Entro a guardar pelicula");
    mostrarPeliculas();
}


function borrarTodo() {
    console.log("Entro a borrar todo");
    localStorage.clear();
    peliculas = [];
    mostrarPeliculas();
    alert("se borraron las peliculas");
}

function mostrarPeliculas() {
    if (peliculas.length === 0) {
        divPeliculas.innerHTML = `
        <div class="alert alert-info" role="alert" id="alertSinPeliculas">
            No hay peliculas agregadas
        </div>`;
    } else {
        divPeliculas.innerHTML = "";
        peliculas.forEach((pelicula, index) => {
            divPeliculas.innerHTML += `
                <div class="card mb-3">
                   <div class="row g-0">
                      <div class="col-md-4">
                         <img src="${pelicula.imagen}" class="img-fluid rounded-start" alt="pelicula">
                      </div>
                      <div class="col-md-8">
                         <div class="card-body">
                            <h5 class="card-title">${pelicula.titulo}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${pelicula.estreno} - ${pelicula.genero}</h6>
                            <p class="card-text">${pelicula.sinopsis}</p>
                            <div class="row mb-2">
                               <div class="col">
                                  <button class="btn btn-warning w-100 mt-2" type="button" id="editar-${index}" onclick="editarPelicula(${index})">Editar</button>
                               </div>
                               <div class="col">
                                  <button class="btn btn-danger w-100 mt-2" type="button" id="eliminar-${index}" onclick="eliminarPelicula(${index})">Eliminar</button>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
            `;
        });
    }
}

btnAgregar.addEventListener("click", guardarPelicula);
btnBorrarTodo.addEventListener("click", borrarTodo);

mostrarPeliculas();