import './sass/main.scss';

import refs from './js/refs';
import API from './js/fetchCountries';
import orderCardCountries from './templates/cardCountries.hbs';
import templateCardCountry from './templates/templateCountry.hbs';

import debounce from 'lodash.debounce';

import { error, notice } from '../node_modules/@pnotify/core/dist/PNotify.js';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

// alert({
//   text: 'Notice me, senpai!',
// });

function searchInput(e) {
  const searchQuery = e.target.value;
  // refs.countriesMarkup.innerHTML = '';

  if (searchQuery.length < 1 && searchQuery === ' ' && searchQuery === '.') return;

  API.fetchCountries(searchQuery).then(dataShow).catch(noticeInfo);
}

const dataShow = country => {
  if (country.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 5000,
    });
  }

  if (1 < country.length < 10) {
    refs.countriesMarkup.innerHTML = templateCardCountry(country);
  }

  if (country.status === 404) {
    errorMessage('Nothing was found for your query!');
  }

  if (country.length === 1) {
    refs.countriesMarkup.innerHTML = orderCardCountries(...country);
  }
};

function errorMessage(message) {
  error({
    title: `${message}`,
    delay: 2000,
  });
}

const noticeInfo = () => {
  notice({
    text: 'Ivalid entered value',
    delay: 2000,
  });
};

refs.search.addEventListener('input', debounce(searchInput, 500));
