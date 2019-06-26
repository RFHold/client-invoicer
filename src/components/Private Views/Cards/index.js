import React, { useContext } from "react";
import Card from "../../Utilities/Card";
import { RoutesContext } from "../../../Contexts";
import Listview from "../../Utilities/ListView"


function TaskItem({ data: task }) {
    return (
        <Card>
            <h4>Task:</h4><p>{task.name}</p>
            <h4>Description:</h4><p>{task.description}</p>
            <h4>Project:</h4><p>{task.project}</p>
            <h4>Client:</h4><p>{task.client}</p>
        </Card>
    )
}

function TaskCard(props) {
    const context = useContext(RoutesContext);

    return (
        
            <Listview itemComponent={TaskItem} resource={context.api.tasks} />
        
    )
}

function ProjectItem({ data: project }) {
    return (
        <Card>
            <h4>Project:</h4><p>{project.name}</p>
            <h4>Description:</h4><p>{project.description}</p>
            <h4>Client:</h4><p>{project.client}</p>
        </Card>
    )
}

function ProjectCard(props) {
    const context = useContext(RoutesContext);

    return (
        
            <Listview itemComponent={ProjectItem} resource={context.api.projects} />
       
    )
}

function TimeItem({ data: time }) {
    return (
        <div>
            {/* <h4>{time.name}</h4>
            <p>{time.description}</p> */}
        </div>
    )
}

function TimeCard(props) {
    const context = useContext(RoutesContext);
    return (
        <Card>
            {<Listview itemComponent={TimeItem} resource={context.api.tasks} />}
        </Card>
    )
}

export { TaskCard, ProjectCard, TimeCard }
