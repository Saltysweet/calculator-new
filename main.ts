input.onButtonPressed(Button.A, function () {
    if (i == 0) {
        a += -1
        basic.showNumber(a)
    } else {
        if (i == 1) {
            b += -1
            basic.showNumber(b)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    i += 1
    if (i >= 2) {
        basic.showNumber(a + b)
    } else {
        basic.showNumber(0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (i == 0) {
        a += 1
        basic.showNumber(a)
    } else {
        if (i == 1) {
            b += 1
            basic.showNumber(b)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    i += 1
    if (i >= 2) {
        basic.showNumber(a - b)
    } else {
        basic.showNumber(0)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Duck)
    a = 0
    i = 0
    b = 0
})
let b = 0
let a = 0
let i = 0
i = 0
basic.showNumber(a)
a = 0
b = 0
