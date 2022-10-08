
const timerContent = document.querySelector('[data-deadline]');

if(timerContent) {
    const promoTitle = document.createElement('p');
    promoTitle.classList.add('promo__title');
    promoTitle.textContent = "До конца акции:";
    const timer = document.createElement('div');
    timer.classList.add('timer');
    const arrElem = ['day__timer', 'hour__timer', 'minute__timer', 'second__timer'];
    arrElem.forEach((elem, i) => {
        let p = document.createElement('p');
        p.classList.add('banner__time-text');
        if(i === 3){
            p.classList.add('promo-hidden');
        }
        let span1 = document.createElement('span');
        span1.classList.add('banner__time_number',elem);
        let span2 = document.createElement('span');
        span2.classList.add('timer__words');
        p.append(span1, span2);
        timer.append(p);
    });

    timerContent.append(promoTitle, timer);
}