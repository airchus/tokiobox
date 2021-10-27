import logo from './tokiobox.jpeg';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to tokiobox app
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCoPWa7FDtOew5Jya3hcMPiQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to enter
        </a>
      </header>
    </div>
  );
}

export default App;
