var contador = 0
function escribirYComprobar(divNum) {
    while (contador < 9) {
        contador++;
        if (contador % 2 === 0) {
            document.getElementById("div" + divNum).innerHTML = "X";
            document.getElementById("turno").innerHTML = "Turno de O";
        }
        else {
            document.getElementById("div" + divNum).innerHTML = "O";
            document.getElementById("turno").innerHTML = "Turno de X";
        }

        var winner = "";
        val 
        for (let i = 1; i <= 7; i++) {
            if (div[i].innerHTML == "O" && div[i + 1].innerHTML == "O" && div[i + 2].innerHTML == "O") winner = "O"  
        }


        console.log(winner);
    }
}