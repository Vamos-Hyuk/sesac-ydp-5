import React from 'react';

export default function FakePostChild(post) {
  return (
    <div>
      <div>
        No.{post.id} - {post.title}
      </div>
      <div>{post.body}</div>
    </div>
  );
}
