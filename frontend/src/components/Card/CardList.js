import React from "react";
import Card from "./Card";
import "./CardList.css";
export default function CardList(data) {
  return (
    <div className="cardlist-container">
      {data.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          place={item.place}
          from={item.from}
          to={item.to}
          favorites={item.favorites}
        />
      ))}
    </div>
  );
}
