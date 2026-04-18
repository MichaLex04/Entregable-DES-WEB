document.getElementById("formulario").addEventListener("submit", function(e) {

    // Evita recargar toda la página
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    // Validacion Basica
    if(nombre === "" || correo === "" || mensaje === ""){
        document.getElementById("respuesta").innerText = "Por favor completa todos los campos";
        return;
    }

    setTimeout(() => {
        document.getElementById("respuesta").innerText = "Mensaje enviado correctamente";
    }, 500);

});