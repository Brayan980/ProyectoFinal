function adicionarCurso() {

    var cursos = document.getElementById("cursos")
    var cursosAgregados = document.getElementById("cursosAgregados")

    var li = crearNodoTexto("li", cursos.value)
    adicionarNodoAContenedor(li,cursosAgregados)

    if (cursos.selectedIndex !== -1) 
        
        cursos.remove(cursos.selectedIndex);
        
    

}

f