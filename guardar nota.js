function guardar_anotacion(evento) {
    console.log(event.currentTarget.value);
    localStorage.setItem("notas", event.currentTarget.value)
}