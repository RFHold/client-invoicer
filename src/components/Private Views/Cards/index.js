import React, { useContext } from "react";
import Card from "../../Utilities/Card";
import { RoutesContext } from "../../../Contexts";
import Listview from "../../Utilities/ListView"


function TaskItem({ data: task }) {
    return (
        <div>
            <h4>Task:</h4><p>{task.name}</p>
            <h4>Description:</h4><p>{task.description}</p>
            <h4>Project:</h4><p>{task.project}</p>
            <h4>Client:</h4><p>{task.client}</p>
        </div>
    )
}

function TaskCard(props) {
    const context = useContext(RoutesContext);

    return (
        <Card>
            <Listview itemComponent={TaskItem} resource={context.api.tasks} />
        </Card>
    )
}

function ProjectItem({ data: project }) {
    return (
        <div>
            <h4>Project:</h4><p>{project.name}</p>
            <h4>Description:</h4><p>{project.description}</p>
            <h4>Client:</h4><p>{project.client}</p>
        </div>
    )
}

function ProjectCard(props) {
    const context = useContext(RoutesContext);

    return (
        <Card>
            <Listview itemComponent={ProjectItem} resource={context.api.projects} />
        </Card>
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