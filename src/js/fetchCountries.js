const BASE_URL = function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/{searchQuery}?fields={field};{field};{field}
https://restcountries.eu/rest/v2/all?fields=name;capital;currencies
`)
    .then(response => response.json())
    .catch(err => console.log(err));
};
export default { fetchCountries };
