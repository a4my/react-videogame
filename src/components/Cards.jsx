import React from 'react'

export default function Cards() {
  return (
    <div className="card-container">
      <div className="card-item">
        <img
          className="gameCoverImg"
          src="./../img/game-cover.jpg"
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
            <p>95</p>
          </div>
          <h1 className="gameTitle">Red Dead Redemption 2</h1>
          <div className="ratingsContainer">
            <button className="ratingBtn">
              <i className="fas fa-plus"></i>
              <p>2900</p>
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
            <p className="detailsValue">25 June, 2016</p>
          </div>
          <div className="detailsContainer">
            <p className="detailsKey">Genre:</p>
            <p className="detailsValue">AAA</p>
          </div>
          <div className="detailsContainer">
            <p className="detailsKey">Chart:</p>
            <p className="detailsValue">#1</p>
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
