import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CareerObjective from './components/CareerObjective';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import ProjectHistory from './components/ProjectHistory';
import PersonalSkills from './components/PersonalSkills';
import PersonalDetails from './components/PersonalDetails';
import Declaration from './components/Declaration';
import resumeData from './resumeData';

const App = () => {
  const { data, error } = resumeData();

  if (error) return <div>{error}</div>; // Handle error state
  if (!data) return <div>Loading...</div>; // Handle loading state

  return (
    <div>
      <Header personalInformation={data.personalInformation} />
      <CareerObjective careerObjective={data.careerObjective} />
      <Education education={data.education} />
      <TechnicalSkills technicalSkills={data.technicalQualifications} />
      <Experience experience={data.professionalExperience} />
      <ProjectHistory projectHistory={data.projects} />
      <PersonalSkills personalSkills={data.personalSkills} />
      <PersonalDetails personalInformation={data.personalInformation} />
      <Declaration declaration={data.declaration} />
    </div>
  );
};

export default App;
