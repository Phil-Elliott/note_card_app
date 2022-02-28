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
    
    1) Make the input sections mandatory 
    2) Make delete and edit sections work 
    3) Make everything responsive 
    4) Add on to home screen when deck is clicked 
        go through the notecards 
    5) Add multiple choice section 



    homne section
      use a route that passes some details maybe 
      link and have another state that shares the deck number 

    delete section 
      maybe copy the home section 
      have a delete icon over each one
      pressing the button deletes (using filter from cards array)
    
    edit section
      have a pencil icon over each one 
      use the same section as the add componetn one 


*/
