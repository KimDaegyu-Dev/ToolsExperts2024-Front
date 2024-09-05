import React from "react";
import "./myNearPage.css";
import heartImage from "../../../../public/assets/prime_heart.png";
import calendar from "../../../../public/assets/calendar.png";
import position from "../../../../public/assets/position.png";
import arrow from "../../../../public/assets/arrow.png";
import close from "../../../../public/assets/close.png";
import map from "../../../../public/assets/map.png";
import target from "../../../../public/assets/target.png";
import positionred from "../../../../public/assets/positionred.png";
import filter from "../../../../public/assets/filter.png";
import Image from "next/image";


const exhibits = [
 
  {
    id: 1,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
 
  {
    id: 2,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 3,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 4,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 5,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 6,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 7,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 8,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 9,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
  {
    id: 10,
    title: "스웨덴 국립미술관 컬렉션",
    place: "마이아트뮤지엄",
    date: "2024.06.05 ~ 2024.09.18",
  },
];

const MynearPage = () => (
  <>
    
    {/* 상단 부분 */}
    <div>
    <Image src={calendar} alt="calendar" className="calendar" style={{ top: "90px", left: "145px" }} />
    <div className="datef" style={{ top: "100px", left: "190px" }}>
        2024. 07. 21
    </div>
    <Image src={position} alt="position" className="position" style={{ top: "90px", left: "330px" }} />
    <div className="placef" style={{ top: "100px", left: "370px" }}>
        부산광역시 전체
    </div>
    <Image src={arrow} alt="arrow" className="arrow" style={{ top: "100px", left: "505px" }} />
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
        <Image 
        key={i} 
        src={close} 
        className={`close close${i + 1}`} 
      />
      ))}
    </div>

    <Image src={map} alt="map" className="map" />
    <Image src={target} alt="target" className="target" />
    <Image src={positionred} alt="positionred" className="positionred" />
    <Image src={filter} alt="filter" className="filter" />
    </div>
    
    {/* 전시목록 배열 10개 */}
    {exhibits.map((exhibit, i) => (
      <div key={i}>
        <div
          className={`box box${i + 1}`}
          style={{
            top: `${745 + 255 * Math.floor(i / 2)}px`,
            left: `${145 + 565 * (i % 2)}px`,
          }}
        ></div>
        <div
          className={`title title${i + 1}`}
          style={{
            top: `${755 + 255 * Math.floor(i / 2)}px`,
            left: `${360 + 565 * (i % 2)}px`,
          }}
        >
          {exhibit.title}
        </div>
        <i
          className="material-icons"
          style={{
            position: "absolute",
            width: "17px",
            height: "17px",
            top: `${780 + 255 * Math.floor(i / 2)}px`,
            left: `${357 + 565 * (i % 2)}px`,
            color: "black",
          }}
        >
          location_on
        </i>
        <div
          className={`place place${i + 1}`}
          style={{
            top: `${787 + 255 * Math.floor(i / 2)}px`,
            left: `${383 + 565 * (i % 2)}px`,
          }}
        >
          {exhibit.place}
        </div>
        <Image
          src={heartImage}
          alt="heart"
          className="heart"
          style={{
            top: `${755 + 255 * Math.floor(i / 2)}px`,
            left: `${665 + 565 * (i % 2)}px`,
          }}
        />
        <div
          className={`date date${i + 1}`}
          style={{
            top: `${900 + 255 * Math.floor(i / 2)}px`,
            left: `${540 + 565 * (i % 2)}px`,
          }}
        >
          {exhibit.date}
        </div>
      </div>
    ))}
  </>
);

export default MynearPage;


