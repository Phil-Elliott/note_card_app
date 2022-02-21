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
