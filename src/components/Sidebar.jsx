import React from 'react'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebarItem">Home</h1>
      <h1 className="sidebarItem">Reviews</h1>
      <h1 className="sidebarItem">My Account</h1>
      <ul>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-gift"></i>
          </div>
          <p>Whishlist</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-layer-group"></i>
          </div>
          <p>My library</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-users"></i>
          </div>
          <p>People I follow</p>
        </li>
      </ul>
      <h1 className="sidebarItem">Top</h1>
      <ul>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-trophy"></i>
          </div>
          <p>Best of the year</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-chart-bar"></i>
          </div>
          <p>Popular in 2021</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-crown"></i>
          </div>
          <p>All time top 250</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-star"></i>
          </div>
          <p>Last 30 days</p>
        </li>
      </ul>
      <h1 className="sidebarItem">All Games</h1>
      <h1 className="sidebarItem">Platforms</h1>
      <ul>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fab fa-windows"></i>
          </div>
          <p>PC</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fab fa-playstation"></i>
          </div>
          <p>Playstation 4</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fab fa-xbox"></i>
          </div>
          <p>Xbone One</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-chevron-down"></i>
          </div>
          <p>Show all</p>
        </li>
      </ul>
      <h1 className="sidebarItem">Community</h1>
      <ul>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fab fa-twitch"></i>
          </div>
          <p>Twitch</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fab fa-reddit-alien"></i>
          </div>
          <p>Reddit</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fab fa-facebook-f"></i>
          </div>
          <p>Facebook</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fab fa-twitter"></i>
          </div>
          <p>Twitter</p>
        </li>
        <li className="listItem">
          <div className="listItemBtn">
            <i className="fas fa-chevron-down"></i>
          </div>
          <p>Show all</p>
        </li>
      </ul>
    </div>
  )
}
