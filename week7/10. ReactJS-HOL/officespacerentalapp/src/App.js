import React from 'react';

function App() {
  const heading = <h1 style={{ textAlign: 'center' }}>Office for Rent, Affordable Range</h1>;

  const officeImage = (
    <img
      src="room.jpeg"
      alt="Office Space"
      style={{ width: '400px', borderRadius: '10px', display: 'block', margin: 'auto' }}
    />
  );

  const mainOffice = {
    name: 'TechHub HQ',
    rent: 55000,
    address: '123 Startup Street, Bangalore',
  };


  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', textAlign: 'center' }}>
      {heading}
      {officeImage}
      <h2 >Main Office Details</h2>
      <p><strong>Name:</strong> {mainOffice.name}</p>
      <p><strong>Address:</strong> {mainOffice.address}</p>
      <p>
        <strong>Rent:</strong>
        <span style={{ color: mainOffice.rent < 60000 ? 'red' : 'green' }}>
          ₹{mainOffice.rent}
        </span>
      </p>
    </div>
  );
}

export default App;
