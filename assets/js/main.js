const cronometro = document.querySelector('.cronometro');
let intervalo;
let segundos = 0;

document.addEventListener('click', e => {
    const el = e.target;
    const mostraApaga = new IniciaCronometro();
    
    if (el.classList.contains('play')) {
        clearInterval(intervalo);
        mostraApaga.mostra();
        mostraApaga.playCronometro();
    }
    if (el.classList.contains('pause')) {
        cronometro.classList.add('bad');
        clearInterval(intervalo);
    }

    if (el.classList.contains('zerar')) {
        mostraApaga.clearButton();
        clearInterval(intervalo);
    }
});

function IniciaCronometro() {
    this.imgPause = document.querySelector('.img-pause');
    this.imgZerar = document.querySelector('.img-zerar');
    this.pause = document.querySelector('.pause');
    this.zerar = document.querySelector('.zerar');
    
    this.mostra = () => {
        setTimeout(() => {
            this.imgPause.style.opacity = '100%'
            this.imgZerar.style.opacity = '100%';
            cronometro.classList.remove('bad');
            this.pause.disabled = false;
            this.zerar.disabled = false;
        }, 500)
    };
    
    this.clearButton = () => {
        setTimeout(() => {
            this.imgPause.style.opacity = '50%'
            this.imgZerar.style.opacity = '50%';
            cronometro.innerHTML = '00:00:00';
            cronometro.classList.remove('bad');
            segundos = 0;

            this.pause.disabled = true;
            this.zerar.disabled = true;
        }, 100);
    }

    this.mostrTimer = segundos => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        });
    };

    this.playCronometro = () => {
        intervalo = setInterval(() => {
            segundos++;
            cronometro.innerHTML = this.mostrTimer(segundos);
        }, 1000);
    };
}

(function redes() {
    const esquerda = document.querySelector('.esquerda');
    const img = document.querySelector('.imagens');

    esquerda.addEventListener('mouseover', function() {
        img.style.display = 'block';
    });

    esquerda.addEventListener('mouseout', function() { 
        img.style.display = 'none';
    });
})();
