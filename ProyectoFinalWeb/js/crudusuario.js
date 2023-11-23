function insertar() {
    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");
    var tipo = document.getElementById("tipo");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");
    var tipoIdentificacion = document.getElementById("tipoIdentificacion");
    var numeroIdentificacion = document.getElementById("numeroIdentificacion");
    var direccion = document.getElementById("direccion");
    var fechaNacimiento = document.getElementById("fechaNacimiento");
    var estudiosRealizados = document.getElementById("estudiosRealizados");
    var correoElectronico = document.getElementById("correoElectronico");

    usuarioObjeto = new Usuario(
        usuario.value, password.value, tipo.value,
        nombres.value, apellidos.value, tipoIdentificacion.value,
        numeroIdentificacion.value, direccion.value, fechaNacimiento.value,
        estudiosRealizados.value, correoElectronico.value
    );

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    usuarios.push(usuarioObjeto);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Poner en blanco todas las casillas
    usuario.value = "";
    password.value = "";
    tipo.value = "admin"; // Puedes establecer un valor predeterminado para el tipo si lo deseas
    nombres.value = "";
    apellidos.value = "";
    tipoIdentificacion.value = "CC"; // Puedes establecer un valor predeterminado si lo deseas
    numeroIdentificacion.value = "";
    direccion.value = "";
    fechaNacimiento.value = "";
    estudiosRealizados.value = "";
    correoElectronico.value = "";

    console.log(usuarios);
}

function modificar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var tipo = document.getElementById("tipo").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var tipoIdentificacion = document.getElementById("tipoIdentificacion").value;
    var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
    var direccion = document.getElementById("direccion").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var estudiosRealizados = document.getElementById("estudiosRealizados").value;
    var correoElectronico = document.getElementById("correoElectronico").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    // Imprimir la lista de usuarios actual
    console.log("Usuarios antes de la modificación:");
    console.log(usuarios);

    // Buscar el usuario en el arreglo
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario &&
            usuarios[i].password === password &&
            usuarios[i].tipo === tipo) {
            // Imprimir información antes de la modificación
            console.log("Usuario encontrado antes de la modificación:");
            console.log(usuarios[i]);

            // Actualizar la información del usuario
            usuarios[i].nombres = nombres;
            usuarios[i].apellidos = apellidos;
            usuarios[i].tipoIdentificacion = tipoIdentificacion;
            usuarios[i].numeroIdentificacion = numeroIdentificacion;
            usuarios[i].direccion = direccion;
            usuarios[i].fechaNacimiento = fechaNacimiento;
            usuarios[i].estudiosRealizados = estudiosRealizados;
            usuarios[i].correoElectronico = correoElectronico;

            // Imprimir información después de la modificación
            console.log("Usuario modificado:");
            console.log(usuarios[i]);

            // Guardar la información actualizada en el almacenamiento local
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            // Imprimir la lista de usuarios después de la modificación
            console.log("Usuarios después de la modificación:");
            console.log(usuarios);

            // Limpiar el formulario después de la modificación
            document.getElementById("usuario").value = "";
            document.getElementById("password").value = "";
            document.getElementById("tipo").value = "admin"; // Otra opción para el valor predeterminado
            document.getElementById("nombres").value = "";
            document.getElementById("apellidos").value = "";
            document.getElementById("tipoIdentificacion").value = "CC"; // Otra opción para el valor predeterminado
            document.getElementById("numeroIdentificacion").value = "";
            document.getElementById("direccion").value = "";
            document.getElementById("fechaNacimiento").value = "";
            document.getElementById("estudiosRealizados").value = "";
            document.getElementById("correoElectronico").value = "";

            // Salir del bucle ya que encontramos y modificamos el usuario
            break;
        }
    }
}



function eliminar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var tipo = document.getElementById("tipo").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    // Imprimir la lista de usuarios actual
    console.log("Usuarios antes de la eliminación:");
    console.log(usuarios);

    // Buscar el usuario en el arreglo
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario &&
            usuarios[i].password === password &&
            usuarios[i].tipo === tipo) {
            // Imprimir información antes de la eliminación
            console.log("Usuario encontrado antes de la eliminación:");
            console.log(usuarios[i]);

            // Eliminar el usuario del array
            usuarios.splice(i, 1);

            // Imprimir la lista de usuarios después de la eliminación
            console.log("Usuarios después de la eliminación:");
            console.log(usuarios);

            // Guardar la información actualizada en el almacenamiento local
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            // Limpiar el formulario después de la eliminación
            document.getElementById("usuario").value = "";
            document.getElementById("password").value = "";
            document.getElementById("tipo").value = "admin"; // Otra opción para el valor predeterminado

            // Salir del bucle ya que encontramos y eliminamos el usuario
            break;
        }
    }
}

function consultar() { }


function loguear() {

    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");

    var encontrado = false

    for (let i = 0; i < usuarios.length && !encontrado;
        i++) {

        if (usuarios[i].usuario == usuario.value &&
            usuarios[i].password == password.value) {

            if (usuarios[i].tipo == "admin")
                location.href = "../html/admin/menuadministrador.html"
            else if (usuarios[i].tipo == "instructor")
                location.href = "../html/instructor/menuinstructor.html"
            else if (usuarios[i].tipo == "estudiante")
                location.href = "../html/estudiante/menuestudiante.html"
               
                encontrado = true   

        }
    }

    if (!encontrado)
        alert('Usuario y/o password errado')
}

