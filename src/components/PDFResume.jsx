import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});

const PDFResume = (props) => {
    const {
        fullname, 
        address, 
        phone, 
        email, 
        details
    } = props
  return (
    <div>
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>Resume</Text>
                <Text style={styles.text}>Full Name: {fullname}</Text>
                <Text style={styles.text}>Address: {address}</Text>
                <Text style={styles.text}>Phone: {phone}</Text>
                <Text style={styles.text}>Email: {email}</Text>
                <Text style={styles.text}>Details: {details}</Text>
            </Page>
        </Document>
    </div>
    
  );
};

export default PDFResume;
