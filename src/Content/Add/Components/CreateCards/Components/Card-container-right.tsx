import React, { useState } from "react"
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa"

const CardContainerRight = ({ inputData }: { inputData: any }) => {
  const [flipCard, setFlipCard] = useState<boolean>(false)

  return (
    <div className="add-card-right-main">
      <FaChevronLeft className="add-card-arrow" />
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
            <h1>Question 1</h1>
            <h2>{inputData.question}</h2>
            <FaArrowAltCircleRight
              className="card-flip-icon"
              onClick={() => setFlipCard(!flipCard)}
            />
          </div>
          <div className="add-card-right-back">
            <h1>Answer</h1>
            <h2>{inputData.answer}</h2>
            <FaArrowAltCircleLeft
              className="card-flip-icon"
              onClick={() => setFlipCard(!flipCard)}
            />
          </div>
        </div>
      </div>
      <FaChevronRight className="add-card-arrow" />
    </div>
  )
}

export default CardContainerRight
