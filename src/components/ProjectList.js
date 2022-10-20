function ProjectList(props) {
    const { projects } = props;

    return (
        <div>
            {projects.map(o => <img src={o.img} />)}
        </div>

    )
}

export default ProjectList;