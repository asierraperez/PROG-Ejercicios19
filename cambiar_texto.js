function cambiaTexto(event) {
    var cuerpo = document.getElementById("cuerpo");
    cuerpo.style.fontSize = event.currentTarget.value;
    console.log(event.currentTarget.value);
    localStorage.setItem("tamFuente", event.currentTarget.value);
}
