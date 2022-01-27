function heroe(aux_personaje) {
    class heroe extends aux_personaje {
        constructor(vida, ataque, nombre, nivel, experiencia) {
            super(vida, ataque, nombre, nivel)
            this.experiencia = experiencia

        }


        /*constructor(vida, ataque, nombre, nivel, experiencia) {
            this.vida = vida
            this.ataque = ataque
            this.nombre = nombre
            this.nivel = nivel
            
        }

        get get_vida() {
            return this.vida
        }
        get get_ataque() {
            return this.ataque
        }
        get get_nombre() {
            return this.nombre
        }
        get get_nivel() {
            return this.nivel
        }*/
        get get_xp() {
            return this.experiencia
        }

        /*set set_vida(aux_vida) {
            this.vida = aux_vida

        }
        set set_ataque(aux_ataque) {
            this.ataque = aux_ataque
        }
        set set_nombre(aux_nombre) {
            this.nombre = aux_nombre
        }
        set set_nivel(aux_nivel) {
            this.nivel = aux_nivel
        }*/
        set set_xp(aux_xp) {
            this.experiencia = aux_xp
        }

        /*damage_recibido(damage) {
            this.vida = this.vida - damage
            return this.vida
        }

        comprueba_muerto() {
            if (this.vida >= 0) {
                return true
            } else {
                return false
            }
        }*/

        control_nivel(valor) {
            this.experiencia = this.experiencia + valor
            if (this.experiencia >= 10) {
                this.nivel++
                var xp_sobrante = this.experiencia - 10
                this.experiencia = xp_sobrante
                return true
            } else {
                return false
            }
        }

        ataque_nivel() {
            ataque_nivel = this.ataque * this.nivel
            return ataque_nivel
        }

    }

    return heroe
}