import React, { useState } from "react"
import "./Add.scss"
import CreateTitle from "./Components/CreateTitle/CreateTitle"
import CreateCards from "./Components/CreateCards/CreateCards"
import { Route, Routes } from "react-router-dom"

interface titleData {
  title: string
  subject: string
  difficulty: string
}

const Add = ({ addNewData }: { addNewData: any }) => {
  const [titleData, setTitleData] = useState<Partial<titleData>>({})

  const addTitleData = (data: any) => {
    setTitleData(data)
  }

  const addNewDeck = (cardsData: any) => {
    addNewData(titleData, cardsData)
  }

  return (
    <div className="add">
      <Routes>
        <Route path="/" element={<CreateTitle addTitleData={addTitleData} />} />
        <Route
          path="/cards"
          element={<CreateCards addNewDeck={addNewDeck} />}
        />
      </Routes>
    </div>
  )
}

export default Add
