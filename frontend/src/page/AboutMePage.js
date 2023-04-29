import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutMePage.scss";
import education_presents_image from "../assert/education_presents_cropped.JPG";
import employer_id_card_image from "../assert/employer_id_card.JPG";
import bee_image from "../assert/bee.JPG";

function AboutMePage() {
    document.querySelector("body").style.backgroundColor = "none";
    return (
        <div className="full-height">
            <Row className="align-items-md-center">
                <Col md={4}>
                    <img src={education_presents_image} alt="education-presents" />
                </Col>
                <Col md={8}>
                    <Row>
                        <h1 className="title">Education</h1>
                        <div>
                            <h2>University of Information Techonology</h2>
                            <ul>
                                <li>Faculty: Information System</li>
                                <li>Major: E-commerce</li>
                                <li>GPA: 7.39</li>
                                <li>TOEIC: 765</li>
                            </ul>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="align-items-md-center">
                <Col md={8}>
                <h1 className="title">Experience</h1>
                <div>
                    <h2>TMA Innovation Company</h2>
                    <h3>Computer Vision - Face Identification</h3>
                    <ul>
                        <li>Position: Internship</li>
                        <li>Skills: Python, Machine Learning, OpenCV</li>
                    </ul>
                </div>
                <div>
                    <h2>TMA Solution Company</h2>
                    <h3>Outsourcing consumer from Australia</h3>
                    <ul>
                        <li>Position: Fullstack website developer</li>
                        <li>
                            Skills: Django, Python, Knockout JS, Vue JS,
                            Postgres SQL
                        </li>
                    </ul>
                </div>
                </Col>
                <Col md={4}>
                <img src={employer_id_card_image} alt="employer-id-card" />
                </Col>
            </Row>
            <Row className="align-items-md-center">
                <Col md={4}>
                    <img src={bee_image} alt="bee" />
                </Col>
                <Col md={8}>
                    <Row>
                        <h1 className="title">Let's Work Together</h1>
                        <div>
                            <ul>
                                <li>+84 354102640</li>
                                <li>mo.nguyen.tmo@gmail.com</li>
                                <li>Ho Chi Minh City, Viet Nam</li>
                            </ul>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="align-items-md-center">
                <Col md={3}>
                <h1 className="title">Thank you for visiting</h1>

                </Col>
            </Row>
        </div>
    );
}

export default AboutMePage;
