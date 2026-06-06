
const botonAgregar = document.getElementById("agregar");
botonAgregar.addEventListener("click", function(){
    agregarTarea();
});

function agregarTarea() {
    const tarea = document.getElementById("tarea").value;
    const categoria = document.getElementById("categoria").value;

    if (tarea === "") {
        alert("Ingrese una tarea");
        return;
    }

    const tabla = document.getElementById("tabla");
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td>${tarea}</td>
    <td>${categoria}</td>
    <td>Pendiente</td>
    <td>
        <button class="hecha">Hecha</button>
        <button class="urgente">Urgente</button>
        <button class="eliminar">Eliminar</button>
    </td>
    `;

    const botonHecha = fila.querySelector(".hecha");
    botonHecha.addEventListener("click", function () {
        fila.style.backgroundColor = "green";
        fila.children[2].textContent = "Completada";
    });

    const botonUrgente = fila.querySelector(".urgente");
    botonUrgente.addEventListener("click", function () {
        fila.style.backgroundColor = "red";
        fila.children[2].textContent = "Urgente";
    });

    const botonEliminar = fila.querySelector(".eliminar");
    botonEliminar.addEventListener("click", function () {
        const confirmar = confirm("¿Desea eliminar esta tarea?");
        if (confirmar) {
            fila.remove();
            actualizarContador();
        }
    });

    tabla.appendChild(fila);
    actualizarContador();
    document.getElementById("tarea").value = "";
}

function actualizarContador() {
        const filas = document.querySelectorAll("#tabla tr");
        document.getElementById("contador").textContent = filas.length;
    }