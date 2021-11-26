import axios from 'axios';

const movieAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
});

const searchManyMovies = async (query) =>{
  const config = {
    params: {
      s: query.search,
      y: query.year,
      type: query.type
    }
  }
  return movieAxiosInstance.get('/',config)
  .then(response=>response.data)
  .catch(err=>{
    return {error:err}
  })
}


const apiServices = {
  searchManyMovies
};

export default apiServices;
