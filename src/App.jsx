import React from 'react';
import './App.css';

const avatar =
  'https://images.unsplash.com/photo-1677910101896-b643d9c32031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60';

const Logo = () => {
  const userPic = <img src={avatar} alt='user' />;

  return userPic;
};

const App = () => {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <Logo />
    </div>
  );
};

export default App;
