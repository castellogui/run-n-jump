const board = document.querySelector('.board-container')

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});



const rideBoard = () => {
    console.log(board.offsetBottom);
    if (board.offsetTop === -90) {
        rideUpBoard();
    } else {
        rideDownBoard();
    }
}

const rideUpBoard = () => {
    board.style.animation = 'board-select-animation 300ms'
    board.style.bottom = '295px'
}

const rideDownBoard = () => {
    board.style.animation = 'board-unselect-animation 300ms'
    board.style.bottom = '90px'
}