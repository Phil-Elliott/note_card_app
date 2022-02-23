import React, { useState } from "react"
import CardContainerLeft from "./Components/Card-container-left"
import CardContainerRight from "./Components/Card-container-right/Card-container-right"
import "./CreateCards.scss"

interface cardData {
  question: string
  answer: string
}

const CreateCards = () => {
  const [cardNumber, setCardNumber] = useState<number>(1)
  const [inputData, setInputData] = useState<cardData>({
    question: "",
    answer: "",
  })
  const [prevData, setPrevData] = useState<cardData>({
    question: "",
    answer: "",
  })
  const [cards, setCards] = useState<
    Array<{
      question: string
      answer: string
    }>
  >([])

  // these functions store the input for the new or prev cards
  const changeInputData = (e: any) => {
    setInputData(e)
  }

  const changePrevCard = (e: any) => {
    setPrevData(e)
  }

  const deleteCard = () => {
    setCards(
      cards.filter(function (card) {
        return card !== cards[cardNumber - 1]
      })
    )
    changeCard("left")
  }

  // Deletes a saved card - triggered by delete button
  const refreshCard = () => {
    setInputData({
      question: "",
      answer: "",
    })
  }

  // adds a new card with input - triggered by add button
  const addCard = () => {
    if (inputData.question && inputData.answer) {
      setCards([...cards, inputData])
      setInputData({
        question: "",
        answer: "",
      })
      setCardNumber(cardNumber + 1)
    }
  }

  // updates a prev card with new input - triggered by update button
  const updateCard = () => {
    if (prevData.question && prevData.answer) {
      setCards(
        cards.map((item, i) => {
          return i === cardNumber - 1 ? prevData : item
        })
      )
    }
  }

  // Switches card on right - triggered by arrow icons
  const changeCard = (direction: string) => {
    if (direction === "left" && cardNumber >= 2) {
      setPrevData(cards[cardNumber - 2])
      setCardNumber(cardNumber - 1)
    } else if (direction === "right" && cardNumber <= cards.length) {
      setPrevData(cards[cardNumber])
      setCardNumber(cardNumber + 1)
    }
  }

  return (
    <div className="card-add-container">
      <CardContainerLeft
        cards={cards}
        inputData={cards[cardNumber - 1] ? prevData : inputData}
        changeInputData={
          cards[cardNumber - 1] ? changePrevCard : changeInputData
        }
        deleteCard={deleteCard}
        refreshCard={refreshCard}
        addCard={addCard}
        cardNumber={cardNumber}
        updateCard={updateCard}
      />
      <CardContainerRight
        inputData={cards[cardNumber - 1] ? prevData : inputData}
        cardNumber={cardNumber}
        changeCard={changeCard}
      />
    </div>
  )
}

export default CreateCards

/*
       input has to have something 
        2) Change UI
            - maybe no buttons on title 
                - space them out more 
            - cancel(goes to home) button and right (goes to add cards) button on title container
            - left (goes to title) button and check (adds cards to home and goes home) button on addCards container
            
        3) Connect the cards to the home container 
        4) Make everything responsive 
*/
