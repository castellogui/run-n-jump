const board = document.querySelector('.board-container')
const playBoard = document.querySelector('.board-play')
const playBoardOnly = document.querySelector('.board-only-play')

const firstPositionPlay = getComputedStyle(document.body).getPropertyValue("--first-point-p");
const thirdPositionPlay = getComputedStyle(document.body).getPropertyValue("--third-point-p");

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

    playBoard.style.animation = 'play-board-animation 300ms'
    playBoard.style.bottom = `${thirdPositionPlay}`

    playBoardOnly.style.animation = 'play-board-animation 300ms'
    playBoardOnly.style.bottom = `${thirdPositionPlay}`

}

const rideDownBoard = () => {
    board.style.animation = 'board-unselect-animation 300ms'
    board.style.bottom = `${firstPosition}`

    playBoard.style.animation = 'play-unselect-animation 300ms'
    playBoard.style.bottom = `${firstPositionPlay}`

    playBoardOnly.style.animation = 'play-unselect-animation 300ms'
    playBoardOnly.style.bottom = `${firstPositionPlay}`

}

const resolutionVerification = offsetTop => {
    return parsePosition(firstPosition) * -1 === offsetTop
}

const parsePosition = offsetTop => {
    return +offsetTop.replace('px', '')
}