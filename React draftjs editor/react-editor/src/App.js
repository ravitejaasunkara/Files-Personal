import logo from './logo.svg';
import './App.css';
import DraftEditor from './DraftEditor';
import CkEditor from './CkEditor';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        React rich editor
      </header>
      <CkEditor />
    </div>
  );
}

export default App;
