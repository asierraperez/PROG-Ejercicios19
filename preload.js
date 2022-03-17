function preload() {
    var cuerpo = document.getElementById("cuerpo");
    var tamFuente = localStorage.getItem("tamFuente");
    cuerpo.style.fontSize = tamFuente;
    var radio = document.getElementsByClassName("tamTexto");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == tamFuente) {
            radio[i].checked = true;
        } else {
            radio[i].checked = false;
        }
    }
}
