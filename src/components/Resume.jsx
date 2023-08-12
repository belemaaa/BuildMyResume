import React, { useState, useEffect } from 'react';

const Resume = (props) => {
    const {fullname, address, phone, email, details} = props

  return (
    <div>
        <p>
          {props.fullname}
        </p>
    </div>
  );
};

export default Resume;
