const input = document.getElementById('teamInput')
const addBtn = document.getElementById('addBtn')
const generateBtn = document.getElementById('generateBtn')

var teams = []

addBtn.addEventListener('click', () => {
    let teamName = input.value.trim()
    
    //caso exista um nome do campo input
    if(teamName) {
        teams.push(teamName)
        input.value = ''
    } else {
        alert('Digite o nome de um time')
    }

    console.log(teams)
})

generateBtn.addEventListener('click', () => {
    let numTeams = teams.length

    if(numTeams < 2) {
        alert('insira pelo menos 2 times')
    }

    let tabelaDiv = document.getElementById('tabela')
    tabelaDiv.innerHTML = ''

    let headerRow = tabelaDiv.insertRow(0)
    let headerCell = headerRow.insertCell(0)
    headerCell.textContent = 'Time'

    for(let i = 0; i < numTeams; i++) {
        let th = document.createElement('th')
        th.textContent = teams[i]
        headerRow.appendChild(th)
    }

    for(let i = 0 ; i < numTeams ; i++) {
        let row = tabelaDiv.insertRow(-1)
        let cell = row.insertCell(0)
        cell.textContent = teams[i]

        for(let j = 0 ; j < numTeams ; j++) {
            if(i === j) {
                cell = row.insertCell(-1)
                cell.textContent = ''
            } else {
                cell = row.insertCell(-1)
                cell.textContent = `${teams[i]} vs ${teams[j]}`
            }
        }
    }

})


