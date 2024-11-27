import React from "react";
import "../styles/MyNearPage.css";
import Lists from "../components/Lists.js";
import heartImage from "../assets/prime_heart.png";
import calendar from "../assets/calendar.png";
import position from "../assets/position.png";
import arrowDown from "../assets/arrowDown.png";
import close from "../assets/close.png";
import map from "../assets/map.png";
import target from "../assets/target.png";
import positionred from "../assets/positionred.png";
import filter from "../assets/filter.png";
//import Card from "../components/Card/Card";
// import CardList from "../components/Card/CardList";


const MyNearPage = () => (
  <>
    <div className="lists-container">
      <Lists />
  </div>

    {/* 상단 부분 */}
    <div>
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
        className="position"
        style={{ top: "90px", left: "330px" }}
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
      <div className="container-horizontal2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`circle circle${i + 1}`}></div>
        ))}
      </div>

      <div className="close-horizontal2">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={close} className={`close close${i + 1}`} />
        ))}
      </div>

      <img src={map} alt="map" className="map2" />
      <img src={target} alt="target" className="target2" />
      <img src={positionred} alt="positionred" className="positionred2" />
      <img src={filter} alt="filter" className="filter2" />
     
    </div>
  </>
);

export default MyNearPage;
