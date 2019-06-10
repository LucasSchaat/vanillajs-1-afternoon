console.log ('Hello world')

let progress = []
let board = []

function play(clickedId) {
    const playerSpan = document.getElementById('player')
    const choice = document.getElementById(clickedId)
    const check = document.getElementsByTagName('td')

    if (playerSpan.innerText === 'X') {
        choice.innerText = 'X'
        progress.splice(clickedId, 0, 'X')
        playerSpan.innerText = 'O'
        board.splice(clickedId,0,'X')
        
    } else {
        choice.innerText = 'O'
        progress.splice(clickedId, 0, 'O')
        playerSpan.innerText = 'X'
        board.splice(clickedId,0,'O')
        
    }

    if (check[0].innerText === 'X' && check[1].innerText === 'X' && check[2].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[3].innerText === 'X' && check[4].innerText === 'X' && check[5].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[6].innerText === 'X' && check[7].innerText === 'X' && check[8].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[0].innerText === 'X' && check[3].innerText === 'X' && check[6].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[1].innerText === 'X' && check[4].innerText === 'X' && check[7].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[2].innerText === 'X' && check[5].innerText === 'X' && check[8].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[0].innerText === 'X' && check[4].innerText === 'X' && check[8].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[6].innerText === 'X' && check[4].innerText === 'X' && check[2].innerText === 'X') {
        return alert ('Player X Wins!')
    } else if (check[0].innerText === 'O' && check[1].innerText === 'O' && check[2].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (check[3].innerText === 'O' && check[4].innerText === 'O' && check[5].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (check[6].innerText === 'O' && check[7].innerText === 'O' && check[8].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (check[0].innerText === 'O' && check[3].innerText === 'O' && check[6].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (check[1].innerText === 'O' && check[4].innerText === 'O' && check[7].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (check[2].innerText === 'O' && check[5].innerText === 'O' && check[8].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (check[0].innerText === 'O' && check[4].innerText === 'O' && check[8].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (check[6].innerText === 'O' && check[4].innerText === 'O' && check[2].innerText === 'O') {
        return alert ('Player O Wins!')
    } else if (progress.length >= 9) {
        return alert (`Cat's Game!`)
    }
}