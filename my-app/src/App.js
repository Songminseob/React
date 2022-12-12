import logo from './1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world, 헬로 월드
        </p>
        <a
          className="App-link"
          href="https://github.com/Songminseob/React"
          target="_blank"
          rel="noopener noreferrer"
        >
          배워보자 리액트
        </a>
      </header>
    </div>
  );
}

export default App;
