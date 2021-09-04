import './sass/main.scss';

import refs from './js/refs';
import API from './js/fetchCountries';
import orderCountries from './templates/cardCountries';
import templateCardCountries from './templates/templateCountries';

import debounce from 'lodash.debounce';

import { error, notice } from '../node_modules/@pnotify/core/dist/PNotify.js';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function searchInput(e) {
  const searchQuery = e.target.value;
  refs.countriesMarkup.innerHTML = '';

  if (searchQuery.length < 1 && searchQuery === '') return;

  API.fetchCountries(searchQuery).then(dataPreview).catch(noticeInfo);
}

function dataPreview(countries) {
  if (countries.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 5000,
    });
  }

  if (countries.status === 404) {
    errorMessage('Nothing was found for your query!');
  }

  if (countries.length > 1 && countries.length < 10) {
    refs.countriesMarkup.innerHTML = orderCountries(countries);
  }

  if (countries.length === 1) {
    refs.countriesMarkup.innerHTML = templateCardCountries(...countries);
  }
}

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
