import React from "react";
import "./ProjectDetailPage.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getProjectById } from "../projects";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export async function loader({params}) {
    const project = await getProjectById(params.projectId);
    if (!project) {
        throw new Response("", {
            status: 404,
            statusText: "Project is not found",
        });
    }
    return {project};
}

function ProjectDetailPage() {
    document.querySelector("body").style.backgroundColor = "#ebe8e8";
    const {project} = useLoaderData();
    return (
        <div>
            <Row className="align-items-md-center">
                <Col md={9}>
                    <h1 className="title">{project.title}</h1>
                </Col>
                <Col
                    md={3}
                    className="d-flex flex-column justify-content-md-center align-items-md-stretch"
                >
                    <Button className="edit-btn">
                        <Link to={`/project/${project.id}/edit`} className="d-block">Edit</Link>
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col md={4}>
                    <div className="tag-detail d-flex justify-content-md-center flex-column align-items-md-center">
                        <strong>Tag:</strong>
                        <span>{project.tag.map((t) => t.name).join(", ")}</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="content">{project.description}</div>
            </Row>
        </div>
    );
}

export default ProjectDetailPage;
