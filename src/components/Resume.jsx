import React, {useState, useEffect} from 'react'

const Resume = () => {
    const [resumeData1, setResumeData1] = useState([]);

    useEffect(() => {
      const storedData1 = localStorage.getItem('generalData');
      if (storedData1) {
        setResumeData1(JSON.parse(storedData1));
      }
    }, []);
  return (
    <div>Resume</div>
  )
}

export default Resume