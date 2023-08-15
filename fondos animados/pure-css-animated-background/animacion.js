window.onload = function() {
    var p1, p2, p3;
    p1 = document.getElementById("pelicula1");
    p2 = document.getElementById("pelicula2");
    p3 = document.getElementById("pelicula3");
    
    setTimeout(function() {
        p1.style.animation = "enterAnimation 2s forwards";
    }, 150); // Ajusta el tiempo según sea necesario

    setTimeout(function() {
        p2.style.animation = "enterAnimation 1.75s forwards";
    }, 175); // Ajusta el tiempo según sea necesario

    setTimeout(function() {
        p3.style.animation = "enterAnimation 1.5s forwards";
    }, 200); // Ajusta el tiempo según sea necesario

    p1.addEventListener("mouseover", f_hover_si, false);
    p2.addEventListener("mouseover", f_hover_si, false);
    p3.addEventListener("mouseover", f_hover_si, false);

    p1.addEventListener("mouseout", f_hover_no, false);
    p2.addEventListener("mouseout", f_hover_no, false);
    p3.addEventListener("mouseout", f_hover_no, false);
};

function f_hover_si() {
    this.style.transform = "scale(1.2)";
}

function f_hover_no() {
    this.style.transform = "scale(1)";
}
