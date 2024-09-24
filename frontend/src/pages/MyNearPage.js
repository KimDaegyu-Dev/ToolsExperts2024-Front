import React from "react";
import "../styles/MyNearPage.css";
import heartImage from "../assets/prime_heart.png";
import calendar from "../assets/calendar.png";
import position from "../assets/position.png";
import arrowDown from "../assets/arrowDown.png";
import close from "../assets/close.png";
import map from "../assets/map.png";
import target from "../assets/target.png";
import positionred from "../assets/positionred.png";
import filter from "../assets/filter.png";
import Card from "../components/Card/Card";
// import CardList from "../components/Card/CardList";

const exhibits = [
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

const MyNearPage = () => (
  <>
    {/* 상단 부분 */}
    <div>
      <img
        src={calendar}
        alt="calendar"
        className="calendar"
        style={{ top: "90px", left: "145px" }}
      />
      <div className="datef" style={{ top: "100px", left: "190px" }}>
        2024. 07. 21
      </div>
      <img
        src={position}
        alt="position"
        className="position"
        style={{ top: "90px", left: "330px" }}
      />
      <div className="placef" style={{ top: "100px", left: "370px" }}>
        부산광역시 전체
      </div>
      <img
        src={arrowDown}
        alt="arrowDown"
        className="arrowDown"
        style={{ top: "100px", left: "505px" }}
      />
      <div className="filter-text" style={{ top: "150px", left: "145px" }}>
        필터
      </div>
      <div className="container-horizontal">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`circle circle${i + 1}`}></div>
        ))}
      </div>

      <div className="close-horizontal">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={close} className={`close close${i + 1}`} />
        ))}
      </div>

      <img src={map} alt="map" className="map" />
      <img src={target} alt="target" className="target" />
      <img src={positionred} alt="positionred" className="positionred" />
      <img src={filter} alt="filter" className="filter" />
      {/* 전시목록 배열 10개 */}
      {exhibits.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          place={item.place}
          period={item.date}
          favorites={item.favorites}
        />
      ))}
    </div>
  </>
);

export default MyNearPage;
