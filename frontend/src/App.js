import logo from './logo.svg';
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

      <Routes>
        <Route exact path="/" component={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
