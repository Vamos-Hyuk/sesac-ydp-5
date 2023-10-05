import React, { useState } from 'react';

const EventEx = () => {
  const [data, setDate] = useState([
    { id: 1, user: '코디', email: 'code@gmail.com' },
    { id: 2, user: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const [inputUser, setInputUser] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [nextId, setNextId] = useState(3);

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  const eventClick = () => {
    const NextDate = data.concat({
      id: nextId,
      user: inputUser,
      email: inputEmail,
    });
    setNextId(nextId + 1);
    setDate(NextDate);
    setInputUser('');
    setInputEmail('');
  };

  const dataList = data.map((data) => (
    <h2 key={data.id}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="이름 입력"
        value={inputUser}
        onChange={onChangeUser}
      >
        이름
      </input>
      <input
        type="email"
        placeholder="이메일 입력"
        value={inputEmail}
        onChange={onChangeEmail}
      >
        이메일
      </input>
      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
};

export default EventEx;
