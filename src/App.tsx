import React from "react"
import "./App.scss"
import Navigation from "./Navigation/Navigation"
import Content from "./Content/Content"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
        </div>
        <Content />
      </Router>
    </div>
  )
}

export default App

// Make form on left and display the card on the right
// Could add hover flip from old portfolio
// Can easily add all options within form (title, add card, refresh card, finish at the bottom)
