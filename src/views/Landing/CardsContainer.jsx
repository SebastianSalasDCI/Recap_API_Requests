import React from 'react'
import Card from '../../components/Card'

export default function CardsContainer({moviesData,onClick}) {
  return (
    <div className="cards-container" >
      {moviesData.map(item=><Card data={item} onClick={onClick} key={item.imdbID} />)}
    </div>
  )
}
