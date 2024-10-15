import React from 'react';

const ProjectHistory = ({ projectHistory }) => {
  const projects = projectHistory || [];

  return (
    <div>
    <h2>Projects</h2>
    <ul>
    {projects.map((project, index) => (
      <li key={index}>{project.name} ({project.year})</li>
      ))}
  </ul>
  </div>
  );
};

export default ProjectHistory;
