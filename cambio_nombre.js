function cambio_nombre() {
    var existe_nombre = localStorage.getItem("nombre_heroe") != undefined
    if (!existe_nombre) {
        var nombre_personaje = entrada("Ponle un nombre a tu héroe")
        localStorage.setItem("nombre_heroe", nombre_personaje)
    } else {
        var cambio_nombre = confirmar("conservar el nombre anterior")
        if (cambio_nombre) {
            var nombre_personaje = localStorage.getItem("nombre_heroe")
        } else {
            var nombre_personaje = entrada("Ponle un nombre a tu héroe")
            localStorage.setItem("nombre_heroe", nombre_personaje)
        }
    }
    return nombre_personaje
}