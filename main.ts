let pieton = false
function éteindre_feux_rouge () {
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function eteindre_pieton_orange () {
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function eteindre_feux_jaune () {
    pins.digitalWritePin(DigitalPin.P1, 0)
}
function éteindre_pieton_blanc () {
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function pieton_orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
input.onButtonPressed(Button.A, function () {
    pieton = true
})
function pieton_blanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function eteindre_feux_vert () {
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function clignoter_pieton_orange () {
    for (let index = 0; index < 999; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
    }
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
basic.forever(function () {
    vert()
    if (pieton == true) {
        vert()
        basic.pause(2000)
        eteindre_feux_vert()
        jaune()
        basic.pause(2000)
        eteindre_feux_jaune()
        rouge()
        eteindre_pieton_orange()
        pieton_blanc()
        basic.pause(5000)
        basic.pause(5000)
        clignoter_pieton_orange()
        éteindre_pieton_blanc()
        pieton = false
        pieton_orange()
        éteindre_feux_rouge()
    }
})
basic.forever(function () {
    if (pieton == false) {
        pieton_orange()
    }
})
