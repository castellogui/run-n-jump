const board = document.querySelector('.board-container')
const firstPosition = getComputedStyle(document.body).getPropertyValue("--first-point-a");
const thirdPosition = getComputedStyle(document.body).getPropertyValue("--third-point-a");

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

const rideBoard = () => {
    let offsetTop = board.offsetTop;
    if (resolutionVerification(offsetTop)) {
        rideUpBoard(offsetTop);
    } else {
        rideDownBoard(offsetTop);
    }
}

const rideUpBoard = (offsetTop) => {
    board.style.animation = 'board-select-animation 300ms'
    board.style.bottom = `${thirdPosition}`
}

const rideDownBoard = () => {
    board.style.animation = 'board-unselect-animation 300ms'
    board.style.bottom = `${firstPosition}`
}

const resolutionVerification = offsetTop => {
    return parsePosition(firstPosition) * -1 === offsetTop
}

const parsePosition = offsetTop => {
    return +offsetTop.replace('px', '')
}