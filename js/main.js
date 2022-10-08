'use strict';
if(timerContent){

const deadline = document.querySelector('.banner__header-timer').getAttribute('data-deadline');
const day = document.querySelector('.day__timer');
const hour = document.querySelector('.hour__timer');
const minute = document.querySelector('.minute__timer');
const second = document.querySelector('.second__timer');
const promo = document.querySelector('.banner__header-timer');

const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;

    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
    return {timeRemaining, days, hours, minutes, seconds}
}
const zero = (num) => {
    if (num < 10)
        return '0' + num;
    else return num;
}
const wordsTimer = (num, words) => {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}
const displayTimer = (timer) => {
    day.textContent = timer.days;
    hour.textContent = zero(timer.hours);
    minute.textContent = zero(timer.minutes);
    second.textContent = zero(timer.seconds);

    day.closest('.banner__time-text').querySelector('.timer__words').textContent = wordsTimer(timer.days, ['день', 'дня', 'дней']);
    hour.closest('.banner__time-text').querySelector('.timer__words').textContent = wordsTimer(timer.hours, ['час', 'часа', 'часов']);
    minute.closest('.banner__time-text').querySelector('.timer__words').textContent = wordsTimer(timer.minutes, ['минута', 'минуты', 'минут']);
    second.closest('.banner__time-text').querySelector('.timer__words').textContent = wordsTimer(timer.seconds, ['секунда', 'секунды', 'секунд']);
}
const start = () => {
    const timer = getTimeRemaining();

    if(timer.timeRemaining < 0){
        clearInterval(intervalTimer);

        promo.style.display = "none";

    } else {
        if( timer.days === 0){
            if(!day.closest('.banner__time-text').classList.contains('promo-hidden')){
                day.closest('.banner__time-text').classList.add('promo-hidden');
                second.closest('.banner__time-text').classList.remove('promo-hidden');
            }
        }
        else{

            if(!second.closest('.banner__time-text').classList.contains('promo-hidden')){
                day.closest('.banner__time-text').classList.remove('promo-hidden');
                second.closest('.banner__time-text').classList.add('promo-hidden');
            }
        }
        displayTimer(timer);
    }

}

    const intervalTimer = setInterval(start, 1000);
}