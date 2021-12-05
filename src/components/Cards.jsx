import React from 'react'

export default function Cards(props) {
  const { game } = props

  return (
    <div className="card-container">
      <div className="card-item">
        <img
          className="gameCoverImg"
          src={game.background_image}
          alt="Game Cover"
        />
        <div className="infoWrapper">
          <div className="infoContainer">
            <ul>
              <li>
                <i className="fab fa-playstation"></i>
              </li>
              <li>
                <i className="fab fa-xbox"></i>
              </li>
            </ul>
            <p>{game.metacritic}</p>
          </div>
          <h1 className="gameTitle">{game.name}</h1>
          <div className="ratingsContainer">
            <button className="ratingBtn">
              <i className="fas fa-plus"></i>
              <p>{game.ratings_count}</p>
            </button>
            <button className="ratingBtn">
              <i className="fas fa-gift"></i>
            </button>
            <button className="ratingBtn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        <div className="showMoreCard">
          <div className="detailsContainer">
            <p className="detailsKey">Release Date:</p>
            <p className="detailsValue">{game.released}</p>
          </div>
          <div className="detailsContainer">
            <p className="detailsKey">Genre:</p>
            <p className="detailsValue">
              {game.genres[0]?.name} {game.genres[1]?.name}{' '}
              {game.genres[2]?.name}
            </p>
          </div>
          <div className="detailsContainer">
            <p className="detailsKey">Our rating:</p>
            <p className="detailsValue">{game.rating}/5</p>
          </div>
          <button className="detailsBtn">
            <p>Show more like this</p>
            <i className="fas fa-chevron-right"></i>
          </button>
          <button className="detailsBtn">Hide this game</button>
        </div>
      </div>
    </div>
  )
}
