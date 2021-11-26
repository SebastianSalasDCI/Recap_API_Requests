import React, { useEffect, useState } from 'react'
import moviesServices from '../../services/moviesServices';
import CardsContainer from './CardsContainer';
import SearchForm from './SearchForm';


export default function Landing() {

  const [search,setSearch] = useState('');
  const [type,setType] = useState('');
  const [year,setYear] = useState(2021);
  const [moviesData,setMoviesData] = useState([]);

  useEffect(async()=>{
    	moviesServices.searchMovies({search:'one',type,year}).then(data=>{setMoviesData(data.Search)})
  },[])

  return (
    <div>
      <SearchForm 
        search={search} onChangeSearch={(e)=>setSearch(e.target.value)} 
        type={type}  onChangeType={(e)=>setType(e.target.value)}
        year={year}  onChangeYear={(e)=>setYear(e.target.value)}
        onSubmit={(e)=>moviesServices.onSubmitHandler(search,type,year,setMoviesData,e)}
      />
      <CardsContainer moviesData={moviesData} />
    </div>
  )
}
