import React, { useEffect, useState } from 'react'
import Cards from './Cards'

export default function CardsContainer() {
  const [data, setData] = useState([])
  const [loadOnce, setLoadOnce] = useState(true)
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    if (loadOnce) {
      fetch('https://api.rawg.io/api/games?key=' + apiKey)
        .then(res => res.json())
        .then(data => {
          if (!data.errors) {
            setData(data.results)
            setLoadOnce(false)
          } else {
            setData([])
          }
        })
    }
  }, [apiKey, data, loadOnce])

  return (
    <div className="cardsContainer">
      {data.map(game => (
        <Cards game={game} key={game.id} />
      ))}
    </div>
  )
}
