function combate(bueno, contrincante, vida_original, ataque_original) {
    var ultimo_turno = 0
    var contrincante_muerto = false
    var bueno_muerto = false
    alert("Te encontraste con un " + contrincante.get_nombre + "\nEmpieza el combate\n" +
        contrincante.get_nombre + "  " + contrincante.get_vida + " HP\n" +
        bueno.get_nombre + "  " + bueno.get_vida + " HP\n")
    while (!contrincante_muerto && !bueno_muerto) {

        if (ultimo_turno == 0 | ultimo_turno == 1) {

            contrincante.damage_recibido(bueno.ataque)
            contrincante_muerto = contrincante.comprueba_muerto()
            alert(contrincante.get_nombre + "  " + contrincante.get_vida + " HP\n" +
                bueno.get_nombre + "  " + bueno.get_vida + " HP\n")
            if (contrincante_muerto) {
                ultimo_turno = 0
            }
            ultimo_turno = -1

        } else if (ultimo_turno == -1) {
            bueno.damage_recibido(contrincante.get_ataque)
            bueno_muerto = bueno.comprueba_muerto()
            alert(contrincante.get_nombre + "  " + contrincante.get_vida + " HP\n" +
                bueno.get_nombre + "  " + bueno.get_vida + " HP\n")
            ultimo_turno = 1
        }


    }

    if (contrincante_muerto) {
        return false
        /*
        alert("Ganaste el combate\n" +
            bueno.get_nombre + "\n" +
            "Experiencia ganada " + contrincante.get_nivel + "\n")
        var sube_nivel = bueno.control_nivel(contrincante.get_nivel)
        if (sube_nivel) {

            vida_original = vida_original + 50
            ataque_original = ataque_original + 5
            bueno.set_vida = vida_original
            bueno.set_ataque = ataque_original

            alert(bueno.get_nombre + " sube de nivel\n" +
                "Experiencia actual " + bueno.get_xp + "\n" +
                "Nivel actual " + bueno.get_nivel + "\n" +
                "Vida actual " + bueno.get_vida + "\n" +
                "Ataque actual " + bueno.get_ataque + "\n")
               
         }*/

    } else if (bueno_muerto) {
        return true
        //alert("Perdiste el combate y tu " + bueno.get_nombre + " murió")
    }


}