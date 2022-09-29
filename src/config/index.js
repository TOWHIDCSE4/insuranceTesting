import {PATH} from "./endpoint";

const configs = {
  APP_ENV: process.env.REACT_APP_ENV,
  API_DOMAIN: `${process.env.REACT_APP_API_DOMAIN}/${PATH}`
};

export default configs;
