function fetchProjects() {
    return fetch("http://localhost:8000/api/projects/", {
        method: "GET",
    });
}

function fetchProjectById(projectId) {
    return fetch(`http://localhost:8000/api/project/${projectId}`, {
        method: "GET",
    });
}

function fetchUpdateProject(projectId, data) {
    return fetch(`http://localhost:8000/api/project/${projectId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

function fetchTags() {
    return fetch("http://localhost:8000/api/tags/", {
        method: "GET",
    });
}

function fetchCreateProject(data) {
    return fetch("http://localhost:8000/api/project/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

export async function getProjects() {
   const response = await fetchProjects().then((response) => response.json());
   return response;
}

export async function getProjectById(projectId) {
    const response = await fetchProjectById(projectId).then((response) => response.json());
    return response;
}

export async function updateProject(projectId, data) {
    const response = await fetchUpdateProject(projectId, data).then((response) => response.json());
    return response;
}

export async function getTags() {
    const response = await fetchTags().then((response) => response.json());
    return response;
}

export async function createProject(data) {
    const response = await fetchCreateProject(data).then((response) => response.json());
    return response;
}
