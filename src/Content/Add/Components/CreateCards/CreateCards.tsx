import React, { useState } from "react"
import "./CreateCards.scss"

interface titleData {
  question: string
  answer: string
}

const CreateCards = () => {
  const [inputData, setInputData] = useState<Partial<titleData>>({})

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
            <button className="add-card-bttn-left">Refresh</button>
            <button className="add-card-bttn-right">Add</button>
          </div>
        </div>
      </div>
      <div className="add-card-right">
        <div className="add-card-right-front">
          <h1>Question 1</h1>
          <h2>{inputData.question}</h2>
        </div>
        {/* <div className="add-card-right-back">
          <h1>Answer</h1>
          <h2>{inputData.answer}</h2>
        </div> */}
      </div>
    </div>
  )
}

export default CreateCards
