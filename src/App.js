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
const GIST_REVISION = 'f47b3d9658d21f1a805f28bd7ed116e8e8d773c0'
const GIST_URL = `https://gist.githubusercontent.com/oneharpal/6ae50dd9a1f7b9a4b808e288b089e635/raw/${GIST_REVISION}/resumeData.json`;

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GIST_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

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
