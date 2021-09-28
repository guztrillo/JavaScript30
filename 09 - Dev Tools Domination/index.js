const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular

console.log('hello');

// Interpolated

console.log('Hello I\'m %s sring', 'father');

// Styled
console.log('%c Great font', 'font-size: 50px')

// warning!

console.warn('yeap');

// Error :|

console.error('ups');

// Info

console.info('breaking news');

// Testing

console.assert(1 !== 1, 'yep, it\'s false')

// clearing

// console.clear()

// Viewing DOM Elements

const p = document.querySelector('p');

console.dir(p);

// Grouping together

dogs.forEach(dog => {
     console.groupCollapsed(`${dog.name}`);
     // console.group(`${dog.name}`);
     console.log(`This is ${dog.name}`);
     console.log(`${dog.name} is ${dog.age} years old`);
     console.log(`${dog.name} is ${dog.age * 7} dog years old`);
     console.groupEnd(`${dog.name}`);
})

// counting

console.count('Calor');
console.count('Calor')
console.count('Juan')
console.count('Calor')
console.count('Juan')
console.count('Calor')

// timing

console.time('fetch time');

fetch('https://api.github.com/users/wesbos')
     .then(resp => resp.json())
     .then(resp => {
          console.timeEnd('fetch time');
          console.log(resp);
     })

console.table(dogs);