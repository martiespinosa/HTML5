// comentarios de JavaScript (/* Para comentario de varias lineas */)

function ejecuta() {
    // document.getElementsByTagName
    // document.getElementById
    // for(var i = 0; i < 2; i++) {
    //     var z = document.getElementsByClassName("importante")[i].onclick = saludo;
    // }

    // document.querySelector("#principal p:last-child").onclick = saludo;
    var elementos = document.querySelectorAll("#principal p, span");
    for (i = 0; i < elementos.length; i++) {
        elementos[i].onclick = saludo;
    }
}


function saludo() {
    alert("Hola. Qué hay de nuevo?");
}

window.onload = ejecuta;

