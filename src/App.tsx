import lendsqrLogo from "./assets/lendsqr.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://www.lendsqr.com/" target="_blank">
          <img src={lendsqrLogo} className="logo lendsqr" alt="Lendsqr logo" />
        </a>
      </div>
      <h1>Lendsqr FE Test</h1>
    </div>
  );
}

export default App;
