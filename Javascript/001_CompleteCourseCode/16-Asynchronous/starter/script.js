'use strict';

const btn = document.querySelector('.btn-country');
const imagesContainer = document.querySelector('.images');

/*
const countriesContainer = document.querySelector('.countries');

const renderCountry = (data, className = '') => {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data?.name?.common}</h3>
        <h4 class="country__region">${data?.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getJSON = url =>
  fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('custom error');
    }
    return response.json();
  });

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data, ' in .then bingo');
      renderCountry(data[0]);
      console.log(data, ' in .then doflamingo');
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(console.error)
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitude, longitude } = pos.coords;
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
    })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('not found country');
      }
      return response.json();
    })
    .then(data => {
      const {
        address: { country },
      } = data;
      getCountryData(country);
    })
    .catch(error => {
      console.log(error, ' error while reverse geocoding');
    });
}

btn.addEventListener('click', function () {
  whereAmI();
});

*/

let imageElementToHide;

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const createImage = imgPath =>
  new Promise((resolve, reject) => {
    const imageElement = document.createElement('img');
    imageElement.src = imgPath;
    imageElement.addEventListener('load', () => {
      imagesContainer.append(imageElement);
      resolve(imageElement);
    });
    imageElement.addEventListener('error', () =>
      reject(new Error('Image not found'))
    );
  });

btn.addEventListener('click', function () {
  createImage('./img/img-1.jpg')
    .then(element => {
      imageElementToHide = element;
      return wait(2);
    })
    .then(() => {
      imageElementToHide.style.width = '200px';
      return createImage('img/img-2.jpg');
    })
    .then(element => {
      imageElementToHide = element;
      return wait(2);
    })
    .then(() => {
      imageElementToHide.style.width = '200px';
    })
    .catch(console.error);
});
