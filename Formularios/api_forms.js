window.addEventListener("load", f_iniciar);

function f_iniciar() {
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var edad = document.getElementById("edad");
  var enviar = document.getElementById("enviar");

  nombre.addEventListener("input", f_validar);
  apellido.addEventListener("input", f_validar);
  edad.addEventListener("input", f_validar);
  enviar.addEventListener("click", f_validar);

  f_validar;
}

function f_validar() {
  if (nombre.value !== "" || apellido.value !== "" || edad.value !== "") {
    if (nombre.value === "" && apellido.value === "") {
      nombre.setCustomValidity("Introduce nombre y apellido");
      apellido.setCustomValidity("Introduce nombre y apellido");
      nombre.style.backgroundColor = "#ffdddd";
      apellido.style.backgroundColor = "#ffdddd";
    }
    if (nombre.value === "") {
      nombre.setCustomValidity("Introduce nombre y apellido");
      nombre.style.backgroundColor = "#ffdddd";
    } else {
      nombre.setCustomValidity("");
      nombre.style.backgroundColor = "#ffffff";
    }
    if (apellido.value === "") {
      apellido.setCustomValidity("Introduce nombre y apellido");
      apellido.style.backgroundColor = "#ffdddd";
    } else {
      apellido.setCustomValidity("");
      apellido.style.backgroundColor = "#ffffff";
    }
  } else {
    nombre.setCustomValidity("Introduce nombre y apellido");
    apellido.setCustomValidity("Introduce nombre y apellido");
    nombre.style.backgroundColor = "#ffdddd";
    apellido.style.backgroundColor = "#ffdddd";
  }
}
