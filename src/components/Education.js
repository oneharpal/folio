import React from 'react';

const Education = ({education}) => {
  return (
    <div>
    <h2>Education</h2>
    <ul>
    {education.map((edu, index) => (
    <li key={index}>
    {edu.degree} from {edu.institution} ({edu.year})
    </li>
    ))}
    </ul>
    </div>
    );
  };

  export default Education;
