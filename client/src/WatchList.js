import React from "react";

export default function WatchList({ watchlist }) {
  const getRandomColor = () => {
    const colors = ["#FF0000", "#00FF00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="App">
      <h2>My Watchlist</h2>
      <ul>
        {watchlist.map((stock) => (
          <li key={stock.symbol}>
            {stock.company} ({stock.symbol}) -
            <span style={{ color: getRandomColor() }}>
              {" "}
              ${stock.initial_price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
