import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';
import { useState } from 'react';
import { deposit, withdraw } from './store/money';

function App() {
  const [number, setNumber] = useState(0);
  const money = useSelector((state) => state.money.value);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const depositingMoney = () => {
    setNumber('');
    dispatch(deposit(number));
  };
  const withdrawMoney = () => {
    setNumber('');
    dispatch(withdraw(number));
  };

  return (
    <div className="App">
      <h1>React Redux 실습</h1>
      <hr />
      <h1>코딩온 은행</h1>
      <h2>잔액: {money}원</h2>
      <input type="text" value={number} onChange={onChange}></input>
      <button onClick={depositingMoney}>입금</button>
      <button onClick={withdrawMoney}>출금</button>
    </div>
  );
}

export default App;
