import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Button';
import ImageComponent from './Image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent button="BOTTONE" />
        <ButtonComponent button="BOTTONE-2" />
        <ImageComponent srcImage="https://placekitten.com/400" altImage="Immagine-gatto1"/>
        <ImageComponent srcImage="https://placedog.net/400" altImage="Immagine-gatto1"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
