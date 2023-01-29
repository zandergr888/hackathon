import logo from './logo.svg';
import './App.css';

function App() {
  const http = require("https");
  for (var i = 1; i < 12; i++) {
    const options = {
      "method": "GET",
      "hostname": "currencyscoop.p.rapidapi.com",
      "port": null,
      "path": "/historical?date=2019-" + " -05",
      "headers": {
        "X-RapidAPI-Key": "73d45d6313mshd16f17ab16d3fe8p1368ecjsn7f132604eddb",
        "X-RapidAPI-Host": "currencyscoop.p.rapidapi.com",
        "useQueryString": true
      }
    };
    var self = this;
    const req = http.request(options, function (res) {
      const chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        const body = Buffer.concat(chunks);
        const bruh = 9;
        var bodyJSON = JSON.parse(body.toString());
        var metaData = bodyJSON.response.rates.EUR;
        console.log("META " + metaData.toString());

      });
    });

    req.end();
  }
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
