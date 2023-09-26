import React from 'react';

function Test3(props) {
  const foodStyle = {
    color: 'red',
  };

  return (
    <div>
      내가 좋아하는 음식은 <span style={foodStyle}>{props.food}</span> 입니다.
    </div>
  );
}

Test3.defaultProps = {
  food: 'pizza',
};

export default Test3;
