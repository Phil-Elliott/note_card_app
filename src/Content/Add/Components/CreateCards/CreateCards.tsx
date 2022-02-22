import React, { useState } from "react"
import CardContainerLeft from "./Components/Card-container-left"
import CardContainerRight from "./Components/Card-container-right/Card-container-right"
import "./CreateCards.scss"

interface cardData {
  question: string
  answer: string
}

const CreateCards = () => {
  const [inputData, setInputData] = useState<cardData>({
    question: "",
    answer: "",
  })
  const [cards, setCards] = useState<
    Array<{
      question: string
      answer: string
    }>
  >([])
  const [cardNumber, setCardNumber] = useState<number>(1)

  const changeInputData = (e: any) => {
    setInputData(e)
  }

  const addCard = () => {
    setCards([...cards, inputData])
    setInputData({
      question: "",
      answer: "",
    })
    setCardNumber(cardNumber + 1)
  }

  const changeCard = (direction: string) => {
    if (direction === "left" && cardNumber >= 2) {
      setCardNumber(cardNumber - 1)
    } else if (direction === "right" && cardNumber <= cards.length) {
      setCardNumber(cardNumber + 1)
    }
  }

  return (
    <div className="card-add-container">
      <CardContainerLeft
        inputData={inputData}
        changeInputData={changeInputData}
        addCard={addCard}
      />
      <CardContainerRight
        inputData={inputData}
        cards={cards}
        cardNumber={cardNumber}
        changeCard={changeCard}
      />
    </div>
  )
}

export default CreateCards

/*
Create a finish button and have that add the total input to the main content
have it go to another state that keeps all stacks of cards 
*/
