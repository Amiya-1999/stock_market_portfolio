import React from "react";
import { useLocation } from "react-router-dom";

export default function Stock() {
  const location = useLocation();

  return (
    <div className="App Stock">
      <div>
        <div>
          <strong>Company Name: </strong>
          <span>"{location.state.company}"</span>
        </div>
        <div>
          <strong>Company Description: </strong>
          <span>"{location.state.description}"</span>
        </div>
        <div>
          <strong>Initial Price: </strong>
          <span style={{ color: "rgb(1, 110, 233)" }}>
            {location.state.initial_price}
          </span>
        </div>
        <div>
          <strong>Price in the Year 2002: </strong>
          <span style={{ color: "rgb(1, 110, 233)" }}>
            {location.state.price_2002}
          </span>
        </div>
        <div>
          <strong>Price in the Year 2007: </strong>
          <span style={{ color: "rgb(1, 110, 233)" }}>
            {location.state.price_2007}
          </span>
        </div>
        <div>
          <strong>Company Symbol: </strong>
          <span>"{location.state.symbol}"</span>
        </div>
      </div>
    </div>
  );
}
