import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import WatchList from "./WatchList";
import Home from "./Home";
import Stock from "./Stock";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (stock) => {
    fetch("http://localhost:8000/api/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setWatchlist([...watchlist, stock]);
      })
      .catch((error) => console.error("Error adding to watchlist:", error));
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to="/">Stocks</NavLink>
          <NavLink to="/watchlist">Watchlist</NavLink>
        </nav>
        <h1>Stock Market Application</h1>
        <Routes>
          <Route
            path="/"
            element={<Home addToWatchlist={addToWatchlist} />}
          />
          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchlist} />}
          />
          <Route
            path="/stock"
            element={<Stock />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
