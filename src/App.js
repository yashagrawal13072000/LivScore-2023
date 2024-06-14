import logo from './logo.svg';
import './App.css';
import axios from 'axios';





const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
  params: {id: '39'},
  headers: {
    'X-RapidAPI-Key': '3a1f5c1448msh76651723dbbc972p1224a1jsn4f654d29b46a',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
