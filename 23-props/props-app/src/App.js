import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button.js';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';

function App() {
  const my_func = () => {
    console.log('콘솔 띄우기 성공!');
  };

  return (
    <div className="App">
      <FunctionComponent name="영등포 새싹" />
      <FunctionComponent />
      <FunctionComponent name={true} />
      <hr />
      <ClassComponent name="새싹" />
      <ClassComponent />
      <ClassComponent name={true} />
      <hr />
      <Button link="https://www.google.com">Google</Button>
      <Test />
      <Test2 />
      <Test3 />
      <Test4
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <div>
        <Test5
          text="App 컴포넌트에서 넘겨준 text props입니다."
          valid={my_func}
        />
      </div>
    </div>
  );
}

export default App;
