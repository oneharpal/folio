import React from 'react';

const ProjectHistory = ({ projectHistory }) => {
  const projects = projectHistory || [];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <strong>{project.name}</strong> 
            {project.projectURL && (
              <span> (<a href={project.projectURL} target="_blank" rel="noopener noreferrer">{project.projectURL}</a>)</span>
            )}
            <br />
            {project.duration && (
              <span><strong>Duration:</strong> {project.duration}</span>
            )}
            <br />
            <span><strong>Technologies:</strong> {project.technologyUsed.join(', ')}</span>
            <br />
            <span><strong>Description:</strong> {project.description}</span> 
            <br />
            <span><strong>Responsibility:</strong> {project.responsibilities}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectHistory;
