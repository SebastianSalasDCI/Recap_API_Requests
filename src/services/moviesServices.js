import apiServices from "./apiServices";

const searchMovies = (query) => {
  return apiServices.searchManyMovies(query)
}

const onSubmitHandler = async (search,type,year,setMoviesData,e) => {
  e.preventDefault();
  const query = {
    search,
    type,
    year
  }
  searchMovies(query)
  .then(data=>{
    if(data.error){
      console.log("There is an error: ",data.error)
    }else {
      setMoviesData(data.Search)
    }
  })
}

const moviesServices = {
  searchMovies,
  onSubmitHandler
}


export default moviesServices;

