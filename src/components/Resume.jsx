import React, { useState } from 'react';
import PDFResume from './PDFResume';
import jsPDF from 'jspdf';
import {Text, StyleSheet } from '@react-pdf/renderer';


const Resume = ({generalInfo, personalData, experience}) => {
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [resumeData, setResumeData] = useState({});

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Resume', 10, 10);
    doc.text(`Full Name: ${generalInfo.fullname}`, 10, 30);
    doc.text(`Address: ${generalInfo.address}`, 10, 40);
    doc.text(`Phone: ${generalInfo.phone}`, 10, 50);
    doc.text(`Email: ${generalInfo.email}`, 10, 60);
    doc.text(`Details: ${generalInfo.details}`, 10, 70);
    

    setResumeData({
      fullname: generalInfo.fullname,
      address: generalInfo.address,
      phone: generalInfo.phone,
      email: generalInfo.email,
      details: generalInfo.details,
    });

    doc.save('resume.pdf');
    setPdfGenerated(true);
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>
        {pdfGenerated ? 'PDF Generated' : 'Generate PDF Resume'}
      </button>
      {pdfGenerated &&(
         <PDFResume 
            fullname={resumeData.fullname}
            address={resumeData.address}
            phone={resumeData.phone}
            email={resumeData.email}
            details={resumeData.details}
         />
      )}
    </div>
  );
};

export default Resume;
