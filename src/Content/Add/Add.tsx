import React from "react"
import "./Add.scss"
import CreateTitle from "./Components/CreateTitle/CreateTitle"
import CreateCards from "./Components/CreateCards/CreateCards"
import { Route, Routes } from "react-router-dom"

const Add = () => {
  return (
    <div className="add">
      <Routes>
        <Route path="/" element={<CreateTitle />} />
        <Route path="/cards" element={<CreateCards />} />
      </Routes>
    </div>
  )
}

export default Add

/*
  Title (input) subject and dificulty 
  Then screen changes ( title on top and buttons appear)
  Add, Edit, delete, finish Buttons 
  Left side for new cards 
  Right side for finished cards 





  2) Have blank card ready (focus in on input)
  3) Can put card number on top 
  4) done cards move to right




*/
