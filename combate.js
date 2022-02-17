function combate(evt, bueno, contrincante, vida_original, ataque_original, vida_contrincante, comb_boton_ataque, btn_siguiente) {
    var aux_bueno_muerto = false
    var aux_vida_enemigo = vida_contrincante



    $("#nivel_enemigo").html(contrincante.get_nivel)
    $("#salud_enemigo").html(contrincante.get_vida + "/" + aux_vida_enemigo)

    contrincante.damage_recibido(bueno.get_ataque)
    $("#salud_enemigo").html(contrincante.get_vida + "/" + aux_vida_enemigo)
    contrincante_muerto = contrincante.comprueba_muerto()

    if (contrincante_muerto) {
        comb_boton_ataque.disabled = true

        bueno = salida(evt, aux_bueno_muerto, contrincante_muerto, bueno, contrincante, vida_original, ataque_original, comb_boton_ataque)
        contrincante_muerto = false
        btn_siguiente.disabled = false

    } else {
        bueno.damage_recibido(contrincante.get_ataque)
        $("#salud_heroe").html(bueno.get_vida + "/" + vida_original)
        aux_bueno_muerto = bueno.comprueba_muerto()

    }
    return bueno
}