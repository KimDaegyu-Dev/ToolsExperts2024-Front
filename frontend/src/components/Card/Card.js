import React from "react";
import locationDot from "../../assets/location_on.png"; // 위치 아이콘
import heart from "../../assets/heart.png"; // 하트 아이콘
import "./Card.css";
export default function Card({ title, place, from, to, thumbnail, period }) {
  return (
    <div className="card-container">
      {thumbnail ? (
        <img src={thumbnail} alt="전시회이미지" className="card-image" />
      ) : (
        <div className="card-image"></div>
      )}
      <div className="card-text-container">
        <div>
          <div className="card-titleContainer">
            <p className="card-title">{title}</p>
            <img className="list-heart" src={heart} alt="heart" />
          </div>
          <div className="card-locationContainer">
            <img
              className="list-locationIcon"
              src={locationDot}
              alt="location"
            />
            <p className="card-location">{place}</p>
          </div>
        </div>
        <p className="card-period">{from && to ? `${from} - ${to}` : period}</p>
      </div>
    </div>
  );
}
