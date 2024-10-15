import React from 'react';

const PersonalDetails = ({personalInformation}) => {
  const { name, dob, email } = personalInformation

  return (
    <div>
    <h2>Personal Details</h2>
    <p>Name: {name || "Not Provided"}</p>
    <p>Date of Birth: {dob || "Not Provided"}</p>
    <p>Email: {email || "Not Provided"}</p>
    </div>
    );
  };

  export default PersonalDetails;
