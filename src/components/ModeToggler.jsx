import React, { useState } from 'react';

const ModeToggler = () => {
  const [darkModeOn, setDarkModeOn] = useState(false);
  // const [textColor, setTextColor] = useState('black');

  const darkMode = <h1>Dark Mode On</h1>;
  const lightMode = <h1>Light Mode On</h1>;

  const onClickHandler = () => {
    setDarkModeOn(!darkModeOn);
    if (darkModeOn) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';

      // setTextColor('white');
      console.log('darkModeOn');
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // setTextColor('black');
      console.log('darkModeOff');
    }
  };

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={onClickHandler}>Dark Mode On/Off</button>
    </div>
  );
};

export default ModeToggler;
