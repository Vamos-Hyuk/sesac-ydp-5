import React from 'react';
import bookImg from './today_4-30.jpeg';
import './Test4.css';

const Test4 = ({ title, author, price, type }) => {
  return (
    <div className="all">
      <div className="best">이번주 베스트셀러</div>
      <img
        src={bookImg}
        className="book_img"
        alt="나의하루는 4시30분에 시작한다"
      ></img>
      <div className="title">{title}</div>
      <div className="content">저자: {author}</div>
      <div className="content">판매가: {price}</div>
      <div className="content">구분: {type} </div>
    </div>
  );
};

export default Test4;
