import Row from "react-bootstrap/Row";
import "./ProjectListPage.scss";
import ProjectCard from "../component/ProjectCard";
import Col from "react-bootstrap/Col";

const ProjectListPage = () => {
    document.querySelector("body").style.backgroundColor = "#ebe8e8";
    return (
        <div>
            <Row>
                <h1 className="title">Projects</h1>
            </Row>
            <Row className="justify-content-md-between project-cards">
                <Col md={4}>
                    <ProjectCard />
                </Col>
                <Col md={4}>
                    <ProjectCard />
                </Col>
                <Col md={4}>
                    <ProjectCard />
                </Col>
                <Col md={4}>
                    <ProjectCard />
                </Col>
                <Col md={4}>
                    <ProjectCard />
                </Col>
                <Col md={4}>
                    <ProjectCard />
                </Col>
            </Row>
        </div>
    );
};

export default ProjectListPage;
