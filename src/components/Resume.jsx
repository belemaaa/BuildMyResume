import React from 'react';

const Resume = ({generalInfo, personalData}) => {
    console.log(generalInfo)
    return (
        <div>
            <p>Full Name: {generalInfo.fullname}</p>
            <p>Address: {generalInfo.address}</p>
            <p>Phone: {generalInfo.phone}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Details: {generalInfo.details}</p>

            <p>{personalData.sex}</p>
        </div>
    );
};

export default Resume;
