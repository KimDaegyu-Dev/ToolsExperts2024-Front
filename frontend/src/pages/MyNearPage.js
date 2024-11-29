import React from "react";
import "../styles/MyNearPage.css";
import Lists from "../components/Lists.js";
import calendar from "../assets/calendar.png";
import position from "../assets/position.png";
import arrowDown from "../assets/arrowDown.png";
import target from "../assets/target.png";
import positionred from "../assets/positionred.png";
import MapComponent from "../components/MapComponent.js";


const MyNearPage = () => (
  <>
    <div className="lists-container1">
      <Lists />
    </div>
      
    {/* 상단 부분 */}
    <div>
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
        <div className="maps">
          <MapComponent />
        </div>
        <img src={target} alt="target" className="target2" />
        <img src={positionred} alt="positionred" className="positionred2" />
        
        <div className="mapname">
          스웨덴 국립미술관
        </div>
      </div>
    </div>
  </>
);

export default MyNearPage;
