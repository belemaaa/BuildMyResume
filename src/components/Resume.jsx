import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [resumeData1, setResumeData1] = useState([]);
  const [resumeData2, setResumeData2] = useState([]);

  useEffect(() => {
    const storedData1 = localStorage.getItem('generalInformation');
    const storedData2 = localStorage.getItem('personalData');

    console.log('Stored Data 1:', storedData1);
    console.log('Stored Data 2:', storedData2);

    if (storedData1) {
      setResumeData1(JSON.parse(storedData1));
    }
    if (storedData2) {
      setResumeData2(JSON.parse(storedData2));
    }
  }, []);

  console.log('Resume Data 1:', resumeData1);
  console.log('Resume Data 2:', resumeData2);

  return (
    <div>
      <p>Stored data from General Information:</p>
      <pre>{JSON.stringify(resumeData1, null, 2)}</pre>

      <p>Stored data from Personal Data:</p>
      <pre>{JSON.stringify(resumeData2, null, 2)}</pre>
    </div>
  );
};

export default Resume;
