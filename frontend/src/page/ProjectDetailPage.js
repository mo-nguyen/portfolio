import React from "react";
import "./ProjectDetailPage.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectDetailPage() {
    return (
        <div>
            <Row className="align-items-md-center">
                <Col md={9}>
                    <h1 className="title">Project 1</h1>
                </Col>
                <Col md={3}>
                    <div className="tag-detail d-flex justify-content-md-center flex-column align-items-md-center"><strong>Tags:</strong><span>Python, Django</span></div>
                </Col>
            </Row>
            <Row>
                <div className="content">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</div>
            </Row>
        </div>
    );
}

export default ProjectDetailPage;
