function cambia_color() {
    var heroe = document.getElementsByClassName("heroe")
    for (let i = 0; i < heroe.length; i++) {
        heroe[i].style.color = event.currentTarget.value
    }
    console.log(event.currentTarget.value);
    localStorage.setItem("cambioColor", event.currentTarget.value);
}