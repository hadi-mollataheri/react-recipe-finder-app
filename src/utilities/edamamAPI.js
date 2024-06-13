// Fetching data from EDAMAM api

const baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public&beta=false&';
// const app_id = import.meta.env.VITE_APP_ID;
// const app_key = import.meta.env.VITE_APP_KEY;

// *** Notice ***
// DISCLAIMER: The API keys are exposed in this code for the purpose of this project demonstration
// And should not be used by in anyone else code.
// In a real-world application, such measures would not be taken due to security reasons.
const app_id = '06ca8288';
const app_key = 'd4af71c6fdc489fbc6132a2a4d72b3d7'

const getUrl = (query) => {
  const endpoint = `q=${query}&app_id=${app_id}&app_key=${app_key}`;
  const url = `${baseUrl}${endpoint}`;
  // console.log(url);
  return url;
};
export const fetchData = async (query) => {
  const url = getUrl(query);
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Request Failed');
  } catch (e) {
    console.log(e);
  }
};
