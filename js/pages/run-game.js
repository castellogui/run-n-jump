const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const restartButton = document.querySelector('.restart-button');
const text = document.querySelector('.text-end-game');
const scoreText = document.querySelector('.score');
var score;
var running = true;


const mariojump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const restartGame = () => {
    restartPipeAnimation();
    restartMarioAnimation();
    restartClouds();
    removeButton();
    verificationFunction();
    running = false;
}

const restartPipeAnimation = () => {
    pipe.style.left = '500px'
    pipe.style.left = ''
    pipe.classList.add('running')
}

const restartMarioAnimation = () => {
    mario.src = '/images/mario.gif'
    mario.removeAttribute('style')
}

const restartClouds = () => {
    clouds.style.left = '550px'
    clouds.style.left = ''
    clouds.classList.add('cloud-scrolling')
}

const removeButton = () => {
    restartButton.style.display = 'none'
    text.style.display = 'none'
}


const verificationFunction = () => {
    const verificationEndGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const cloudPosition = clouds.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.classList.remove('running')
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`

            mario.src = '/images/game-over.png';
            mario.style.width = '50px'
            mario.style.height = '80px'
            mario.style.marginLeft = '70px';

            clouds.classList.remove('cloud-scrolling')
            clouds.style.left = `${cloudPosition}px`

            restartButton.style.display = 'inline';
            text.style.display = 'inline';

            running = false;

            clearInterval(verificationEndGame)
        }

        //fazer a adicao de pontuacao
        if (pipePosition < 50) {
            console.log('pontuou')
        }
    })
}


document.addEventListener('keypress', mariojump)
verificationFunction();