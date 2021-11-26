import React from 'react'

export default function Modal({singleMovieInfo,onClose}) {
  return (
    <div className="modal">
      <div className="modal-container">	
        <div class="modal-details">
          <h1>{singleMovieInfo.Title}</h1>
          <p class="information"> {singleMovieInfo.Plot} </p>
          <button class="btn" onClick={onClose} >Close</button>
        </div>
        <div class="modal-image">  
          <img src={singleMovieInfo.Poster} alt="" />
        </div>
      </div>  
    </div>
  )
}
