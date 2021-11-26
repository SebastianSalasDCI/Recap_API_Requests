import React from 'react'

export default function Card({data}) {
  return (
    <div>
      <figure className="image-block" >
        <img src={data.Poster} alt={data.Title} />
        <figcaption>
          <h3> {data.Title} ({data.Year})</h3>
          <button>More info...</button>
        </figcaption>
      </figure>
    </div>
  )
}
