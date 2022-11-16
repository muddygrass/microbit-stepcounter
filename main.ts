input.onButtonPressed(Button.A, function () {
    Counter = 0
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    Counter += -1
})
input.onGesture(Gesture.Shake, function () {
    Counter += 1
    basic.showNumber(Counter)
})
let Counter = 0
Counter = 0
basic.forever(function () {
    basic.showNumber(Counter)
})
