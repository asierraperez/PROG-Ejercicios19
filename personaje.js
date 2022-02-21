function personaje() {
    class personaje {
        constructor(vida, ataque, nombre, nivel, defensa, isDefendiendo) {
            this.vida = vida
            this.ataque = ataque
            this.nombre = nombre
            this.nivel = nivel
            this.defensa = defensa
            this.isDefendiendo = isDefendiendo
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
        }
        get get_defensa() {
            return this.defensa
        }
        get get_isDefendiendo() {
            return this.isDefendiendo
        }

        set set_vida(aux_vida) {
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
        }
        set set_defensa(aux_defensa) {
            this.defensa = aux_defensa
        }
        set set_isDefendiendo(aux_isDefendiendo) {
            this.isDefendiendo = aux_isDefendiendo
        }

        damage_recibido(damage) {
            if (this.isDefendiendo) {
                this.vida = this.vida - (damage - this.defensa)
            } else {
                this.vida = this.vida - damage
            }
            return this.vida
        }
        comprueba_muerto() {
            if (this.vida <= 0) {
                return true
            } else {
                return false
            }
        }

    }

    return personaje
}