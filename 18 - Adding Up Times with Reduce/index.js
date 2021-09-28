const timeNodes =  Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes.reduce((total, node) => {
     const timeNode = node.dataset.time;
     const [min, sec] = timeNode.split(':').map(parseFloat);
     const totalSeconds = (min * 60) + sec;
     return total + totalSeconds;
}, 0)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = seconds % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = seconds % 60;

console.log(hours, mins, secondsLeft)
