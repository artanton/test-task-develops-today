import HttpError from "../helpers/HttpError.js";

import axios from "axios";



export const listCountries = async() => {
  try {
    const res = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    return res.data;
  } catch (error) {
    throw HttpError(500,'database failed');
   
  }
};

export const findCountry = async ({countryCode, country }) =>{
  console.log(countryCode);
  try {
    const [
      countryInfoRes,
      populationRes,
      flagRes

    ] = await Promise.all([
      axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`),
      axios.post('https://countriesnow.space/api/v0.1/countries/population', {
        country: country, 
      }),
      axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
        iso2: countryCode, 
      }),
    ]);
    
    const response = {
      countryInfo: countryInfoRes?.data,
      population: populationRes?.data,
      flag: flagRes?.data,

    }
    return response;
   
  } catch (error) {
    throw HttpError(500,'database failed');
   
  }
}






