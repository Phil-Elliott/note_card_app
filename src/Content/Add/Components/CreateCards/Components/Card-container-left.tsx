import React from "react"

const CardContainerLeft = () => {
  return (
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
  )
}

export default CardContainerLeft
