let secondsElapsed = 0
let interval = null
const time = document.getElementById('stopWatch')

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60

    time.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }


function timer() {
    secondsElapsed++
    setTime()
    }

function startStopWatch() {
    if (interval) stopStopWatch()
    interval = setInterval(timer, 1000)
    }

function stopStopWatch() {
    clearInterval(interval)
    }

function resetStopWatch() {
    stopStopWatch()
    secondsElapsed = 0
    setTime()
    }
