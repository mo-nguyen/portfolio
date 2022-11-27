import React, {useState, useEffect} from 'react'

const ProjectListPage = () => {
    let [projects, setProjects] = useState([])
    useEffect(() => {
        getProjects()
    }, [])

    let getProjects = async () => {
        let response = await fetch('api/get-projects/')
        let data = await response.json()
        console.log(data)
        setProjects(data)
    }

    return (
    <div>ProjectListPage</div>
  )
}

export default ProjectListPage