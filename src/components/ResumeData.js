import { useState, useEffect } from 'react';

const GIST_REVISION = '4e0b30022b559b233790619b862fe3351a263e7f';
const GIST_URL = `https://gist.githubusercontent.com/oneharpal/6ae50dd9a1f7b9a4b808e288b089e635/raw/${GIST_REVISION}/resumeData.json`;

const ResumeData = () => {
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
        setData(jsonData); // Set the fetched data
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default ResumeData;
