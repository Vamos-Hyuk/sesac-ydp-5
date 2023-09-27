import { useState } from 'react';

const RemoveText = () => {
  const [text, setText] = useState('안녕하세요');
  const [removeText, setRemoveText] = useState('사라져라');

  const handleEventText = () => {
    if (removeText === '사라져라') {
      setRemoveText('나타나라');
      setText('');
    } else {
      setRemoveText('사라져라');
      setText('안녕하세요');
    }
  };

  return (
    <div>
      <button onClick={handleEventText}>{removeText}</button>
      <h1>{text}</h1>
    </div>
  );
};

export default RemoveText;
