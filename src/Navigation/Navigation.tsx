import React, { useState } from "react"
import "./Navigation.scss"
import {
  FaHome,
  FaPlusCircle,
  FaMinusCircle,
  FaEdit,
  FaSignOutAlt,
  FaCog,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const iconLinks = [
  {
    icon: <FaHome />,
    name: "Home",
    route: "/",
  },
  {
    icon: <FaPlusCircle />,
    name: "Add",
    route: "/add",
  },
  {
    icon: <FaMinusCircle />,
    name: "Delete",
    route: "/delete",
  },
  {
    icon: <FaEdit />,
    name: "Edit",
    route: "/edit",
  },
  {
    icon: <FaSignOutAlt />,
    name: "Sign Out",
    route: "/",
  },
  {
    icon: <FaCog />,
    name: "Settings",
    route: "/settings",
  },
]

const Navigation = () => {
  const [expand, setExpand] = useState<boolean>(false)

  const expandNav = () => {
    setExpand(!expand)
  }

  return (
    <header
      className="navigation"
      style={expand ? { width: "clamp(11rem)" } : { width: "clamp(4rem)" }}
    >
      <div className="nav-main">
        <div className={expand ? "main-logo expand-container" : "main-logo"}>
          <h1>N</h1>
          <h2 className="main-logo-name">NoteCards</h2>
        </div>
        {iconLinks.map((icon, i) => {
          return (
            <Link
              to={icon.route}
              style={{ textDecoration: "none", color: "white", width: "100%" }}
            >
              <div
                key={i}
                className={expand ? "nav-icon expand-container" : "nav-icon"}
              >
                {icon.icon}
                <h2>{icon.name}</h2>
              </div>
            </Link>
          )
        })}
      </div>
      <div
        className="nav-icon bottom-icon expand-container"
        onClick={expandNav}
      >
        {!expand ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </div>
    </header>
  )
}

export default Navigation
