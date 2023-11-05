import React from 'react';

const Header: React.FC = () => (
  <header style={{ 
    backgroundColor: 'green', 
    color: 'white', 
    display: 'flex', // Use flex display to align items
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
    fontSize: '20px',
    marginBottom: '20px'
  }}>
    <img src="/images/prof.png" alt="Header Image" style={{ width: '50px', marginRight: '10px' }} />
    <h1>POCKET PROFESSOR</h1>
  </header>
);

export default Header;