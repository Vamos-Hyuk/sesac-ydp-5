import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('React Hooks 연습중입니당');

  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
