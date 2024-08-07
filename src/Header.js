// import React from "react";
// import './Header.css'


// const Header = ({theme , toggleTheme }) => {
//     return(
//        <header>
//          <h1> To-Do List </h1>
//          <button onClick={toggleTheme} className={`${theme} theme`}>
//             {theme !== 'light' ? (<FaMoon />) : (<IoSunnyOutline />)}
//          </button>
//        </header>
//     )
// }

// export default Header;

import React from 'react'
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

const Header = ({theme , handleTheme}) => {
  return (
    <header>
        <h1>Todo List</h1>
        <button onClick={handleTheme} className="theme-btn">
            {theme === 'light' ? (<IoSunnyOutline />): (<FaMoon />)
            }
        </button>
    </header>
  )
}

export default Header