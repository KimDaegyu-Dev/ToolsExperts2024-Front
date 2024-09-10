// import React from "react";
import styles from "./LandingPage.module.css";
import locationDot from "../../../../public/assets/location_on.png"; // 위치 아이콘
import calender from "../../../../public/assets/calender.png"; // 달력 아이콘
import heart from "../../../../public/assets/heart.png"; // 하트 아이콘
import arrow from "../../../../public/assets/arrow.png"; // 화살표 아이콘
import info from "../../../../public/assets/page_info.png"; //
import close from "../../../../public/assets/close.png"; //
import Image from "next/image";
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
    <div className={styles.bestBox}>
      <p className="best-content">
        {content}
        <Image className="best-heart" src={heart} alt="heart" />
      </p>
      <Image className="best-locationIcon" src={locationDot} alt="location" />
      <p className="best-location">{location}</p>
      <p className="best-period">{period}</p>
    </div>
  );
}
function List({ content, location, period }) {
  return (
    <div className="listItem">
      <div className="listBox"></div>
      <div className="listText">
        <p className="list-content">
          {content}
          <Image className="list-heart" src={heart} alt="heart" />
        </p>
        <Image className="list-locationIcon" src={locationDot} alt="location" />
        <p className="list-location">{location}</p>
        <p className="list-period">{period}</p>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <div>
        <small>7월 4주차</small>
        <h1>지금 주목받고 있는 전시회 BEST 5</h1>
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
      <Image className="arrow-icon1" src={arrow} alt="arrow" />
      <hr />
      <div>
        <Image className="calender-icon" src={calender} alt="달력 아이콘" />
        <p className="calender-text">2024.07.21</p>
      </div>
      <div>
        <Image className="location-icon" src={locationDot} alt="location" />
        <p className="location-text">부산광역시 전체</p>
        <Image className="arrow-icon2" src={arrow} alt="arrow" />
        {/* <IoIosArrowDown className="location-arrow" /> */}
      </div>
      <div className="filter-text">필터</div>
      <div className="filter">
        <Image className="close" src={close} alt="close" />
      </div>

      <Image className="pageInfo" src={info} alt="page info" />
      <div className="listContainer">
        {data2.map((item) => (
          <List
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
