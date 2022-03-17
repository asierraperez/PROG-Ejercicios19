function cambia_estilo(evento,) {
    var cuerpo = document.getElementById("cuerpo")
    var check = document.getElementsByClassName("cambioEstilo")
    if (check[0].checked) {
        cuerpo.style.fontStyle = check[0].value
        localStorage.setItem("cursiva", check[0].value)
    } else {
        cuerpo.style.fontStyle = "normal"
        localStorage.setItem("cursiva", "normal")
    }
    if (check[1].checked) {
        cuerpo.style.fontWeight = check[1].value
        localStorage.setItem("negrita", check[1].value)
    } else {
        cuerpo.style.fontWeight = "lighter"
        localStorage.setItem("negrita", "lighter")
    }
    console.log(event.currentTarget.value)

}