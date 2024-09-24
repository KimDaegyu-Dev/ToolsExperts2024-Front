import React from "react";
import info from "../assets/page_info.png"; //
import arrow from "../assets/arrow.png"; // 화살표 아이콘
import calender from "../assets/calender.png"; // 달력 아이콘
import locationDot from "../assets/location_on.png"; // 위치 아이콘
import "./Filter.css";
export default function Filter() {
  return (
    <div className="filter-container">
      <div className="calender-location">
        <div>
          <img className="calender-icon" src={calender} alt="달력 아이콘" />
          <p className="calender-text">2024.07.21</p>
        </div>
        <div>
          <img className="location-icon" src={locationDot} alt="location" />
          <p className="location-text">부산광역시 전체</p>
          <img className="arrow-icon2" src={arrow} alt="arrow" />
          {/* <IoIosArrowDown className="location-arrow" /> */}
        </div>
      </div>
      <img className="pageInfo" src={info} alt="page info" />
    </div>
  );
}
