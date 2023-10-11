import React from 'react';
import './styles/StyledReact.scss';

export default function StyledReact() {
  return (
    <div className="container">
      <div className="box">
        <span>
          <img src={process.env.PUBLIC_URL + '/images/lake.jpg'}></img>
        </span>
      </div>
      <div className="box">
        <span>
          <img src={process.env.PUBLIC_URL + '/images/class.jpg'}></img>
        </span>
      </div>
      <div className="box">
        <span>
          <img src={process.env.PUBLIC_URL + '/images/sky.jpg'}></img>
        </span>
      </div>
      <div className="box">
        <span>
          <img src={process.env.PUBLIC_URL + '/images/splash.jpg'}></img>
        </span>
      </div>
      <div className="box">
        <span>
          <img src={process.env.PUBLIC_URL + '/images/sunshine.jpg'}></img>
        </span>
      </div>
    </div>
  );
}
