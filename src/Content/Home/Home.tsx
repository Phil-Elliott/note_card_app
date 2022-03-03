import React, { useState } from "react"
import CardDisplay from "./Components/CardDisplay"
import "./Home.scss"

const Home = ({ allCards }: { allCards: any }) => {
  const [cardsData, setCardsData] = useState<any>()
  const [cardDisplay, setCardDisplay] = useState<boolean>(false)

  const changeDisplay = (card: any) => {
    setCardsData(card)
    setCardDisplay(!cardDisplay)
  }

  return (
    <div className="home-container">
      {cardDisplay === false ? (
        <div className="home-main-display-container">
          {allCards.map((card: any) => {
            return (
              <div
                className="deck-title-display"
                onClick={() => changeDisplay(card)}
              >
                <h1>{card[0].title}</h1>
                <h2>{card[0].subject}</h2>
                <h3>{card[0].difficulty}</h3>
              </div>
            )
          })}
        </div>
      ) : (
        <CardDisplay />
      )}
    </div>
  )
}

export default Home

/*




    make a ternary to switch between map and other page 
    when item is clicked then the cards open up 

    make component that has 
      question on left 
      when done it goes to the right 
      maybe have a way to go back 
      could show the number of cards at the bottom 
        1/32

        take a shared component from the add folder


*/
