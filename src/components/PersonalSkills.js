import React from 'react';

const PersonalSkills = ({personalSkills}) => (
  <div>
    <h2>Personal Skills</h2>
    <ul>
      { personalSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default PersonalSkills;
