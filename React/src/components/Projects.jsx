import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <ProjectCard
        title="Portfolio Website"
        description="Created using HTML and CSS."
      />

      <ProjectCard
        title="Student Management System"
        description="University project."
      />

      <ProjectCard
        title="Motor Controller System"
        description="IoT based FYP project."
      />
    </section>
  );
}

export default Projects;