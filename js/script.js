const table = document.getElementById('table')
const roulette = document.getElementById('roulette')
const sortedNumber = document.getElementById('number')

const numbers = []

// GENERATORE DI CELLE

const cellGen = function () {
    for (let i=0; i<90; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerHTML = `<span>${i+1}</span>`
        table.appendChild(cell)
        
        numbers.push(i+1)
    }
}

cellGen()
console.log(numbers)


// GESTORE ROULETTE

roulette.addEventListener('submit', function(e) {
    e.preventDefault()
    const x = Math.floor(Math.random() * numbers.length)
    const cells = document.getElementsByClassName('cell')
    sortedNumber.innerText = numbers[x]
    if (typeof numbers[x] === 'undefined') {
        sortedNumber.innerText = 'Hai finito i numeri!'
    }
    cells[numbers[x]-1].classList.add('sorted')
    numbers.splice(numbers.indexOf(numbers[x]), 1)
    console.log('indice:', x, 'numbers[x]-1', numbers[x]-1, numbers)
})
