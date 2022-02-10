function combate(bueno, contrincante, vida_original) {
    //var ultimo_turno = 0
    var bueno_muerto = false
    var aux_bueno_muerto = false
    var aux_vida_enemigo = contrincante.get_vida
    var nombre_enemigo = document.getElementById("nombre_enemigo")
    nombre_enemigo.innerHTML = contrincante.get_nombre
    alert("Te encontraste con un " + contrincante.get_nombre + "\nEmpieza el combate\n" +
        contrincante.get_nombre + "  " + contrincante.get_vida + " HP\n" +
        bueno.get_nombre + "  " + bueno.get_vida + " HP\n")



    //while (!contrincante_muerto && !bueno_muerto) {

    $("#nivel_enemigo").html(contrincante.nivel)
    $("#salud_enemigo").html(contrincante.vida + "/" + aux_vida_enemigo)

    //if (ultimo_turno == 0 | ultimo_turno == 1) {

    var boton_ataque = document.getElementById("btn_ataque")
    bueno_muerto = boton_ataque.addEventListener("click", () => {
        contrincante.damage_recibido(bueno.ataque)
        $("#salud_enemigo").html(contrincante.vida + "/" + aux_vida_enemigo)
        contrincante_muerto = contrincante.comprueba_muerto()
        //alert(contrincante.get_nombre + "  " + contrincante.get_vida + " HP\n" +
        //    bueno.get_nombre + "  " + bueno.get_vida + " HP\n")



        bueno.damage_recibido(contrincante.get_ataque)
        $("#salud_heroe").html(bueno.vida + "/" + vida_original)
        aux_bueno_muerto = bueno.comprueba_muerto()
        //alert(contrincante.get_nombre + "  " + contrincante.get_vida + " HP\n" +
        //    bueno.get_nombre + "  " + bueno.get_vida + " HP\n")


        if (aux_bueno_muerto) {
            return true
            //alert("Perdiste el combate y tu " + bueno.get_nombre + " murió")
        } else {
            return false
        }

        //ultimo_turno = 1

    })


    //if (contrincante_muerto) {
    //    ultimo_turno = 0
    //}
    //ultimo_turno = -1

    //} else if (ultimo_turno == -1) {

    //}


    //}


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




}