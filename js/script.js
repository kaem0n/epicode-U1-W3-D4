const table = document.getElementById('table')
const roulette = document.getElementById('roulette')
const playerGen = document.getElementById('playerGen')
const playerContainer = document.getElementById('playerContainer')
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

// GESTORE PLAYERS

let totalPTables = 0
playerGen.addEventListener('submit', function(e) {
    e.preventDefault()
    let n = 0
    const inputName = document.getElementById('playerName')
    const option0 = document.getElementById('null')
    const option1 = document.getElementById('one')
    const option2 = document.getElementById('two')
    const option3 = document.getElementById('three')
    const player = document.createElement('div')
    player.classList.add('player')
    if (option0.selected) {
        alert('NON HAI SELEZIONATO IL NUMERO DI TABELLINE!')
    } else if (option1.selected) {
        player.innerHTML = `<h3>${inputName.value}</h3>
        <div class="pTable"></div>
        `
        totalPTables += 1
        n += 1
    } else if (option2.selected) {
        player.innerHTML = `<h3>${inputName.value}</h3>
        <div class="pTable"></div>
        <div class="pTable"></div>
        `
        totalPTables += 2
        n += 2
    } else if (option3.selected) {
        player.innerHTML = `<h3>${inputName.value}</h3>
        <div class="pTable"></div>
        <div class="pTable"></div>
        <div class="pTable"></div>
        `
        totalPTables += 3
        n += 3
    }
    playerContainer.appendChild(player)
    inputName.value = ''
    
    const pTables = document.getElementsByClassName('pTable')
    for (let i=0; i<n; i++) {
        let counter = 90
        const moreNumbers = [...numbers]
        const currentPTable = pTables[(totalPTables-i)-1]
        for (let j=0; j<24; j++) {
            let x = Math.floor(Math.random() * counter)
            const cell = document.createElement('div')
            cell.classList.add('cell')
            cell.innerHTML = `<span>${moreNumbers[x]}</span>`
            currentPTable.appendChild(cell)
            moreNumbers.splice(moreNumbers.indexOf(parseInt(cell.innerText)), 1)
            counter -= 1
        }
    }
})

// GESTORE ROULETTE

roulette.addEventListener('submit', function(e) {
    e.preventDefault()
    const x = Math.floor(Math.random() * numbers.length)
    const cells = document.getElementsByClassName('cell')
    console.log(cells)
    sortedNumber.innerText = numbers[x]
    if (typeof numbers[x] === 'undefined') {
        sortedNumber.innerText = 'Hai finito i numeri!'
    }
    cells[numbers[x]-1].classList.add('sorted')
    numbers.splice(numbers.indexOf(numbers[x]), 1)
})
