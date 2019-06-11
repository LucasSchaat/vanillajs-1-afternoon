let progress = []
let board = []

function resetGame () {
    board = []
    progress = []
    for (let i=0; i<= 8; i++) {
        let reset = document.getElementById(i)
        reset.innerText = ''
    }
    document.getElementById('player').innerText = 'X'
}

function play(clickedId) {
    const playerSpan = document.getElementById('player')
    const choice = document.getElementById(clickedId)
    const check = document.getElementsByTagName('td')

    if (playerSpan.innerText === 'X' && choice.innerText === '') {
        choice.innerText = 'X'
        progress.splice(clickedId, 0, 'X')
        playerSpan.innerText = 'O'
        board.splice(clickedId,0,'X')
        
    } else if (choice.innerText === '') {
        choice.innerText = 'O'
        progress.splice(clickedId, 0, 'O')
        playerSpan.innerText = 'X'
        board.splice(clickedId,0,'O')
        
    }

    if (check[0].innerText === 'X' && check[1].innerText === 'X' && check[2].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[3].innerText === 'X' && check[4].innerText === 'X' && check[5].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[6].innerText === 'X' && check[7].innerText === 'X' && check[8].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[0].innerText === 'X' && check[3].innerText === 'X' && check[6].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[1].innerText === 'X' && check[4].innerText === 'X' && check[7].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[2].innerText === 'X' && check[5].innerText === 'X' && check[8].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[0].innerText === 'X' && check[4].innerText === 'X' && check[8].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[6].innerText === 'X' && check[4].innerText === 'X' && check[2].innerText === 'X') {
        alert ('Player X Wins!')
        resetGame ()
    } else if (check[0].innerText === 'O' && check[1].innerText === 'O' && check[2].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (check[3].innerText === 'O' && check[4].innerText === 'O' && check[5].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (check[6].innerText === 'O' && check[7].innerText === 'O' && check[8].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (check[0].innerText === 'O' && check[3].innerText === 'O' && check[6].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (check[1].innerText === 'O' && check[4].innerText === 'O' && check[7].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (check[2].innerText === 'O' && check[5].innerText === 'O' && check[8].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (check[0].innerText === 'O' && check[4].innerText === 'O' && check[8].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (check[6].innerText === 'O' && check[4].innerText === 'O' && check[2].innerText === 'O') {
        alert ('Player O Wins!')
        resetGame ()
    } else if (board.length >= 9) {
        alert (`Cat's Game!`)
        resetGame ()
    }   
}