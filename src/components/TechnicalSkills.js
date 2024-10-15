import React from 'react';

const TechnicalSkills = ({technicalSkills}) => {
  const languages = technicalSkills.languages

  return (
    <div>
    <h2>Technical Skills</h2>
    <ul>
    {languages.map((language, index) => (
    <li key={index}>{language}</li>
    ))}
    </ul>
    </div>
    );
  };

  export default TechnicalSkills;
