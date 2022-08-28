const timer = document.querySelector('.timer');
let segundos = 0;
let time;

function createDate(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC'
    });
}

function startTime() {
    time = setInterval(() => {
        segundos++;
        timer.innerHTML = createDate(segundos);
    }, 1000);
}

document.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('start')) {
        startTime();
        timer.style.color = 'black';
    }
    if (element.classList.contains('pause')) {
        clearInterval(time);
        timer.style.color = 'red';
    }
    if (element.classList.contains('reset')) {
        clearInterval(time);
        segundos = 0;
        timer.innerHTML = createDate(segundos);
        timer.style.color = 'black';
    }
});


