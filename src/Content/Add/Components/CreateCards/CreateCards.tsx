import React, { useState } from "react"
import CardContainerLeft from "./Components/Card-container-left"
import CardContainerRight from "./Components/Card-container-right/Card-container-right"
import "./CreateCards.scss"
import { Link } from "react-router-dom"
import { FaChevronCircleLeft, FaCheckCircle } from "react-icons/fa"

interface cardData {
  question: string
  answer: string
}

const CreateCards = ({ addNewDeck }: { addNewDeck: any }) => {
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
    cardNumber === 1 ? changeCard("right") : changeCard("left")
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
    <div className="card-add-main-container">
      <Link to="/add/" style={{ textDecoration: "none", color: "white" }}>
        <FaChevronCircleLeft className="create-title-icon-left" />
      </Link>
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
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <FaCheckCircle
          className="create-title-icon-right"
          onClick={() => addNewDeck(cards)}
        />
      </Link>
    </div>
  )
}

export default CreateCards
