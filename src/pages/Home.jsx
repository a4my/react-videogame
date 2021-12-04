import React from 'react'
import CardsContainer from '../components/CardsContainer.jsx'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Sidebar />
        <CardsContainer />
      </div>
    </>
  )
}
