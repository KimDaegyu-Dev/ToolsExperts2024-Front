import React from "react";
import "../styles/MyNearPage.css";
import Lists from "../components/Lists.js";
import calendar from "../assets/calendar.png";
import position from "../assets/position.png";
import arrowDown from "../assets/arrowDown.png";
import MapComponent from "../components/MapComponent.js";
import target from "../assets/target.png";

const MyNearPage = () => (
  <>
    {/* MapComponent와 listall1을 하나의 섹션으로 묶음 */}
    <div className="top-section">
      <div className="maps">
        <MapComponent />
        {/* target 아이콘 추가 */}
        <img src={target} alt="target-icon" className="target-icon" />
      </div>

      <div className="listall1">
        <img
          src={calendar}
          alt="calendar2"
          className="calendar2"
          style={{ top: "90px", left: "145px" }}
        />
        <div className="datef2" style={{ top: "100px", left: "190px" }}>
          2024. 07. 21
        </div>
        <img
          src={position}
          alt="position2"
          className="position2"
          style={{ top: "90px", left: "335px" }}
        />
        <div className="placef2" style={{ top: "100px", left: "370px" }}>
          부산광역시 전체
        </div>
        <img
          src={arrowDown}
          alt="arrowDown2"
          className="arrowDown2"
          style={{ top: "100px", left: "505px" }}
        />
        <div className="filter-text2" style={{ top: "150px", left: "145px" }}>
          필터
        </div>
      </div>
    </div>

    {/* Lists 컴포넌트 */}
    <div className="lists-container1">
      <Lists />
    </div>
  </>
);

export default MyNearPage;
