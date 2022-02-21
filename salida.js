function salida(evt, salida_heroe_muerto, enemigo_muerto, salida_nordico, salida_enemigo, salida_vida_original, salida_ataque_original, salida_boton_siguiente) {
    var aux_vida = salida_vida_original
    var aux_ataque = salida_ataque_original
    if (enemigo_muerto) {

        var nuevo_parrafo1 = document.createElement("div")
        var texto_ganar = salida_nordico.get_nombre + " Ganó el combate\n" +
            "Experiencia ganada; " + salida_enemigo.get_nivel
        nuevo_parrafo1.innerText = texto_ganar
        document.getElementsByClassName("heroe")[0].appendChild(nuevo_parrafo1)

        var sube_nivel = salida_nordico.control_nivel(salida_enemigo.get_nivel)
        $("#experiencia_heroe").html(salida_nordico.experiencia)
        if (sube_nivel) {

            aux_vida = aux_vida + 50
            aux_ataque = aux_ataque + 5
            salida_nordico.set_vida = aux_vida
            salida_nordico.set_ataque = aux_ataque

            var sube_nivel_html = document.createElement("div")
            var texto = salida_nordico.get_nombre + " sube de nivel\n" +
                "Experiencia actual: " + salida_nordico.get_xp + "\n" +
                "Nivel actual: " + salida_nordico.get_nivel + "\n" +
                "Vida actual: " + salida_nordico.get_vida + "\n" +
                "Ataque actual: " + salida_nordico.get_ataque + "\n"

            sube_nivel_html.innerText = texto
            document.getElementsByClassName("heroe")[0].appendChild(sube_nivel_html)


        }
        var boton_aceptar = document.createElement("button")
        boton_aceptar.innerText = "Aceptar"
        document.getElementsByClassName("heroe")[0].appendChild(boton_aceptar)
        boton_aceptar.addEventListener("click", () => {
            var heroe_html = document.getElementsByClassName("heroe")
            if (sube_nivel) {
                heroe_html[0].removeChild(sube_nivel_html)
            }

            heroe_html[0].removeChild(nuevo_parrafo1)
            heroe_html[0].removeChild(boton_aceptar)
        })
        $("#nivel_heroe").html(salida_nordico.nivel)
        $("#experiencia_heroe").html(salida_nordico.experiencia)
        $("#salud_heroe").html(salida_nordico.vida + "/" + aux_vida)
        salida_boton_siguiente.disabled = false

    }
    if (salida_heroe_muerto) {
        //alert()
        $("#salud_heroe").html(salida_nordico.vida + "/" + aux_vida)
        var parrafo_muerte = document.createElement("div")
        var texto_muerte = "Perdiste el combate y " + salida_nordico.get_nombre + " murió\n" +
            "Pulas F5 para volver a empezar"
        parrafo_muerte.innerText = texto_muerte
        document.getElementsByClassName("heroe")[0].appendChild(parrafo_muerte)
        var boton_aceptar = document.createElement("button")
        boton_aceptar.innerText = "Aceptar"
        document.getElementsByClassName("heroe")[0].appendChild(boton_aceptar)
        boton_aceptar.addEventListener("click", () => {
            var heroe_html = document.getElementsByClassName("heroe")
            heroe_html[0].removeChild(parrafo_muerte)
            heroe_html[0].removeChild(boton_aceptar)
        })

        salida_boton_siguiente.disabled = true

    }

    return salida_nordico

}