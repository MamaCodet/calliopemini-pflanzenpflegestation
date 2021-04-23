let temperatur = 0
let licht = 0
let feuchtigkeit = 0
basic.forever(function () {
    temperatur = input.temperature()
    licht = input.lightLevel()
    feuchtigkeit = pins.analogReadPin(AnalogPin.C16)
    if (temperatur < 20) {
        basic.setLedColor(0x0000ff)
    } else {
        basic.setLedColor(0x00ff00)
    }
    if (feuchtigkeit < 200) {
        music.playMelody("G E G E G E G E ", 80)
    } else if (feuchtigkeit > 600) {
        music.playMelody("A - A - A - A - ", 80)
    }
    if (licht < 50) {
        basic.showIcon(IconNames.ArrowSouth)
    } else if (licht > 120) {
        basic.showIcon(IconNames.ArrowNorth)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
