import { useState, useEffect } from 'react';

const GIST_REVISION = 'f47b3d9658d21f1a805f28bd7ed116e8e8d773c0';
const GIST_URL = `https://gist.githubusercontent.com/oneharpal/6ae50dd9a1f7b9a4b808e288b089e635/raw/${GIST_REVISION}/resumeData.json`;

const resumeData = () => {
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

export default resumeData;
