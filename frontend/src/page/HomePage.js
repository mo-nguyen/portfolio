import './HomePage.scss'
import React from 'react'
import education_presents_image from '../assert/education_presents.JPG';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  return (
      <div className='home-container'>
        <Row className='align-items-md-center'>
          <Col>
            <h1 className='title'>The Intro</h1>
            <p>
            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            </p>
          </Col>
          <Col>
            <img src={education_presents_image} alt='test'/>
          </Col>
        </Row>
      </div>
  )
}

export default HomePage