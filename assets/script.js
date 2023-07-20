import myJson from './data/data.json' assert {type: 'json'};


const dailyMessage = document.querySelector('.daily-message__text')

if (dailyMessage) {
    const getCurrentDayMonth = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = months[now.getMonth()];

    return `${day}-${month}`;
    }

    for (const message of myJson.messages) {
        if (message.day == getCurrentDayMonth()) {
            dailyMessage.innerHTML = message.message;
            break;
        } else{
            dailyMessage.innerHTML = 'Quando começar logo vês!';
        }
    }
}

// Exit Intro

const btnExitIntro = document.querySelector('.js-exitIntro');

if (btnExitIntro) {
    const btnImg = btnExitIntro.querySelector('.cta-img')

    btnExitIntro.closest('main').style.overflow = 'hidden';
    btnExitIntro.closest('main').style.height = '100vh';

    const imgIn = btnImg.dataset.src
    const imgOut = btnImg.src

    btnExitIntro.addEventListener('mouseenter', (e)=> {
        btnImg.src = imgIn
    })

    btnExitIntro.addEventListener('mouseleave', (e)=> {
        btnImg.src = imgOut
    })

    btnExitIntro.addEventListener('click', (e) => {
        const el = e.currentTarget
        const introWrapper = el.closest('section')
        const backgroundWrapper = document.querySelector('.background-wrapper')
        document.body.classList.add('go-forward')

        setTimeout(() => {
            window.location = '/kelha/content.html'
        }, 5000);
    })
}

// --------------




const allAudios = document.querySelectorAll('.audio-item');

allAudios.forEach(audio => {

    const audioPic = audio.querySelector('figcaption img')

    if (audioPic) {
        const imgIn = audioPic.dataset.src
        const imgOut = audioPic.src

        audio.addEventListener('mouseenter', (e)=> {
            audioPic.src = imgIn
        })

        audio.addEventListener('mouseleave', (e)=> {
            audioPic.src = imgOut
        })


        audio.addEventListener('click',(e) => {
            const target = e.currentTarget
            const currentAudio = target.querySelector('audio')

            allAudios.forEach(el => {
                el.querySelector('audio').pause()
                el.querySelector('audio').currentTime = 0
                el.classList.remove('moving')
            })
            currentAudio.play()
            target.classList.add('moving')
            currentAudio.onpause = () =>  target.classList.remove('moving')
        })
    }
})
