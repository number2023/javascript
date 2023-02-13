var character = document.getElementById('character')
character.style.position = 'absolute'
character.style.left = 0
character.style.top = '100px'

var timer
const interval = 10
const step = 1 

const start = () => {
    console.log('Start')

    var count = 0
    var x = 0
    clearInterval(timer)
    timer = setInterval(function () {
        count++
        x = step * count
        character.style.left = x + 'px'
    }, interval)
}

const stop = () => {
    console.log('Stop')
    clearInterval(timer)
}

const showPlot = () => {
    var rect = character.getBoundingClientRect()
    console.log(rect)
    var message = "(" + rect.x + "," + rect.y + ")"
    document.getElementById("message").innerHTML = message
}