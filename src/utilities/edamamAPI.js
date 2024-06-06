// Fetching data from EDAMAM api

const baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public&beta=false&';

const query = 'egg';

const app_id = import.meta.env.VITE_APP_ID;
const app_key = import.meta.env.VITE_APP_KEY;

const endpoint = `q=${query}&app_id=${app_id}&app_key=${app_key}`;

const url = `${baseUrl}${endpoint}`;


console.log(url);








