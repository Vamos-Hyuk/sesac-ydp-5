import React, { useState } from 'react';

export default function Pr1() {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const addData = () => {
    if (inputName.trim().length === 0) {
      alert('작성자를 입력하시오');

      return;
    } else if (inputTitle.trim().length === 0) {
      alert('제목을 입력하시오');
      return;
    }

    const newData = data.concat({
      id: data.length + 1,
      title: inputTitle,
      name: inputName,
    });

    setData(newData);
    setInputName('');
    setInputTitle('');
  };
  return (
    <div>
      <fieldset>
        <span>작성자 :</span>
        <input
          type="text"
          value={inputName}
          placeholder="작성자"
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        ></input>
        <span>제목 :</span>
        <input
          type="text"
          value={inputTitle}
          placeholder="제목"
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        ></input>
        <button onClick={addData}>작성</button>
      </fieldset>

      <form>
        <select>
          <option value="name">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button>검색</button>
      </form>

      <table>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        {data.map((data) => {
          return (
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
