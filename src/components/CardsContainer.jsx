import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

export default function CardsContainer() {
  const [data, setData] = useState([])
  const [loadOnce, setLoadOnce] = useState(true)
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    if (loadOnce) {
      axios.get('https://api.rawg.io/api/games?key=' + apiKey).then(res => {
        setData(res.data.results)
        setLoadOnce(false)
      })
      console.log(data)
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
