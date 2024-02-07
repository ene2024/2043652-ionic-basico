var txt = document.getElementById("txt");
var texto = "";

const buttom = document.querySelector("button");

buttom.onclick = function () {
    texto = document.getElementById("txt").value;
    console.log(txt);
    alert(texto);
}

function limpiar(){
    document.getElementById("txt").value = " ";
}

function cambiarColorPagina(){
    var simbolos, color;
    simbolos = "0123456789ABCDEF"; // es hexagesimal 
    color = "#";

    for ( var i = 0; i<6; i++){
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    document.body.style.background = color;

}

