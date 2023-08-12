import React from 'react';

const Resume = ({gi_details}) => {
    console.log(gi_details)
    return (
        <div>
            <p>Full Name: {gi_details.fullname}</p>
            <p>Address: {gi_details.address}</p>
            <p>Phone: {gi_details.phone}</p>
            <p>Email: {gi_details.email}</p>
            <p>Details: {gi_details.details}</p>
        </div>
    );
};

export default Resume;
