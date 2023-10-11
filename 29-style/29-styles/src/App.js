import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>

      <h2>CSS Module</h2>

      <p>CssModuleComponents</p>
      <CssModuleComponents />

      <h2>SassComponent</h2>
      <SassComponent />

      <h2>StyledComponent</h2>
      <StyledComponent />
    </div>
  );
}

export default App;
