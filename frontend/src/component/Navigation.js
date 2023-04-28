import './Navigation.scss';
import React from 'react'

const Navigation = () => {
  return (
    <div id='nav-bar'>
        <ul>
            <li className='nav-item nav-active'>
                <a href='/'>Home</a>
            </li>
            <li className='nav-item'>
                <a href='/project'>Projects</a>
            </li>
            <li className='nav-item'>
                <a href='/about-me'>About Me</a>
            </li>
        </ul>
    </div>
  )
}

export default Navigation