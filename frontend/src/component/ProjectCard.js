import React from 'react'
import Card from "react-bootstrap/Card";
import "./ProjectCard.scss"

const ProjectCard = () => {
  return (
    <Card >
      <Card.Body>
        <Card.Title><a href='/project/1'>Project Title Long Long Long Title Name</a></Card.Title>
        <Card.Text>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</Card.Text>
        <Card.Subtitle>Tag: Python, Django</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard