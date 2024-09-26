import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Stocks({ addToWatchlist }) {
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data))
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="App">
      <h2>Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol} onClick={() => navigate("/stock", {state: stock})}>
            {stock.company} ({stock.symbol}) -
            <span style={{ color: getRandomColor() }}>
              ${stock.initial_price}
            </span>
            <button onClick={() => addToWatchlist(stock)}>
              Add to My Watchlist
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
