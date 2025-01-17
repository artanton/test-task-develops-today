import HttpError from "../helpers/HttpError.js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const {
  COUNTRY_LIST_URL,
  COUNTRY_INFO_URL,
  COUNTRY_POPULATION_URL,
  COUNTRY_FLAG_URL,
} = process.env;

export const listCountries = async () => {
  try {
    const res = await axios.get(COUNTRY_LIST_URL);
    return res.data;
  } catch (error) {
    throw HttpError(500, "database failed");
  }
};

export const findCountry = async ({ countryCode, country }) => {
  console.log(countryCode);
  try {
    const [countryInfoRes, populationRes, flagRes] = await Promise.all([
      axios.get(`${COUNTRY_INFO_URL}/${countryCode}`),
      axios.post(COUNTRY_POPULATION_URL, {
        country: country,
      }),
      axios.post(COUNTRY_FLAG_URL, {
        iso2: countryCode,
      }),
    ]);

    const response = {
      countryInfo: countryInfoRes?.data,
      population: populationRes?.data,
      flag: flagRes?.data,
    };
    return response;
  } catch (error) {
    throw HttpError(500, "database failed");
  }
};
