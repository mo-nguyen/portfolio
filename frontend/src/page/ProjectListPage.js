import Row from "react-bootstrap/Row";
import "./ProjectListPage.scss";
import ProjectCard from "../component/ProjectCard";
import Col from "react-bootstrap/Col";
import { getProjects } from "../projects";
import { useLoaderData } from "react-router";

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
                <h1 className="title">Projects</h1>
            </Row>
            <Row className="justify-content-md-between project-cards">
                {projects.length ? (
                <>
                {
                    projects.map((project)=>(
                        <Col md={4} key={project.id}>
                        <ProjectCard project={project} />
                    </Col>
                    ))
                }
                </>
                ) : (
                    <p>There is no projects</p>
                )}
            </Row>
        </div>
    );
};

export default ProjectListPage;
