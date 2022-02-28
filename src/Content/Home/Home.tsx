import React from "react"
import "./Home.scss"

const Home = ({ allCards }: { allCards: any }) => {
  return (
    <div className="home-container">
      {allCards.map((card: any) => {
        return (
          <div className="deck-title-display">
            <h1>{card[0].title}</h1>
            <h2>{card[0].subject}</h2>
            <h3>{card[0].difficulty}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Home
