document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al formulario
    var formularioCrearTema = document.getElementById("crear_tema").querySelector("form");

    // Agrega un evento de clic al botón de guardar
    formularioCrearTema.querySelector("button").addEventListener("click", function() {
        // Obtén los valores del formulario
        var codigo = formularioCrearTema.querySelector("#codigo").value;
        var nombre = formularioCrearTema.querySelector("#nombre").value;
        var descripcion = formularioCrearTema.querySelector("#descripcion").value;
        var cursos = formularioCrearTema.querySelector("#cursos").value;
        var costo = formularioCrearTema.querySelector("#costo").value;
        var precio = formularioCrearTema.querySelector("#precio").value;

        // Crea un nuevo elemento de lista con los valores del formulario
        var nuevoItemLista = document.createElement("li");
        nuevoItemLista.textContent = "Código: " + codigo + ", Nombre: " + nombre + ", Descripción: " + descripcion +
            ", Cursos: " + cursos + ", Costo: " + costo + ", Precio: " + precio;

        // Obtén una referencia a la lista de temas y agrégale el nuevo elemento
        var listaTemas = document.getElementById("consultar_temas").querySelector("ul");
        listaTemas.appendChild(nuevoItemLista);

        // Limpia el formulario después de agregar el elemento a la lista
        formularioCrearTema.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al formulario de edición
    var formularioEditarTema = document.getElementById("editar_tema").querySelector("form");

    // Agrega un evento de clic al botón de editar
    formularioEditarTema.querySelector("button").addEventListener("click", function() {
        // Obtén los valores del formulario de edición
        var codigoEditar = formularioEditarTema.querySelector("#codigo").value;
        var nombreEditar = formularioEditarTema.querySelector("#nombre").value;
        var descripcionEditar = formularioEditarTema.querySelector("#descripcion").value;
        var cursosEditar = formularioEditarTema.querySelector("#cursos").value;
        var costoEditar = formularioEditarTema.querySelector("#costo").value;
        var precioEditar = formularioEditarTema.querySelector("#precio").value;

        // Busca el elemento correspondiente en la lista por el código
        var listaTemas = document.getElementById("consultar_temas").querySelector("ul");
        var elementosLista = listaTemas.getElementsByTagName("li");

        for (var i = 0; i < elementosLista.length; i++) {
            var codigoLista = elementosLista[i].textContent.match(/Código: (\w+)/)[1];

            if (codigoLista === codigoEditar) {
                // Actualiza el contenido del elemento en la lista con los valores del formulario
                elementosLista[i].textContent = "Código: " + codigoEditar + ", Nombre: " + nombreEditar +
                    ", Descripción: " + descripcionEditar + ", Cursos: " + cursosEditar +
                    ", Costo: " + costoEditar + ", Precio: " + precioEditar;

                // Limpia el formulario de edición después de editar el elemento en la lista
                formularioEditarTema.reset();
                break;
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al formulario de eliminación
    var formularioEliminarTema = document.getElementById("eliminar_tema").querySelector("form");

    // Agrega un evento de clic al botón de eliminar
    formularioEliminarTema.querySelector("button").addEventListener("click", function() {
        // Obtén el código del formulario de eliminación
        var codigoEliminar = formularioEliminarTema.querySelector("#codigo").value;

        // Busca el elemento correspondiente en la lista por el código
        var listaTemas = document.getElementById("consultar_temas").querySelector("ul");
        var elementosLista = listaTemas.getElementsByTagName("li");

        for (var i = 0; i < elementosLista.length; i++) {
            var codigoLista = elementosLista[i].textContent.match(/Código: (\w+)/)[1];

            if (codigoLista === codigoEliminar) {
                // Elimina el elemento de la lista
                listaTemas.removeChild(elementosLista[i]);
                
                // Limpia el formulario de eliminación después de eliminar el elemento en la lista
                formularioEliminarTema.reset();
                break;
            }
        }
    });
});

//para cursos exactamente

document.addEventListener("DOMContentLoaded", function() {
    // Obtén una referencia al formulario de creación de cursos
    var formularioCrearCurso = document.getElementById("crear_curso").querySelector("form");

    // Agrega un evento de clic al botón de guardar
    formularioCrearCurso.querySelector("button").addEventListener("click", function() {
        // Obtén los valores del formulario de creación de cursos
        var codigoCrear = formularioCrearCurso.querySelector("#codigo").value;
        var nombreCrear = formularioCrearCurso.querySelector("#nombre").value;
        var videoCrear = formularioCrearCurso.querySelector("#video").value;

        // Crea un nuevo elemento de lista con los valores del formulario
        var nuevoItemLista = document.createElement("li");
        nuevoItemLista.textContent = "Código: " + codigoCrear + ", Nombre: " + nombreCrear + ", Video: " + videoCrear;

        // Obtén una referencia a la lista de cursos y agrégale el nuevo elemento
        var listaCursos = document.getElementById("consultar_temas").querySelector("ul");
        listaCursos.appendChild(nuevoItemLista);

        // Limpia el formulario después de agregar el elemento a la lista
        formularioCrearCurso.reset();
    });

    // Obtén una referencia al formulario de edición de cursos
    var formularioEditarCurso = document.getElementById("editar_curso").querySelector("form");

    // Agrega un evento de clic al botón de editar
    formularioEditarCurso.querySelector("button").addEventListener("click", function() {
        // Obtén los valores del formulario de edición de cursos
        var codigoEditar = formularioEditarCurso.querySelector("#codigo").value;
        var nombreEditar = formularioEditarCurso.querySelector("#nombre").value;
        var videoEditar = formularioEditarCurso.querySelector("#video").value;

        // Busca el elemento correspondiente en la lista por el código
        var listaCursos = document.getElementById("consultar_temas").querySelector("ul");
        var elementosLista = listaCursos.getElementsByTagName("li");

        for (var i = 0; i < elementosLista.length; i++) {
            var codigoLista = elementosLista[i].textContent.match(/Código: (\w+)/)[1];

            if (codigoLista === codigoEditar) {
                // Actualiza el contenido del elemento en la lista con los valores del formulario
                elementosLista[i].textContent = "Código: " + codigoEditar + ", Nombre: " + nombreEditar +
                    ", Video: " + videoEditar;

                // Limpia el formulario de edición después de editar el elemento en la lista
                formularioEditarCurso.reset();
                break;
            }
        }
    });

    // Obtén una referencia al formulario de eliminación de cursos
    var formularioEliminarCurso = document.getElementById("eliminar_curso").querySelector("form");

    // Agrega un evento de clic al botón de eliminar
    formularioEliminarCurso.querySelector("button").addEventListener("click", function() {
        // Obtén el código del formulario de eliminación
        var codigoEliminar = formularioEliminarCurso.querySelector("#codigo").value;

        // Busca el elemento correspondiente en la lista por el código
        var listaCursos = document.getElementById("consultar_temas").querySelector("ul");
        var elementosLista = listaCursos.getElementsByTagName("li");

        for (var i = 0; i < elementosLista.length; i++) {
            var codigoLista = elementosLista[i].textContent.match(/Código: (\w+)/)[1];

            if (codigoLista === codigoEliminar) {
                // Elimina el elemento de la lista
                listaCursos.removeChild(elementosLista[i]);
                
                // Limpia el formulario de eliminación después de eliminar el elemento en la lista
                formularioEliminarCurso.reset();
                break;
            }
        }
    });
});