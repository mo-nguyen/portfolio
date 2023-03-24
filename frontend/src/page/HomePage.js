import './HomePage.css'
import React from 'react'
import Navigation from '../component/Navigation'
import Footer from '../component/Footer'
import education_presents_image from '../assert/education_presents.JPG';
import { Router } from 'react-router-dom';

const HomePage = () => {
  return (
    <Router>
      <Navigation />    
      <div className='body-container'>
        <div className='row'>
          <div className='col-left'>
            <h1>The Intro</h1>
            <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            </p>
          </div>
          <div className='col-right'>
            <img src={education_presents_image} alt='test'/>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default HomePage