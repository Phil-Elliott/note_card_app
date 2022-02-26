import React, { useState } from "react"
import "./CreateTitle.scss"
import { Link } from "react-router-dom"
import { FaBan, FaChevronCircleRight } from "react-icons/fa"

interface titleData {
  title: string
  subject: string
  difficulty: string
}

const CreateTitle = () => {
  const [inputData, setInputData] = useState<Partial<titleData>>({})

  return (
    <div className="card-title-main-container">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <FaBan className="create-title-icon-left" />
      </Link>
      <div className="card-title-container">
        <div className="card-title-input">
          <div className="input-container">
            <div className="input-container">
              <p>Title of your notecards</p>
              <input
                type="text"
                placeholder="Awesome note cards"
                value={inputData.title}
                onChange={(e) =>
                  setInputData({ ...inputData, title: e.target.value })
                }
              />
            </div>
            <div className="input-container">
              <p>Subject you are studying</p>
              <input
                type="text"
                placeholder="Science"
                value={inputData.subject}
                onChange={(e) =>
                  setInputData({ ...inputData, subject: e.target.value })
                }
              />
            </div>
            <div className="input-container">
              <p>Describe the difficulty</p>
              <input
                type="text"
                placeholder="Easy"
                value={inputData.difficulty}
                onChange={(e) =>
                  setInputData({ ...inputData, difficulty: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="card-title-display">
          <h1>{inputData.title}</h1>
          <h2>{inputData.subject}</h2>
          <h3>{inputData.difficulty}</h3>
        </div>
      </div>
      <Link
        to="/add/cards"
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <FaChevronCircleRight className="create-title-icon-right" />
      </Link>
    </div>
  )
}

export default CreateTitle

/*
  Style the card 
  Have data go back to add 
  Create add cards
  Add Redux 


  1) Make cancel link to home 
  2) Create next section 
  3) Have title carry over to next section (make everything go to the add section)
  4) Create the add card section



  4) When finished (have a new deck go to the home section)
      - only display the title card 
  



*/
