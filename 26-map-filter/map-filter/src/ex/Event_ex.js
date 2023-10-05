import React, { useState } from 'react';

const Event_ex = () => {
  const [data, setData] = useState([
    { id: 1, user: '코디', email: 'codi@gmail.com' },
    { id: 2, user: '윤소희', email: 'yoonsohee@gmail.com' },
  ]);

  const [inputUser, setInputUser] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [newId, setNewId] = useState(3);

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  const eventClick = () => {
    const Newdata = data.concat({
      id: newId,
      user: inputUser,
      email: inputEmail,
    });

    setNewId(newId + 1);
    setData(Newdata);
    setInputUser('');
    setInputEmail('');
  };

  const KeyPress = (e) => {
    if (e.key === 'Enter') {
      eventClick();
    }
  };

  const Remove = (id) => {
    const Newdata = data.filter((data) => data.id !== id);
    setData(Newdata);
  };

  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => Remove(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyPress={KeyPress}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
};

export default Event_ex;
