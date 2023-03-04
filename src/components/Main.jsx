import React from 'react';

const Main = ({ greet }) => {
  const paragraph = <p>This is a paragraph</p>;

  const formatName = (firstName, surname) => {
    return firstName + ' ' + surname;
  };

  const name = <p>{formatName('Sandra', 'Scheff')}</p>;

  return (
    <div>
      <h1>placeholder says {greet}</h1>
      {paragraph}
      {name}
    </div>
  );
};

export default Main;
