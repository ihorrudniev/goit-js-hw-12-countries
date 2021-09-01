// const BASE_URL = 'https://restcountries.eu/rest/v2';

// const fetchCountries = searchQuery => {
//   return fetch(`${BASE_URL}/name/${searchQuery}`).then(response => response.json());
// };

// export default { fetchCountries };

//  vlad

function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/{searchQuery}? fields={field};{field};{field}
https://restcountries.eu/rest/v2/all?fields=name;capital;currencies
`);
}
