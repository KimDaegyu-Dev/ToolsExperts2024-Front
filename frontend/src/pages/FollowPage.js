import React from "react";
import "../styles/FollowPage.css";
import heartImage from "../assets/prime_heart.png";
import locationDot from "../assets/location_on.png";
import Card from "../components/Card/Card";

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
];

const FollowPage = () => (
  <>
    <div className="subList">구독 목록</div>
    {/* 상단 부분 */}
    <div>
      <h1 className="author">작가</h1>
      <hr className="firstHr" />
      <hr className="secondHr" />
      <h2 className="gallery">갤러리/전시장</h2>
    </div>
    <div className="container-horizontal">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`circle circle${i + 1}`}></div>
      ))}
      <div className="mini"></div>
    </div>
    <div className="name-horizontal">
      {["리움미술관", "아모레퍼시픽", "예술의 전당", "대림미술관", "SETEC"].map(
        (name, i) => (
          <div key={i} className={`name name${i + 1}`}>
            {name}
          </div>
        )
      )}
    </div>

    {/* 새로운 전시 부분 */}
    <div>
      <div className="subTitle1">새로운 전시</div>
      <div className="box"></div>
      <div className="collection" style={{ top: "460px", left: "560px" }}>
        스웨덴 국립미술관 컬렉션
      </div>
      <i
        className="material-icons"
        style={{
          position: "absolute",
          width: "17px",
          height: "17px",
          top: "489px",
          left: "558px",
          color: "black",
        }}
      >
        location_on
      </i>
      <div className="place" style={{ top: "490px", left: "585px" }}>
        마이아트뮤지엄
      </div>
      <img
        src={heartImage}
        alt="heart"
        className="heart"
        style={{ top: "460px", left: "855px", color: "#ffffff" }}
      />
      <div className="date" style={{ top: "620px", left: "694px" }}>
        2024.06.05 ~ 2024.09.18
      </div>
    </div>

    {/* 지난 전시 목록 */}
    <div>
      <div className="subTitle2">지난 전시 목록</div>
    </div>
    {exhibits.map((item) => (
      <Card
        key={item.id}
        title={item.title}
        place={item.place}
        period={item.date}
        favorites={item.favorites}
      />
    ))}
  </>
);

export default FollowPage;
