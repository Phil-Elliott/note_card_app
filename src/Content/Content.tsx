import React from "react"
import "./Content.scss"
import Home from "./Home/Home"
import Add from "./Add/Add"
import Delete from "./Delete/Delete"
import Edit from "./Edit/Edit"
import Settings from "./Settings/Settings"
import { Route, Routes } from "react-router-dom"

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add/*" element={<Add />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
  )
}

export default Content

/*
  create cards state 
    collects all decks of cards that can be used or edited 
    have a function that you pass through to get everything once the check button is pushed 
      passes the title array and the cards array and somehow puts them togehter into one object of this new state 

      title info
      cards info (can you put an array into an object - pretty sure you can)

      add redux to the app 
      learn unit testing and try on here 

*/
