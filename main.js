const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(rawData => rawData.json())
    .then(data => cities.push(...data));

function findMatches(userSearch, cities) {
    return cities.filter(location => {
        const regex = new RegExp(userSearch, 'gi');
        return location.city.match(regex) || location.state.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray);
    if (matchArray.length < 20) {
        console.log('draw graph');
    }
}

const searchInput = document.querySelector('.search');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

