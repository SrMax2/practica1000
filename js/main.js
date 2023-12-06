//las siguentes 3 lineas escuchan que boton se le da clicki y selecciona la imagen
document.getElementById("boton1").addEventListener("click", () => mostrar('../img/habitaciones/1h.jpg'));
document.getElementById("boton2").addEventListener("click", () => mostrar('../img/habitaciones/2h.jpg'));
document.getElementById("boton3").addEventListener("click", () => mostrar('../img/habitaciones/3h.jpg'));
//en esta otra envia la imagen 
function mostrar(habitacion) {
fetch(habitacion)
.then(response => response.blob())
.then(datos => document.getElementById("foto").setAttribute('src', URL.createObjectURL(datos)));
}
