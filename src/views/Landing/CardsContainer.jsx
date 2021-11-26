import React from 'react'
import Card from '../../components/Card'

export default function CardsContainer({moviesData}) {
  return (
    <div className="cards-container" >
      {moviesData.map(item=><Card data={item} key={item.imdbID} />)}
    </div>
  )
}
