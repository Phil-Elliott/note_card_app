import React, { useState } from "react"
import CurrentCard from "./Components/CurrentCard"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const CardContainerRight = ({
  inputData,
  cardNumber,
  changeCard,
}: {
  inputData: any
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
          inputData={inputData}
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
