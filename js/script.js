const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const restartButton = document.querySelector('.restart-button')


const mariojump = () => {
    console.log('pulou')
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
}

const restartPipeAnimation = () => {
    pipe.style.left = '500px'
    pipe.style.left = ''
    pipe.classList.add('running')
}

const restartMarioAnimation = () => {
    mario.src = '/mario game/images/mario.gif'
    mario.removeAttribute('style')
}

const restartClouds = () => {
    clouds.style.left = '550px'
    clouds.style.left = ''
    clouds.classList.add('cloud-scrolling')
}

const removeButton = () => {
    restartButton.style.display = 'none'
}


const verificationFunction = () => {
    const verificationEndGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const cloudPosition = clouds.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        console.log('fora')

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.classList.remove('running')
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`

            mario.src = '/mario game/images/game-over.png';
            mario.style.width = '50px'
            mario.style.height = '90px'
            mario.style.marginLeft = '70px';


            clouds.classList.remove('cloud-scrolling')
            clouds.style.left = `${cloudPosition}px`

            restartButton.style.display = 'inline';

            clearInterval(verificationEndGame)
            console.log('dentro')
        }
    })
}


document.addEventListener('keydown', mariojump)
verificationFunction();