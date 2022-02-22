import React from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"

const CurrentCard = ({
  inputData,
  flipCard,
  flipTheCard,
  cardNumber,
}: {
  inputData: any
  flipCard: boolean
  flipTheCard: any
  cardNumber: number
}) => {
  return (
    <div
      className="card-side-container"
      style={
        flipCard
          ? { transform: "rotateY(180deg)" }
          : { transform: "rotateY(0deg)" }
      }
    >
      <div className="add-card-right-front">
        <h1>Question {cardNumber}</h1>
        <h2>{inputData.question}</h2>
        <FaArrowAltCircleRight
          className="card-flip-icon"
          onClick={() => flipTheCard()}
        />
      </div>
      <div className="add-card-right-back">
        <h1>Answer</h1>
        <h2>{inputData.answer}</h2>
        <FaArrowAltCircleLeft
          className="card-flip-icon"
          onClick={() => flipTheCard()}
        />
      </div>
    </div>
  )
}

export default CurrentCard
