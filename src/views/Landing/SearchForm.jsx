import React from 'react'

export default function SearchForm(props) {
  return (
    <form className="form-container" onSubmit={props.onSubmit}>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" placeholder="example: Dune: part one"
        value={props.search} onChange={props.onChangeSearch}
      />

      <div>
        <label htmlFor="movie">Movie</label>
        <input type="radio" name="type" id="movie" 
          checked={props.type === "movie"}
          value = "movie"
          onChange={props.onChangeType}
        />

        <label htmlFor="series">Series</label>
        <input type="radio" name="type" id="series" 
          checked={props.type === "series"}
          value = "series"
          onChange={props.onChangeType}
        />

        <label htmlFor="episode">Episode</label>
        <input type="radio" name="type" id="episode" 
          checked={props.type === "episode"}
          value = "episode"
          onChange={props.onChangeType}
        />
      </div>

      <label htmlFor="year">Year</label>
      <input type="number" id="year" placeholder="example: 2021"
        value={props.year} onChange={props.onChangeYear}
      />

      <button type="submit">Submit</button>

    </form>
  )
}
