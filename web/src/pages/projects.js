import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    projects: allSanityProject {
      nodes {
        id
        project_title
        tech {
          _id
          name
        }
      }
    }
  }
`;

const Projects = ({ data }) => {
  // console.log(data);

  const projects = data.projects.nodes;

  console.log(projects);

  return (
    <div>
      <h1>Hello from projects page!</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <p>{project.project_title}</p>
          <p>Built with: {project.tech.map((tech) => `${tech.name}, `)}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
