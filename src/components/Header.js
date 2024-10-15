import React from 'react';

const Header = ({ personalInformation }) => {
  const { name, presentAddress, contactNo, email } = personalInformation
  return (
    <div>
      <h1>{name}</h1>
      <p>Address: {presentAddress}</p>
      <p>Contact: {contactNo}</p>
      <p>Email: {email}</p>
    </div>
  );
}
export default Header;
