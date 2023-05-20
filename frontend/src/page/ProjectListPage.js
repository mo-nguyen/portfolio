import Row from "react-bootstrap/Row";
import "./ProjectListPage.scss";
import ProjectCard from "../component/ProjectCard";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getProjects } from "../projects";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export async function loader() {
    let projects = await getProjects();
    return { projects };
}
const ProjectListPage = () => {
    document.querySelector("body").style.backgroundColor = "#ebe8e8";
    const {projects} = useLoaderData();
    return (
        <div>
            <Row>
                <Col md={9}>
                    <h1 className="title">Projects</h1>
                </Col>
                <Col
                    md={3}
                    className="d-flex flex-column justify-content-md-center align-items-md-stretch"
                >
                    <Button className="add-btn">
                        <Link to={"/project/add"} className="d-block">Add</Link>
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-md-start project-cards">
                {projects.length ? (
                    <>
                        {projects.map((project) => (
                            <Col md={4} key={project.id}>
                                <ProjectCard project={project} />
                            </Col>
                        ))}
                    </>
                ) : (
                    <p>There is no projects</p>
                )}
            </Row>
        </div>
    );
};

export default ProjectListPage;
