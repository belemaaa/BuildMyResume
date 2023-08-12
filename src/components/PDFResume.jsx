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
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 600,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 11,
    marginBottom: 8,
    marginLeft: 20,
  },
  emailtext: {
    fontSize: 11,
    marginBottom: 8,
    marginLeft: 20,
    color: 'blue',
    fontWeight: 450,
  },
  variable: {
    fontSize: 11,
    fontWeight: 500
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
    <div className='resume'>
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.heading}>{fullname}</Text>
                <Text style={styles.variable}>Address: <span style={styles.text}>{address}</span></Text>
                <Text style={styles.variable}>Telephone: <span style={styles.text}>{phone}</span></Text>
                <Text style={styles.variable}>E-mail: <span style={styles.emailtext}>{email}</span></Text>

                <div className='border'></div>

                <Text style={styles.text}>{details}</Text>
            </Page>
        </Document>
    </div>
    
  );
};

export default PDFResume;
