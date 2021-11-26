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

const SearchMovieInfo = ({imdbID,Type,Year},plot,setData) =>{
  apiServices.searchSingleMovie({id:imdbID, type:Type, year:Year, plot})
  .then(data=>{
    setData(data)
  })
}


const moviesServices = {
  searchMovies,
  onSubmitHandler,
  SearchMovieInfo
}


export default moviesServices;

