console.log("Entro index.js");

const btnBlue = document.getElementById("btnBlue");

// btnBlue.addEventListener("click", function () {
//     console.log("click en el boton azul!!!");
// });

function clickBotonAzul() {
    console.log("click en boton");
}

function OverButtonAzul(){
    console.log("Entro evento over");
}

function changeBackgroundColorPage(color) {
    document.body.style.backgroundColor = color;
}

btnBlue.addEventListener("click", ()=> {
    changeBackgroundColorPage("Blue")
});

btnBlue.addEventListener("mouseover", OverButtonAzul);