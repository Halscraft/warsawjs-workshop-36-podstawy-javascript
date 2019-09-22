//Zmiana nagłówka
// document.getElementsByClassName(sandbox);
//Ćwiczenie 1 DOM
// var h4 = document.querySelector('h4')
// const text = document.createElement('span')
// text.textContent = "Header H4"
// h4.appendChild(text);



//Ćwiczenie 2 DOM

const main = document.querySelector('.main');
const cheesboard = document.createElement('section');
cheesboard.classList.add('chessboard')
main.appendChild(cheesboard);

const board = document.querySelector('.chessboard')

for (let index = 0; index < 64; index++) {
    board.appendChild(document.createElement('div'))
}

