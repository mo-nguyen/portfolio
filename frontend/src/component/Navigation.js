import "./Navigation.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = () => {
    return (
        <div id="nav-bar">
            <Row>
                <Col className="d-flex">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        Home
                    </NavLink>
                </Col>
                <Col className="d-flex">
                    <NavLink
                        to="/project"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        Projects
                    </NavLink>
                </Col>
                <Col className="d-flex">
                    <NavLink
                        to="/about-me"
                        className={({ isActive }) =>
                            isActive ? "nav-active" : ""
                        }
                    >
                        About Me
                    </NavLink>
                </Col>
            </Row>
        </div>
    );
};

export default Navigation;
