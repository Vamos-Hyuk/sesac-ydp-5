import React, { useEffect } from 'react';
import FakePostChild from './FakePostChild';
import './PostList.css';

// 부모 컴포넌트
export default function FakePost() {
  return (
    <div>
      <header>Post List</header>
      <div>
        <FakePostChild />
      </div>
    </div>
  );
}
