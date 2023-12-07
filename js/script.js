const table = document.getElementById('table')
const roulette = document.getElementById('roulette')
const sortedNumber = document.getElementById('number')
    
// GENERATORE DI CELLE
    
const cellGen = function () {
    for (let i=0; i<90; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerHTML = `<span>${i+1}</span>`
        table.appendChild(cell)
    }
}

cellGen()

// GESTORE ROULETTE

roulette.addEventListener('submit', function(e) {
    e.preventDefault()
    const x = Math.floor(Math.random() * 91)
    const cells = document.getElementsByClassName('cell')
    sortedNumber.innerText = x
    cells[x-1].classList.add('sorted') 
})