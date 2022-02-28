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

/*
    1) Make add section responsive 
    2) Make navbar responsive 
    3) Make design for home section 
    
    maybe just finish everything first and then fix design and make it responsive



*/
