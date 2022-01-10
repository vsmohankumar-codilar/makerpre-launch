import logo from './logo.svg';
import './App.css';
import Maker from './makerlanding'
import Grid from './maingrid'
import Price from './pricecontainer'
import Footer from './footer'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Maker/>
      {/* <Grid/> */}
      <Price/>  
      <Footer/>

    </div>
  );
}

export default App;
