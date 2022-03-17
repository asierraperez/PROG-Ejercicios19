function main() {

    preload()

    $("#pelea").css({ "display": "flex", "flex-direction": "row", "flex-wrap": "wrap" })
    $("#opciones").css({ "display": "flex", "flex-direction": "row", "flex-wrap": "wrap", "margin-right": "15px" })
    $(".heroe").css({ "font-size": "16pt", "text-align": "center", "padding": "10px" })
    $(".enemigo").css({ "font-size": "16pt", "color": "red", "border-style": "solid", "border-color": "black", "padding": "10px" })


    var personajes = personaje()
    var enemigos = enemigo(personajes)
    var heroes = heroe(personajes)

    var nombre_personaje = entrada("Ponle un nombre a tu héroe")
    var nivel = entrada("A que nivel quieres que empiece tu heroe")

    var nordico = new heroes(300, 50, nombre_personaje, nivel, 5, 15, false)
    var aux_nordico = nordico

    var aux_enemigo
    var turno_1 = false
    var vida_enemigo
    var vida_original = aux_nordico.get_vida
    var ataque_original = aux_nordico.get_ataque
    var repetir = false

    $("#nivel_heroe").html(aux_nordico.nivel)
    $("#experiencia_heroe").html(aux_nordico.experiencia)
    $("#salud_heroe").html(aux_nordico.vida + "/" + vida_original)

    var boton_ataque = document.getElementById("btn_ataque")
    var nombre_html = document.getElementById("nombre_heroe")
    var boton_siguiente = document.getElementById("siguiente")
    var boton_defensa = document.getElementById("btn_defensa")
    var radio = document.getElementsByClassName("tamTexto")
    var radio_color = document.getElementsByClassName("cambioColor")
    var anotacion = document.getElementById("notas")

    nombre_html.innerHTML = aux_nordico.get_nombre
    boton_ataque.disabled = true
    boton_defensa.disabled = true

    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener("click", (event) => {
            cambiaTexto(event);
        });
    }

    for (var i = 0; i < radio_color.length; i++) {
        radio_color[i].addEventListener("click", (event) => {
            cambia_color(event);
        });
    }

    anotacion.addEventListener("keyup", (evento) => {
        guardar_anotacion(evento)
    })


    boton_siguiente.addEventListener("click", () => {
        if (repetir) {
            nombre_personaje = entrada("Ponle un nombre a tu héroe")
            nivel = entrada("A que nivel quieres que empiece tu heroe")
            nordico = new heroes(300, 50, nombre_personaje, nivel, 5, 15, false)
            aux_nordico = nordico
            vida_original = aux_nordico.get_vida
            ataque_original = aux_nordico.get_ataque
            nombre_html.innerHTML = aux_nordico.get_nombre
            $("#nivel_heroe").html(aux_nordico.nivel)
            $("#experiencia_heroe").html(aux_nordico.experiencia)
            $("#salud_heroe").html(aux_nordico.vida + "/" + vida_original)
            repetir = false
        }
        turno_1 = true
        var esqueleto = new enemigos(100, 30, "Esqueleto", 5, 1)
        var bandido = new enemigos(150, 35, "Bandido", 7, 5)
        var nigromante = new enemigos(150, 50, "Nigromante", 9, 5)
        var caballero = new enemigos(200, 70, "Caballero", 10, 7)
        var dragon = new enemigos(300, 100, "Dragon", 15, 10)
        boton_siguiente.disabled = true
        boton_ataque.disabled = false
        boton_defensa.disabled = false

        if (aux_nordico.get_nivel <= 5) {
            aux_enemigo = esqueleto
        } else if (aux_nordico.get_nivel <= 10 && aux_nordico.get_nivel > 5) {
            aux_enemigo = bandido
        } else if (aux_nordico.get_nivel <= 15 && aux_nordico.get_nivel > 10) {
            aux_enemigo = nigromante
        } else if (aux_nordico.get_nivel <= 20 && aux_nordico.get_nivel > 15) {
            aux_enemigo = caballero
        } else if (aux_nordico.get_nivel > 20) {
            aux_enemigo = dragon
        }

        vida_enemigo = aux_enemigo.get_vida
        $("#nivel_enemigo").html(aux_enemigo.get_nivel)
        $("#salud_enemigo").html(aux_enemigo.get_vida + "/" + vida_enemigo)
        var nombre_enemigo = document.getElementById("nombre_enemigo")
        nombre_enemigo.innerHTML = aux_enemigo.get_nombre

    })

    boton_defensa.addEventListener("click", (evt) => {
        aux_nordico.set_isDefendiendo = true
        boton_defensa.disabled = true
    })


    boton_ataque.addEventListener("click", (evt) => {
        if (turno_1) {
            vida_enemigo = aux_enemigo.get_vida
            turno_1 = false
        }

        var heroe_muerto = aux_nordico.comprueba_muerto()
        var enemigo_muerto = aux_enemigo.comprueba_muerto()
        if (!heroe_muerto) {
            aux_enemigo = ataca_nordico(evt, aux_nordico, aux_enemigo, vida_enemigo)
            enemigo_muerto = aux_enemigo.comprueba_muerto()
            boton_defensa.disabled = false

        }
        if (!enemigo_muerto) {
            aux_nordico = ataca_enemigo(evt, aux_nordico, aux_enemigo, vida_original)
            heroe_muerto = aux_nordico.comprueba_muerto()
        }
        if (enemigo_muerto || heroe_muerto) {
            boton_ataque.disabled = true
            boton_defensa.disabled = true
            salida(evt, heroe_muerto, enemigo_muerto, aux_nordico, aux_enemigo, vida_original, ataque_original, boton_siguiente)
            vida_original = aux_nordico.get_vida
            ataque_original = aux_nordico.get_ataque
        }
        aux_nordico.set_isDefendiendo = false
        if (heroe_muerto) {
            repetir = confirmar("volver a jugar")
            if (repetir) {
                alert("Pulsa en 'Siguente enemigo' para continuar")
                boton_siguiente.disabled = false
            }
        }


    })

}
main()