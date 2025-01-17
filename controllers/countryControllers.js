import * as countryService from "../services/countryServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getAllCountries = async (req, res) => {
  const result = await countryService.listCountries();
  res.json(result);
};

const getCountry = async (req, res) => {
  const { countryCode, country } = req.query;
  if (!countryCode || !country) {
    throw HttpError(400, "Bad Request");
  }
  const result = await countryService.findCountry({ countryCode, country });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export default {
  getAllCountries: ctrlWrapper(getAllCountries),
  getCountry: ctrlWrapper(getCountry),
};
