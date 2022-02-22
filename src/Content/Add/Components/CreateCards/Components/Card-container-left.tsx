import React from "react"

const CardContainerLeft = ({
  inputData,
  changeInputData,
  addCard,
}: {
  inputData: any
  changeInputData: any
  addCard: any
}) => {
  return (
    <div className="add-card-left">
      <div className="input-add-card-container">
        <div className="input-add-card">
          <p>Question</p>
          <textarea
            maxLength={150}
            placeholder="Awesome note cards"
            value={inputData.question}
            onChange={(e) =>
              changeInputData({ ...inputData, question: e.target.value })
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
              changeInputData({ ...inputData, answer: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div className="add-card-bttns">
          <button className="add-card-bttn-left">Back</button>
          <button className="add-card-bttn-right" onClick={() => addCard()}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardContainerLeft
