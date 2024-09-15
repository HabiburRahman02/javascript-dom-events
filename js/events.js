// option: 01
//  <button onclick="console.log('direct click')">Click Karo</button>

// option: 02
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// option: 03
const makeGreen = document.getElementById('make-green')
makeGreen.onclick = greenColor

function greenColor() {
    document.body.style.backgroundColor = 'green';
}

// option: 03 another
const makePink = document.getElementById('make-pink')
makePink.onclick = function () {
    document.body.style.backgroundColor = 'pink'
}

// option: 04
const makeSalmon = document.getElementById('make-salmon');
makeSalmon.addEventListener('click', salmonBg)

function salmonBg() {
    document.body.style.backgroundColor = 'salmon';
}

// option: 04 another
const makeAmber = document.getElementById('make-amber')
makeAmber.addEventListener('click', function () {
    document.body.style.backgroundColor = 'aqua'
})


// option: 04  [Final]
document.getElementById('make-yellow').addEventListener('click', function () {
document.body.style.backgroundColor = 'yellow'
})