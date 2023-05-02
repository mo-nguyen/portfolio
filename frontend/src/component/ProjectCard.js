import React from 'react'
import Card from "react-bootstrap/Card";
import "./ProjectCard.scss"

const ProjectCard = (props) => {
  return (
    <Card >
      <Card.Body>
        <Card.Title><a href={`project/${props.project.id}`}>{props.project.title}</a></Card.Title>
        <Card.Text>{props.project.description}</Card.Text>
        <Card.Subtitle>Tag: {props.project.tag.map(t=>t.name).join(", ")}</Card.Subtitle>
        <Card.Link href={props.project.url}>{props.project.url}</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard