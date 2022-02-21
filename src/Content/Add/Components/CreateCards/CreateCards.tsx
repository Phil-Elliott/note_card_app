import React, { useState } from "react"
import "./CreateCards.scss"
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa"

interface titleData {
  question: string
  answer: string
}

const CreateCards = () => {
  const [inputData, setInputData] = useState<Partial<titleData>>({})
  const [flipCard, setFlipCard] = useState<boolean>(false)

  return (
    <div className="card-add-container">
      <div className="add-card-left">
        <div className="input-add-card-container">
          <div className="input-add-card">
            <p>Question</p>
            <textarea
              maxLength={150}
              placeholder="Awesome note cards"
              value={inputData.question}
              onChange={(e) =>
                setInputData({ ...inputData, question: e.target.value })
              }
            />
          </div>
          <div className="input-add-card">
            <p>Answer</p>
            <textarea
              maxLength={150}
              placeholder="Science"
              value={inputData.answer}
              onChange={(e) =>
                setInputData({ ...inputData, answer: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <div className="add-card-bttns">
            <button className="add-card-bttn-left">Back</button>
            <button className="add-card-bttn-right">Add</button>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default CreateCards

/*

Make right card into its own component 
Make left card into its own component
link up input 
Create a new state with the card totalinput 
have the add button add the last card to that and reset the other input to blank
Create a finish button and have that add the total input to the main content
have it go to another state that keeps all stacks of cards 


*/
