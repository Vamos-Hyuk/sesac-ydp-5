import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import Test1 from './Test1';
import Test2 from './Test2';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value={'Plus 1'} />

      <Test1 />
      <Test2 />
    </div>
  );
}

export default App;
