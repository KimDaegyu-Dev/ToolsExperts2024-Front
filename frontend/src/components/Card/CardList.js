import React from "react";
import Card from "./Card";
import "./CardList.css";
export default function CardList() {
  const data = [
    {
      id: 1,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },

    {
      id: 2,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 3,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 4,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 5,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 6,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 7,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 8,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 9,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
    {
      id: 10,
      title: "스웨덴 국립미술관 컬렉션",
      place: "마이아트뮤지엄",
      period: "2024.06.05 ~ 2024.09.18",
    },
  ];
  return (
    <div className="cardlist-container">
      {data.map((item) => (
        <Card
          key={item.id}
          content={item.title}
          location={item.place}
          period={item.period}
          favorites={item.favorites}
        />
      ))}
    </div>
  );
}
