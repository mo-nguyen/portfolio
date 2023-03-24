import './WelcomePage.css'
import React from 'react'
import cicada from '../assert/cicada.JPG'

const WelcomePage = () => {
  return (
    <div>
        <h1>
            MO'S<br/>PORTFOLIO  
        </h1>
        <p>
            Welcome to my Portfolio. <br/>
            Please click
        </p>
        <a href='/home-page'>
            here
        </a>
        <img src={cicada} alt='test' />
    </div>
  )
}

export default WelcomePage