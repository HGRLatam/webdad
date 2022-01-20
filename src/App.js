import logo from './logo.svg';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi <code> Primera Web</code> En ReactJs
        </p>
        <a
          className="App-link"
          href="https://arteddigital.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diseño&ArteDigital
        </a>
      </header>
    </div>
  );
}

export default App;
