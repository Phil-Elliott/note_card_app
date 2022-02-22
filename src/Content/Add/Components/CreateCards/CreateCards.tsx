import React, { useState } from "react"
import CardContainerLeft from "./Components/Card-container-left"
import CardContainerRight from "./Components/Card-container-right"
import "./CreateCards.scss"

interface cardData {
  question: string
  answer: string
}

const CreateCards = () => {
  const [inputData, setInputData] = useState<Partial<cardData>>({})

  const changeInputData = (e: object) => {
    setInputData(e)
  }

  return (
    <div className="card-add-container">
      <CardContainerLeft
        inputData={inputData}
        changeInputData={changeInputData}
      />
      <CardContainerRight inputData={inputData} />
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
