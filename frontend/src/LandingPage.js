import React from "react";
import "./LandingPage.css";
import locationDot from "./assets/location_on.png"; // 위치 아이콘

const data1 = [
  {
    id: "best1",
    content: "전시회 이름 1",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 1
      </>
    ),
  },
  {
    id: "best2",
    content: "전시회 이름 2",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 2
      </>
    ),
  },
  {
    id: "best3",
    content: "전시회 이름 3",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 3
      </>
    ),
  },
];
const data2 = [
  {
    id: 1,
    content: "전시회 이름 1",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 1
      </>
    ),
  },
  {
    id: 2,
    content: "전시회 이름 2",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 2
      </>
    ),
  },
  {
    id: 3,
    content: "전시회 이름 3",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 3
      </>
    ),
  },
  {
    id: 4,
    content: "전시회 이름 4",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 4
      </>
    ),
  },
  {
    id: 5,
    content: "전시회 이름 4",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 4
      </>
    ),
  },
  {
    id: 6,
    content: "전시회 이름 4",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 4
      </>
    ),
  },
  {
    id: 7,
    content: "전시회 이름 4",
    location: (
      <>
        <img src={locationDot} alt="location" />
        위치 4
      </>
    ),
  },
];

function Best({ content, location }) {
  return (
    <div className="bestBox">
      <p>{content}</p>
      <p>{location}</p>
    </div>
  );
}
function List({ content, location }) {
  return (
    <div className="listItem">
      <div className="listBox"></div>
      <div className="listText">
        <p>{content}</p>
        <p>{location}</p>
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
          <Best key={item.id} content={item.content} location={item.location} />
        ))}
      </div>
      <hr />
      <div>
        {/* <FaCalendar className="calender-icon" /> */}
        <p className="calender-text">2024.07.21</p>
      </div>
      <div>
        {/* <FaLocationDot className="location-icon" /> */}
        <p className="location-text">부산광역시 전체</p>
        {/* <IoIosArrowDown className="location-arrow" /> */}
      </div>
      <div className="filter">필터</div>
      <div className="listContainer">
        {data2.map((item) => (
          <List key={item.id} content={item.content} location={item.location} />
        ))}
      </div>
    </>
  );
}

export default LandingPage;
