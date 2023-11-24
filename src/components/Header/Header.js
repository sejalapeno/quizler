import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css"

const header = () => {
  return (
  <div className='header'>
    <Link to="/" className='title'>Quizzler, test your GK!</Link>
  
    <hr className='divider'/>
    </div>
)
}

export default header
