const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
     .then(resp => resp.json())
     .then(data => cities.push(...data))


function findMatches(wordToMatch, cities) {
     return cities.filter(place => {
          const regex = new RegExp(wordToMatch, 'gi');

          return place.city.match(regex) || place.state.match(regex)
     })
}

function numberWithDots(x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function displayMatches(e){
     e.preventDefault();
     const matchArray = findMatches(e.target.value, cities);
     const html = matchArray.map(place => {
          const regex = new RegExp(e.target.value, 'gi');
          const cityName = place.city.replace(regex, `<span class="hl">${e.target.value}</span>`);
          const stateName = place.state.replace(regex, `<span class="hl">${e.target.value}</span>`);
          return `
               <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithDots(place.population)}</span>
               </li>
          `
     }).join();

     suggestion.innerHTML = html;
} 

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions')
const searchForm = document.querySelector('.search-form')

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
searchForm.addEventListener('submit', e => e.preventDefault());