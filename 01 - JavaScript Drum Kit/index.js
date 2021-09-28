function playsound ({key}) {
     let letter = key.toLowerCase();
     const audio = document.querySelector(`audio[data-key='${letter}']`);
     const keyDiv  = document.querySelector(`.key[data-key='${letter}']`);
     if( !audio ) { return; }
     audio.currentTime = 0;
     audio.play();
     keyDiv.classList.toggle('playing');
}

function removeTransition (e) {
     if (e.propertyName !== 'transform') {return;}
     this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
     key.addEventListener('transitionend', removeTransition);
     key.addEventListener('transitioncancel', removeTransition);
});

window.addEventListener('keydown', playsound)