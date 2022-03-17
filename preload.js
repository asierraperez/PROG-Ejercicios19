function preload() {
    var cuerpo = document.getElementById("cuerpo");
    var heroe = document.getElementsByClassName("heroe")
    var tamFuente = localStorage.getItem("tamFuente");
    var colorFuente = localStorage.getItem("cambioColor")
    var notas = localStorage.getItem("notas")
    var nombre = localStorage.getItem("nombre_personaje")
    var color_fondo = localStorage.getItem("cambioColorFondo")
    var negrita = localStorage.getItem("negrita")
    var cursiva = localStorage.getItem("cursiva")

    cuerpo.style.fontSize = tamFuente;
    for (let i = 0; i < heroe.length; i++) {
        heroe[i].style.color = colorFuente
    }
    var radio = document.getElementsByClassName("tamTexto");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].value == tamFuente) {
            radio[i].checked = true;
        } else {
            radio[i].checked = false;
        }
    }
    var radio_color = document.getElementsByClassName("cambioColor");
    for (var i = 0; i < radio_color.length; i++) {
        if (radio_color[i].value == colorFuente) {
            radio_color[i].checked = true;
        } else {
            radio_color[i].checked = false;
        }
    }

    document.getElementById("notas").value = notas

    document.getElementById("nombre_heroe").innerHTML = nombre

    document.getElementById("pelea").style.backgroundColor = color_fondo
    var radio_color_fondo = document.getElementsByClassName("cambioColorFondo");
    for (var i = 0; i < radio_color_fondo.length; i++) {
        if (radio_color_fondo[i].value == color_fondo) {
            radio_color_fondo[i].checked = true;
        } else {
            radio_color_fondo[i].checked = false;
        }
    }

    var check_estilo = document.getElementsByClassName("cambioEstilo")
    for (let i = 0; i < check_estilo.length; i++) {
        if (negrita == check_estilo[i].value) {
            check_estilo[i].checked = true
            cuerpo.style.fontWeight = negrita
        }
        if (cursiva == check_estilo[i].value) {
            check_estilo[i].checked = true
            cuerpo.style.fontStyle = cursiva

        }

    }


}
