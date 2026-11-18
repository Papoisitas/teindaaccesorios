function validar() {

    // Obtener los datos escritos en el formulario
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    // Comprobar usuario y contraseña
    if (usuario == "sixseven" && contrasena == "676767") {

        alert("Bienvenido al sistema");
        window.location.href = "bienvenida.html";
        return false;

    } else {

        alert("Usuario o contraseña incorrectos");
        return false;

    }

}