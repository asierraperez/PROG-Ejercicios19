function main() {

    $("body").css({ "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" })
    $(".heroe").css({ "font-size": "16pt", "color": "blue", "text-align": "center", "padding": "10px" })
    $(".enemigo").css({ "font-size": "16pt", "color": "red", "border-style": "solid", "border-color": "black", "padding": "10px" })


    var personajes = personaje()
    var enemigos = enemigo(personajes)
    var heroes = heroe(personajes)

    var nombre_personaje = entrada("Ponle un nombre a tu héroe")
    var nivel = entrada("A que nivel quieres que empiece tu heroe")

    var nordico = new heroes(300, 50, nombre_personaje, nivel, 5, 15)

    var aux_enemigo
    var turno_1 = false
    var vida_enemigo
    var vida_original = nordico.get_vida
    var ataque_original = nordico.get_ataque

    $("#nivel_heroe").html(nordico.nivel)
    $("#experiencia_heroe").html(nordico.experiencia)
    $("#salud_heroe").html(nordico.vida + "/" + vida_original)

    var boton_ataque = document.getElementById("btn_ataque")
    var nombre_html = document.getElementById("nombre_heroe")
    var boton_siguiente = document.getElementById("siguiente")


    nombre_html.innerHTML = nordico.get_nombre
    boton_ataque.disabled = true

    boton_siguiente.addEventListener("click", () => {
        turno_1 = true
        var esqueleto = new enemigos(100, 30, "Esqueleto", 5, 1)
        var bandido = new enemigos(150, 35, "Bandido", 7, 5)
        var nigromante = new enemigos(150, 50, "Nigromante", 9, 5)
        var caballero = new enemigos(200, 70, "Caballero", 10, 7)
        var dragon = new enemigos(300, 100, "Dragon", 15, 10)
        boton_siguiente.disabled = true
        boton_ataque.disabled = false

        if (nordico.get_nivel <= 5) {

            aux_enemigo = esqueleto

        } else if (nordico.get_nivel <= 10 && nordico.get_nivel > 5) {

            aux_enemigo = bandido

        } else if (nordico.get_nivel <= 15 && nordico.get_nivel > 10) {

            aux_enemigo = nigromante

        } else if (nordico.get_nivel <= 20 && nordico.get_nivel > 15) {

            aux_enemigo = caballero

        } else if (nordico.get_nivel > 20) {

            aux_enemigo = dragon

        }

        vida_enemigo = aux_enemigo.get_vida
        $("#nivel_enemigo").html(aux_enemigo.get_nivel)
        $("#salud_enemigo").html(aux_enemigo.get_vida + "/" + vida_enemigo)
        var nombre_enemigo = document.getElementById("nombre_enemigo")
        nombre_enemigo.innerHTML = aux_enemigo.get_nombre

    })


    boton_ataque.addEventListener("click", (evt) => {
        if (turno_1) {
            vida_enemigo = aux_enemigo.get_vida
            turno_1 = false
        }

        var heroe_muerto = nordico.comprueba_muerto()
        var enemigo_muerto = aux_enemigo.comprueba_muerto()
        if (!heroe_muerto) {
            aux_enemigo = ataca_nordico(evt, nordico, aux_enemigo, vida_enemigo)
            enemigo_muerto = aux_enemigo.comprueba_muerto()

        }
        if (!enemigo_muerto) {
            nordico = ataca_enemigo(evt, nordico, aux_enemigo, vida_original)
            heroe_muerto = nordico.comprueba_muerto()
        }
        if (enemigo_muerto || heroe_muerto) {
            boton_ataque.disabled = true
            salida(evt, heroe_muerto, enemigo_muerto, nordico, aux_enemigo, vida_original, ataque_original, boton_siguiente)

            vida_original = nordico.get_vida
            ataque_original = nordico.get_ataque
        }


    })

}
main()