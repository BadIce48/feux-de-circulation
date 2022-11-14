pieton = False
def éteindre_feux_rouge():
    pins.digital_write_pin(DigitalPin.P2, 0)
def jaune():
    pins.digital_write_pin(DigitalPin.P1, 1)
def eteindre_pieton_orange():
    pins.digital_write_pin(DigitalPin.P8, 0)
def eteindre_feux_jaune():
    pins.digital_write_pin(DigitalPin.P1, 0)
def éteindre_pieton_blanc():
    pins.digital_write_pin(DigitalPin.P16, 0)
def pieton_orange():
    pins.digital_write_pin(DigitalPin.P8, 1)

def on_button_pressed_a():
    global pieton
    pieton = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def pieton_blanc():
    pins.digital_write_pin(DigitalPin.P16, 1)
def eteindre_feux_vert():
    pins.digital_write_pin(DigitalPin.P0, 0)
def clignoter_pieton_orange():
    for index in range(5):
        pins.digital_write_pin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P8, 0)
def rouge():
    pins.digital_write_pin(DigitalPin.P2, 1)
def vert():
    pins.digital_write_pin(DigitalPin.P0, 1)

def on_forever():
    global pieton
    vert()
    if pieton == True:
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
        clignoter_pieton_orange()
        basic.pause(5000)
        pieton_orange()
        éteindre_pieton_blanc()
        pieton = False
        éteindre_feux_rouge()
basic.forever(on_forever)

def on_forever2():
    if pieton == False:
        pieton_orange()
basic.forever(on_forever2)
