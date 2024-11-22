import React from "react";
import "../styles/CardListSection.css";
import { Card } from "../components/Card/Card";
import { useQuery } from "react-query";
import { getExhibits } from "../api/exhibit"; // 혹은 다른 경로에 맞게 설정

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

function CardListSection() {
  const { data } = useQuery("exhibits", getExhibits);

  return (
    <div className="listContainer">
      {data
        ? data.map((item, idx) => (
            <Card
              key={idx}
              thumbnail={item.thumbnail}
              title={item.title}
              place={item.place}
              from={item.startDate}
              to={item.endDate}
              favorites={item.favorites}
            />
          ))
        : data2.map((item) => (
            <Card
              key={item.id}
              title={item.content}
              place={item.location}
              period={item.period}
              favorites={item.favorites}
            />
          ))}
    </div>
  );
}

export default CardListSection;
