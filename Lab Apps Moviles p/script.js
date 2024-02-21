var txt1 = document.getElementById("tipo-gasto");
var txt2 = document.getElementById("monto");


var articulo = " ";
var monto = 0;
var total = 0;

var seccTicket = document.getElementById("seccTicket");
var totParra = document.getElementById("totParra");

function agregar(){
    articulo = txt1.value;
    monto = parseInt(txt2.value);

    var newE = document.createElement('p');
    newE.innerHTML = articulo + " $" + monto;

    total += monto;

    seccTicket.insertBefore(newE, totParra);
    limpiar();
}

function limpiar(){
    document.getElementById("tipo-gasto").value = " ";
    document.getElementById("monto").value = " ";
}