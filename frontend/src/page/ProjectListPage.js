import Row from "react-bootstrap/Row";
import "./ProjectListPage.scss";
import ProjectCard from "../component/ProjectCard";
import Col from "react-bootstrap/Col";

const ProjectListPage = () => {
    return (
        <div>
            <Row>
                <h1 className="title">Projects</h1>
            </Row>
            <Row className="justify-content-md-between">
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
