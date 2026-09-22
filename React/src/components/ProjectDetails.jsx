import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    1: {
      title: "Portfolio Website",
      description: "A personal portfolio website created using HTML, CSS and JavaScript."
    },
    2: {
      title: "JavaScript Project",
      description: "A project created to practice JavaScript concepts and functionality."
    },
    3: {
      title: "React Project",
      description: "A React project created to practice components, state and routing."
    }
  };

  const project = projects[id];

  return (
    <div className="page">
      {project ? (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      ) : (
        <h1>Project Not Found</h1>
      )}
    </div>
  );
}

export default ProjectDetails;