console.log("Entro index.js");

let inputTitulo = document.getElementById("inputTitulo");
let inputEstreno = document.getElementById("inputEstreno");
let inputGenero = document.getElementById("inputGenero");
let inputImagen = document.getElementById("inputImagen");
let inputSinopsis = document.getElementById("inputSinposis");

//referencias a los botones

const btnAgregar = document.getElementById('btnAgregar');
const btnBorrarTodo = document.getElementById('btnBorrarTodo');

const divPeliculas = document.getElementById("divPeliculas");
const alertSinPeliculas = document.getElementById("alertSinPeliculas");

class Pelicula {
    constructor(titulo, estreno, genero, imagen, sinopsis){
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.imagen = imagen;
        this.sinopsis = sinopsis;
    }
}

function guardarPelicula () {
    let titulo = inputTitulo.value;
    let titulo = inputEstreno.value;
    let titulo = inputGenero.value;
    let titulo = inputImagen.value;
    let titulo = inputSinopsis.value;
    console.log(
        titulo,
        estreno,
        genero,
        imagen,
        sinopsis
    );
    console.log("Entro funcion guardar pelicula");
}

function borrarTodo() {
    console.log("Entro a borrar todo");
}

btnAgregar.addEventListener("click", guardarPelicula);
btnBorrarTodo.addEventListener("click", borrarTodo);