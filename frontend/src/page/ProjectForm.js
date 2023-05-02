import "./ProjectForm.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import { Form, useNavigate, useLoaderData, redirect } from "react-router-dom";
import { getTags, createProject, getProjectById, updateProject } from "../projects";
import React, { useEffect, useState } from "react";

export async function action({request, params}) {
    const formData = await request.formData();
    const project = Object.fromEntries(formData);
    project.tag = JSON.parse(project.tag)
    let response = null;
    if (params.projectId) {
        response = await updateProject(params.projectId, project);
    } else {
        response = await createProject(project);
    }
    return redirect("/project");
}

export async function loader({ params }) {
    const tags = await getTags();
    let project = null;
    if (params.projectId) {
        project = await getProjectById(params.projectId);
        if (!project) {
            throw new Response("", {
                status: 404,
                statusText: "Project is not found",
            });
        }
    }
    return {tags, project};
}

function ProjectForm() {
    document.querySelector("body").style.backgroundColor = "#ebe8e8";
    const navigate = useNavigate();
    const {tags, project} = useLoaderData();
    let [selectedTags, setSelectedTags] = useState(project ? project.tag : []);
    let [selectedTagsName, setSelectedTagsName] = useState([]);

    useEffect(() => {
        setSelectedTagsName(selectedTags.map(tag=>tag.name));
    }, [selectedTags]);

    const handleTagChange = function(event) {
        if (event.target.checked) {
            setSelectedTags([...selectedTags, tags.find(tag => tag.id.toString() === event.target.value)])
        } else {
            setSelectedTags(selectedTags.filter(item => item.id.toString() !== event.target.value))
        }
    }

    return (
        <div className="project-form">
            <Row>
                <h1 className="title">
                    {project
                        ? "Edit Project"
                        : "Add Project"}
                </h1>
            </Row>
            <Row>
                <Form method="post">
                    <Row>
                        <Col md={2}>
                            <h5>Title</h5>
                        </Col>
                        <Col md={10}>
                            <input
                                placeholder="Title"
                                type="text"
                                name="title"
                                defaultValue={project ? project.title : ""}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <h5>Tag</h5>
                        </Col>
                        <Col md={10}>
                            <Dropdown>
                                <Dropdown.Toggle className="d-flex justify-content-md-between align-items-md-center">
                                    {selectedTagsName.length ? (<span>{selectedTagsName.join(", ")}</span>) : (<span className="opacity-text">Tag</span>)}
                                    <input type="text" name="tag" value={JSON.stringify(selectedTags)} className="d-none" readOnly/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <ListGroup>
                                        {tags.length ? (
                                            <>
                                                {tags.map((tag) => (
                                                    <ListGroup.Item
                                                        key={tag.id}
                                                    >
                                                        <Row>
                                                            <Col
                                                                md={2}
                                                                className="d-flex align-items-md-center"
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    value={
                                                                        tag.id
                                                                    }
                                                                    onChange={handleTagChange}
                                                                    defaultChecked = {project && project.tag.find(t => t.id.toString() === tag.id.toString()) ? true : false}
                                                                />
                                                            </Col>
                                                            <Col md={10}>
                                                                <span>
                                                                    {tag.name}
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                ))}
                                            </>
                                        ) : (
                                            <p>There is no tag.</p>
                                        )}
                                    </ListGroup>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <h5>URL</h5>
                        </Col>
                        <Col md={10}>
                            <input
                                placeholder="URL"
                                type="text"
                                name="url"
                                defaultValue={project ? project.url : ""}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <h5>Description</h5>
                        </Col>
                        <Col md={10}>
                            <textarea
                                placeholder="Description"
                                rows="5"
                                maxLength="500"
                                name="description"
                                defaultValue={project ? project.description : ""}
                                required
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-end">
                        <Col md={2}>
                            <Button
                                className="cancel-btn"
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                Cancel
                            </Button>
                        </Col>
                        <Col md={2}>
                            <Button className="save-btn" type="submit">
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </div>
    );
}

export default ProjectForm;
