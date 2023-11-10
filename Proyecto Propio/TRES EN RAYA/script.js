var contador = 0
function escribirYComprobar(divNum) {
    contador++;
    if (contador % 2 === 0) document.getElementById("div" + divNum).innerHTML = "X";
    else document.getElementById("div" + divNum).innerHTML = "O";

}