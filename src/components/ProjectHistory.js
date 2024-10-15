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
              <span> (<a href={project.projectURL} target="_blank" rel="noopener noreferrer">Link</a>)</span>
            )}
            <br />
            <span><strong>Duration:</strong> {project.duration || 'N/A'}</span>
            <br />
            <span><strong>Technologies:</strong> {project.technologyUsed.join(', ')}</span>
            <br />
            <span><strong>Description:</strong> {project.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectHistory;
