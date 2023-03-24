import './Navigation.css';
import React from 'react'

const Navigation = () => {
  return (
    <div id='nav-bar'>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>Projects</a>
            </li>
            <li>
                <a href='/'>About Me</a>
            </li>
        </ul>
    </div>
  )
}

export default Navigation