function openMouth () {
    while (angle <= 145) {
        angle += 5
        pins.servoWritePin(AnalogPin.P2, angle)
        basic.pause(500)
    }
}
function closeMouth () {
    while (angle >= 115) {
        angle += -5
        pins.servoWritePin(AnalogPin.P2, angle)
        basic.pause(500)
    }
}
let angle = 0
angle = 115
pins.servoWritePin(AnalogPin.P2, angle)
basic.forever(function () {
    openMouth()
    basic.pause(2000)
    closeMouth()
    basic.pause(2000)
})
