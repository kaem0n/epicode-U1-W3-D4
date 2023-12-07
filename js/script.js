const table = document.getElementById('table')
const roulette = document.getElementById('roulette')
const sortedNumber = document.getElementById('number')

// GENERATORE DI NUMERI PER ROULETTE
// const numGen = function () {
//     const value = Math.floor(Math.random() * 91)
//     return value
// }
    
// GENERATORE DI CELLE E NUMERI
    
const cellGen = function () {
    for (let i=0; i<90; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.innerHTML = `<span>${i+1}</span>`
        table.appendChild(cell)

        
        roulette.addEventListener('submit', function(e) {
            e.preventDefault()
            const x = Math.floor(Math.random() * 91)
            const cells = document.getElementsByClassName('cell')
            sortedNumber.innerText = x
            if (i+1 === x) {
                cells[i].classList.add('sorted')
            }
        })
    }
}

cellGen()