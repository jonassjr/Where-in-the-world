export async function fetchCountries(region: string) {
  let url = 'https://restcountries.com/v3.1/all';

  if (region !==  undefined && 'all') {
    url = `https://restcountries.com/v3.1/region/${region}`;
  }

  const response = await fetch(url);
  const result = await response.json();
  return result;
}


export const UpdateSearchParams = (value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  
  searchParams.set('region', value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    
  return newPathName
};


export async function fetchCountryByCode(code: string) {

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)

  const countryData = await response.json()

  return countryData
  
}