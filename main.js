function main() {

    $("body").css({ "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" })
    $(".heroe").css({ "font-size": "16pt", "color": "blue", "text-align": "center", "padding": "10px" })
    $(".enemigo").css({ "font-size": "16pt", "color": "red", "border-style": "solid", "border-color": "black", "padding": "10px" })


    var personajes = personaje()
    var enemigos = enemigo(personajes)
    var heroes = heroe(personajes)

    var nombre_personaje = entrada("Ponle un nombre a tu héroe")
    var nivel = entrada("A que nivel quieres que empiece tu heroe")
    var repetir = true
    var nordico = new heroes(300, 50, nombre_personaje, nivel, 5, 15)
    var heroe_muerto = false
    var boton_ataque = document.getElementById("btn_ataque")
    var nombre_html = document.getElementById("nombre_heroe")
    var boton_siguiente = document.getElementById("siguiente")
    boton_ataque.disabled = true
    //boton_siguiente.disabled=true
    nombre_html.innerHTML = nordico.get_nombre

    // while (repetir & !heroe_muerto) {

    var vida_original = nordico.get_vida
    var ataque_original = nordico.get_ataque

    $("#nivel_heroe").html(nordico.nivel)
    $("#experiencia_heroe").html(nordico.experiencia)
    $("#salud_heroe").html(nordico.vida + "/" + vida_original)


    boton_siguiente.addEventListener("click", () => {
        var esqueleto = new enemigos(100, 30, "Esqueleto", 5, 1)
        var bandido = new enemigos(150, 35, "Bandido", 7, 5)
        boton_siguiente.disabled = true
        boton_ataque.disabled = false
        if (nordico.get_nivel <= 5) {

            var vida_enemigo = esqueleto.get_vida
            $("#nivel_enemigo").html(esqueleto.get_nivel)
            $("#salud_enemigo").html(esqueleto.get_vida + "/" + vida_enemigo)
            var nombre_enemigo = document.getElementById("nombre_enemigo")
            nombre_enemigo.innerHTML = esqueleto.get_nombre

            boton_ataque.addEventListener("click", (evt) => {
                nordico = combate(evt, nordico, esqueleto, vida_original, ataque_original, vida_enemigo, boton_ataque, boton_siguiente)
                vida_original = nordico.get_vida
                ataque_original = nordico.get_ataque
            })
            //combate(nordico, esqueleto, vida_original)

            //if (!heroe_muerto) {

            //}

        } else if (nordico.get_nivel <= 10 && nordico.get_nivel > 5) {

            var vida_enemigo = bandido.get_vida
            $("#nivel_enemigo").html(bandido.get_nivel)
            $("#salud_enemigo").html(bandido.get_vida + "/" + vida_enemigo)
            var nombre_enemigo = document.getElementById("nombre_enemigo")
            nombre_enemigo.innerHTML = bandido.get_nombre

            boton_ataque.addEventListener("click", (evt) => {
                nordico = combate(evt, nordico, bandido, vida_original, ataque_original, vida_enemigo, boton_ataque, boton_siguiente)
            })
            /*if (!heroe_muerto) {
                repetir = confirmar("continuar con la aventura")
            }*/

        } else if (nordico.get_nivel <= 15 && nordico.get_nivel > 10) {

            var nigromante = new enemigos(150, 50, "Nigromante", 9, 5)
            var vida_enemigo = nigromante.get_vida
            $("#nivel_enemigo").html(nigromante.get_nivel)
            $("#salud_enemigo").html(nigromante.get_vida + "/" + vida_enemigo)
            var nombre_enemigo = document.getElementById("nombre_enemigo")
            nombre_enemigo.innerHTML = nigromante.get_nombre

            boton_ataque.addEventListener("click", (evt) => {
                nordico = combate(evt, nordico, nigromante, vida_original, ataque_original, vida_enemigo, boton_ataque)
            })
            /* if (!heroe_muerto) {
                 repetir = confirmar("continuar con la aventura")
             }*/

        } else if (nordico.get_nivel <= 20 && nordico.get_nivel > 15) {

            var caballero = new enemigos(200, 70, "Caballero", 10, 7)
            var vida_enemigo = caballero.get_vida
            $("#nivel_enemigo").html(caballero.get_nivel)
            $("#salud_enemigo").html(caballero.get_vida + "/" + vida_enemigo)
            var nombre_enemigo = document.getElementById("nombre_enemigo")
            nombre_enemigo.innerHTML = caballero.get_nombre

            boton_ataque.addEventListener("click", (evt) => {
                nordico = combate(evt, nordico, caballero, vida_original, ataque_original, vida_enemigo, boton_ataque)
            })/* if (!heroe_muerto) {
             repetir = confirmar("continuar con la aventura")
         }*/

        } else if (nordico.get_nivel <= 25 && nordico.get_nivel > 20) {

            var dragon = new enemigos(300, 100, "Dragon", 15, 10)
            var vida_enemigo = dragon.get_vida
            $("#nivel_enemigo").html(dragon.get_nivel)
            $("#salud_enemigo").html(dragon.get_vida + "/" + vida_enemigo)
            var nombre_enemigo = document.getElementById("nombre_enemigo")
            nombre_enemigo.innerHTML = dragon.get_nombre

            boton_ataque.addEventListener("click", (evt) => {
                nordico = combate(evt, nordico, dragon, vida_original, ataque_original, vida_enemigo, boton_ataque)
            })/* if (!heroe_muerto) {
             repetir = confirmar("continuar con la aventura")
         }*/

        }

    })

}
main()