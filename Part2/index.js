const inputId = document.getElementById('inputId')
const inputStyle = document.getElementById('inputStyle')

function setCard () {
    const card = document.getElementById(inputId.value)
    if(inputId.value === 'hearts' && inputStyle.value === 'red') {
        card.style.color = inputStyle.value
    } else if (inputId.value === 'diamonds' && inputStyle.value === 'red') {
        card.style.color = inputStyle.value
    } else if (inputId.value === 'clubs' && inputStyle.value === 'black') {
        card.style.color = inputStyle.value
    } else if (inputId.value === 'spades' && inputStyle.value === 'black') {
        card.style.color = inputStyle.value
    } else {
        alert ('Invalid card & color pairing!')
    }
}

function reset () {
    let colorReset = document.getElementsByTagName('section')
    for (i=0; i<colorReset.length; i++) {
        colorReset[i].style.color = "grey"
    }
}