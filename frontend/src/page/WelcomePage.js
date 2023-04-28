import "./WelcomePage.scss";
import React from "react";
import cicada from "../assert/cicada.JPG";
import arrow from "../assert/animated-arrow.gif";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WelcomePage = () => {
    return (
        <Container>
            <Row>
                <h1 id="main-title">
                    MO'S
                    <br />
                    PORTFOLIO
                </h1>
            </Row>
            <Row className="justify-content-md-between align-items-md-center">
                <Col md={5}>
                    <p>
                        Welcome to my Portfolio. <br />
                        Please click
                    </p>
                    <Row className="align-items-md-center">
                        <Col>
                            <img src={arrow} alt="arrow" id="arrow" />
                        </Col>
                        <Col className="d-flex justify-content-md-center">
                            <a id="home-link" href="/">here</a>
                        </Col>
                    </Row>
                </Col>
                <Col md={7}>
                    <img src={cicada} alt="cicada" id="cicada" />
                </Col>
            </Row>
        </Container>
    );
};

export default WelcomePage;
