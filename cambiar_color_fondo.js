function cambia_color_fondo() {
    var pelea = document.getElementById("pelea")

    pelea.style.backgroundColor = event.currentTarget.value

    console.log(event.currentTarget.value);
    localStorage.setItem("cambioColorFondo", event.currentTarget.value);
}