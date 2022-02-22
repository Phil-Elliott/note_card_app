import React, { useState } from "react"
import CurrentCard from "./Components/CurrentCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const CardContainerRight = ({
  inputData,
  cards,
  cardNumber,
  changeCard,
}: {
  inputData: any
  cards: any
  cardNumber: number
  changeCard: any
}) => {
  const [flipCard, setFlipCard] = useState<boolean>(false)

  const flipTheCard = () => {
    setFlipCard(!flipCard)
  }

  return (
    <div className="add-card-right-main">
      <FaChevronLeft
        className="add-card-arrow"
        onClick={() => changeCard("left")}
      />
      <div className="add-card-right">
        <CurrentCard
          inputData={cards[cardNumber - 1] ? cards[cardNumber - 1] : inputData}
          flipCard={flipCard}
          flipTheCard={flipTheCard}
          cardNumber={cardNumber}
        />
      </div>
      <FaChevronRight
        className="add-card-arrow"
        onClick={() => changeCard("right")}
      />
    </div>
  )
}

export default CardContainerRight

/*
  -need an edit button 
    1) add button (when cards.length = number-1 or less than)
            or
       Have the left side go back to that data and update it with what is typed
       Show the current value and update as you type
       Goes back to blank once the user goes to current card
    2) Would need to change the bottom right button to update if it is on an    old card 

    3) Get rid of back button 
          add arrow on left to go back to title 
          add check on right to finish 

*/
