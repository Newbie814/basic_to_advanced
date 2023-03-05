import React from 'react';

const Button = () => {
  const onClickHandler = () => {
    console.log('Button clicked');
  };

  const onMouseOverHandler = () => {
    console.log("I'm over the button");
  };

  return (
    <>
      <div>
        <button onClick={onClickHandler}>Click me</button>
      </div>
      <div>
        <button onMouseOver={onMouseOverHandler}>onMouseOver</button>
      </div>
    </>
  );
};

export default Button;
