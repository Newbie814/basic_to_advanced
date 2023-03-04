import React from 'react';

const Header = ({ name, color }) => {
  return (
    <div style={{ color }}>
      <h1>My name is {name}</h1>
    </div>
  );
};

export default Header;
