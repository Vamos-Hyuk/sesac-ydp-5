import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';
import {
  Box1Container,
  Box2Container,
  Box3Container,
  Box4Container,
} from './containers/BoxesContainer';

function App() {
  const number = useSelector((state) => state.number);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number: {number}</h2>
      <Box1Container />
    </div>
  );
}

export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1 </h2>
      <Box2Container />
    </div>
  );
};

export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3Container />
    </div>
  );
};

export const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3 </h2>
      <Box4Container />
    </div>
  );
};

export const Box4 = ({ number, onPlus, onMinus, onChange, isVisible }) => {
  // const number = useSelector((state) => state.counter.number);
  // const isVisible = useSelector((state) => state.isVisible);
  // const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4: {number} </h2>
      {/* <h2>isVisible 값은 {isVisible ? 'T' : 'F'} 이다.</h2> */}
      <button onClick={onPlus}>PLUS</button>
      <button onClick={onMinus}>MINUS</button>
      {/* <button onClick={onChange}>CHANGE</button> */}
    </div>
  );
};

export default App;
