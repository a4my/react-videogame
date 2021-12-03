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
            <button className="ratingBtn invisbleBtn">
              <i class="fas fa-gift"></i>
            </button>
            <button className="ratingBtn invisbleBtn">
              <i class="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        <div className="extensionCard"></div>
      </div>
    </div>
  )
}
