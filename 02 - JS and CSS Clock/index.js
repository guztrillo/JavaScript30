const secondHand = document.querySelector('.second-hand');

const minutesHand = document.querySelector('.min-hand');

const hoursHand = document.querySelector('.hour-hand');

const allHands = document.querySelectorAll('.hand');

const setDate = () => {
     const now = new Date();
     const seconds = now.getSeconds();
     const secondsDeg = ((seconds / 60) * 360 ) + 90;
     const minutes = now.getMinutes();
     const minutesDeg = ((minutes / 60) * 360 ) + 90;
     const hours = now.getHours();
     const hoursDeg = ((hours / 12) * 360 ) + 90;
     
     secondHand.style.transform = `rotate(${secondsDeg}deg)`;
     minutesHand.style.transform = `rotate(${minutesDeg}deg)`; 
     hoursHand.style.transform = `rotate(${hoursDeg}deg)`; 

     (secondsDeg === 90)
          ? allHands.forEach(hand => hand.style.transition = 'none')
          :
          allHands.forEach(hand => hand.style.transition = '')
     
}

setInterval(setDate, 1000);