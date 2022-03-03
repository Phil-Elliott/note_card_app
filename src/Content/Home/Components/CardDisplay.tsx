import React, { useState } from "react"
import "./CardDisplay.scss"
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa"

const CardDisplay = () => {
  const [flipCard, setFlipCard] = useState<boolean>(false)

  const flipTheCard = () => {
    setFlipCard(!flipCard)
  }

  return (
    <div className="card-display-main-container">
      <div className="card-display-container">
        <FaChevronLeft
          className="add-card-arrow"
          // onClick={() => changeCard("left")}
        />
        <div className="add-card-right">
          <div
            className="card-side-container"
            style={
              flipCard
                ? { transform: "rotateY(180deg)" }
                : { transform: "rotateY(0deg)" }
            }
          >
            <div className="add-card-right-front">
              <h1>Question </h1>
              <h2>qUESTION</h2>
              <FaArrowAltCircleRight
                className="card-flip-icon"
                onClick={() => flipTheCard()}
              />
            </div>
            <div className="add-card-right-back">
              <h1>Answer</h1>
              <h2>ANSWER</h2>
              <FaArrowAltCircleLeft
                className="card-flip-icon"
                onClick={() => flipTheCard()}
              />
            </div>
          </div>
        </div>
        <FaChevronRight
          className="add-card-arrow"
          // onClick={() => changeCard("right")}
        />
      </div>
    </div>
  )
}

export default CardDisplay

/*
    connect to current card 
    pass the same names but put in the diffirent data 

*/
