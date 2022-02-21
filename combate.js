function ataca_nordico(evt, h_atq_heroe, h_atq_enemigo, vida_contrincante) {
    var h_aux_heroe = h_atq_heroe
    var h_aux_enemigo = h_atq_enemigo

    h_aux_enemigo.damage_recibido(h_aux_heroe.get_ataque)
    $("#salud_enemigo").html(h_aux_enemigo.get_vida + "/" + vida_contrincante)

    return h_aux_enemigo
}

function ataca_enemigo(evt, e_atq_heroe, e_atq_enemigo, vida_heroe) {
    var e_aux_heroe = e_atq_heroe
    var e_aux_enemigo = e_atq_enemigo
    e_aux_heroe.damage_recibido(e_aux_enemigo.get_ataque)
    $("#salud_heroe").html(e_aux_heroe.get_vida + "/" + vida_heroe)

    return e_aux_heroe

}