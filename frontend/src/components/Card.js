import React from "react";
import locationDot from "../assets/location_on.png"; // 위치 아이콘
import heart from "../assets/heart.png"; // 하트 아이콘
import "./Card.css";
export default function Card({ content, location, period }) {
  return (
    <div className="card-container">
      <div className="card-image"></div>
      <div className="card-text-container">
        <div>
          <div className="card-titleContainer">
            <p className="card-title">{content}</p>
            <img className="list-heart" src={heart} alt="heart" />
          </div>
          <div className="card-locationContainer">
            <img
              className="list-locationIcon"
              src={locationDot}
              alt="location"
            />
            <p className="card-location">{location}</p>
          </div>
        </div>
        <p className="card-period">{period}</p>
      </div>
    </div>
  );
}
