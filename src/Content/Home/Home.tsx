import React from "react"
import "./Home.scss"

const Home = ({ allCards }: { allCards: any }) => {
  return (
    <div>
      <h1>{allCards[0] ? allCards[0][0].title : "No Cards"}</h1>
    </div>
  )
}

export default Home
