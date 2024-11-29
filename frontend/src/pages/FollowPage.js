import React from "react";
import "../styles/FollowPage.css";
import Lists from "../components/Lists.js";
import cross from "../assets/cross.png";
import hrline from "../assets/hrline.png";
import location_white from "../assets/location_white.png";

function FollowPage() {
  const circleData = [
    { id: 1, name: "리움미술관" },
    { id: 2, name: "아모레퍼시픽" },
    { id: 3, name: "예술의 전당" },
    { id: 4, name: "대림미술관" },
    { id: 5, name: "SETEC" },
    { id: 6, name: "대림미술관" },
    { id: 7, name: "SETEC" },
    { id: 8, name: "대림미술관" },
  ];

  return (
    <>
      <div className="listall">
        <div className="topTitle">구독 목록</div>

        <div className="content">
          <div className="subTitle">갤러리/ 전시장</div>
          <img className="hrline" src={hrline} alt="hrline" />

          {/* 갤러리 프로필 섹션 */}
          <div className="circle-container">
            {circleData.map((item, index) => (
              <div className="circle-wrapper" key={item.id}>
                <div className={`circle ${index === 0 ? "circle1" : ""}`}>
                  {/* 첫 번째 요소에만 mini 추가 */}
                  {index === 0 && <div className="mini"></div>}
                </div>
                <div className="name">{item.name}</div>
              </div>
            ))}
            <div className="circle-wrapper">
              <button className="more-button">
              <img className="cross" src={cross} alt="cross" />
              </button>
              <div className="name">더보기</div>
            </div>
          </div>

          {/* 새로운 전시 섹션 */}
          <div className="subTitle2">새로운 전시</div>
          <div className="new-box">
            <p className="gallery">스웨덴 국립미술관 컬렉션</p>
            <p className="where">마이아트뮤지엄</p>
            <img className="position5" src={location_white} alt="location_white"/>
          </div>
          <div className="subTitle3">지난 전시 목록</div>
          <div className="lists-container1">
            <Lists />
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowPage;
