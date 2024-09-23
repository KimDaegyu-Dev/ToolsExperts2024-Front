import React from "react";
import "../styles/LandingPage.css";
import locationDot from "../assets/location_on.png"; // 위치 아이콘
import heart from "../assets/heart.png"; // 하트 아이콘
import Filter from "../components/Filter";
import Card from "../components/Card";
const data1 = [
  {
    id: "best1",
    content: "전시회 이름 1",
    location: "위치 1",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: "best2",
    content: "전시회 이름 2",
    location: "위치 2",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: "best3",
    content: "전시회 이름 3",
    location: "위치 3",
    period: "2024.06.05 ~ 2024.09.18",
  },
];
const data2 = [
  {
    id: 1,
    content: "전시회 이름 1",
    location: "위치 1",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 2,
    content: "전시회 이름 2",
    location: "위치 2",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 3,
    content: "전시회 이름 3",
    location: "위치 3",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 4,
    content: "전시회 이름 4",
    location: "위치 4",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 5,
    content: "전시회 이름 5",
    location: "위치 5",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 6,
    content: "전시회 이름 6",
    location: "위치 6",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 7,
    content: "전시회 이름 7",
    location: "위치 7",
    period: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 8,
    content: "전시회 이름 8",
    location: "위치 8",
    period: "2024.06.05 ~ 2024.09.18",
  },
];

function Best({ content, location, period }) {
  return (
    <div className="bestBox">
      <p className="best-content">
        {content}
        <img className="best-heart" src={heart} alt="heart" />
      </p>
      <img className="best-locationIcon" src={locationDot} alt="location" />
      <p className="best-location">{location}</p>
      <p className="best-period">{period}</p>
    </div>
  );
}
function LandingPage() {
  return (
    <>
      <div>
        <small>7월 4주차</small>
        <h1>지금 주목받고 있는 전시회 BEST 3</h1>
      </div>
      <div className="bestContainer">
        {data1.map((item) => (
          <Best
            key={item.id}
            content={item.content}
            location={item.location}
            period={item.period}
            favorites={item.favorites}
          />
        ))}
      </div>
      <hr />
      <Filter />
      <div className="listContainer">
        {data2.map((item) => (
          <Card
            key={item.id}
            content={item.content}
            location={item.location}
            period={item.period}
            favorites={item.favorites}
          />
        ))}
      </div>
    </>
  );
}

export default LandingPage;
