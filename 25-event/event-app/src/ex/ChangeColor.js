import { useState } from 'react';

const ChangeColor = () => {
  const [str, setStr] = useState('검정색 글씨');
  const [style, setStyle] = useState({ color: 'black' });

  const handleEventRed = () => {
    setStr('빨간색 글씨');
    setStyle({ color: 'red' });
  };

  const handleEventBlue = () => {
    setStr('파란색 글씨');
    setStyle({ color: 'blue' });
  };

  const handleEventBlack = () => {
    setStr('검정색 글씨');
    setStyle({ color: 'black' });
  };

  return (
    <div>
      <h1 style={style}>{str}</h1>

      <button onClick={handleEventBlack}>검정색</button>
      <button onClick={handleEventRed}>빨간색</button>
      <button onClick={handleEventBlue}>파란색</button>
    </div>
  );
};

export default ChangeColor;
