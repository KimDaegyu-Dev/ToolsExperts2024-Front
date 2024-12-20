import React from "react";
import "../styles/LandingPage.css";
import locationDot from "../assets/location_on.png"; // 위치 아이콘
import locationDot2 from "../assets/location_white.png"; // 위치 아이콘
import locationDot3 from "../assets/location_black.png"; // 위치 아이콘
import calender from "../assets/calender.png"; // 달력 아이콘
import heart from "../assets/heart.png"; // 하트 아이콘
import background from "../assets/background.png";
import BackLine from "../assets/BackLine.png";
import Lists from "../components/Lists.js";
import { useQuery } from "react-query";
import { getExhibits } from "../api/exhibit.js";
import { Link } from "react-router-dom";

const data1 = [
  {
    id: "best1",
    content: "전시회 이름 1",
    location: "위치 1",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: "best2",
    content: "전시회 이름 2",
    location: "위치 2",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: "best3",
    content: "전시회 이름 3",
    location: "위치 3",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
];
// const data2 = [
//   {
//     id: 1,
//     content: "전시회 이름 1",
//     location: "위치 1",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 2,
//     content: "전시회 이름 2",
//     location: "위치 2",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 3,
//     content: "전시회 이름 3",
//     location: "위치 3",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 4,
//     content: "전시회 이름 4",
//     location: "위치 4",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 5,
//     content: "전시회 이름 5",
//     location: "위치 5",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 6,
//     content: "전시회 이름 6",
//     location: "위치 6",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 7,
//     content: "전시회 이름 7",
//     location: "위치 7",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 8,
//     content: "전시회 이름 8",
//     location: "위치 8",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
//   {
//     id: 9,
//     content: "전시회 이름 9",
//     location: "위치 8",
//     period: "2024.06.05 ~ 2024.09.18",
//     url: "#",
//   },
// ];

function Best({ id, content, location, period, thumbnail }) {
  return (
    <Link
      to={`/detail/${id}`}
      className="best-link"
      style={{ textDecoration: "none" }}
    >
      <div
        className="bestBox"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
        }}
      >
        <p className="best-content">{content}</p>
        <img className="best-locationIcon" src={locationDot2} alt="location" />
        <p className="best-location">{location}</p>
        <p className="best-period">{period}</p>
      </div>
    </Link>
  );
}
// function List({ content, location, period, url }) {
//   return (
//     <a href={url} className="list-link">
//       <div className="listItem">
//         <div className="listBox"></div>
//         <div className="listText">
//           <p className="list-content">
//             {content}
//             <img className="list-heart" src={heart} alt="heart" />
//           </p>
//           <img
//             className="list-locationIcon2"
//             src={locationDot2}
//             alt="location2"
//           />
//           <p className="list-location">{location}</p>
//           <p className="list-period">{period}</p>
//         </div>
//       </div>
//     </a>
//   );
// }

function LandingPage() {
  // 원하는 startDate와 endDate 설정
  const startDate = "20241122";
  const endDate = "20241231";

  // useQuery 훅을 사용해 데이터를 가져옴
  const { data, isLoading, error } = useQuery({
    queryKey: ["exhibitions", { startDate, endDate }],
    queryFn: () => getExhibits({ startDate, endDate }),
  });
  const bestExhibits = data?.slice(0, 3) || [];

  // 데이터 로딩 중일 때 표시할 내용
  if (isLoading) return <p>Loading...</p>;

  // 오류 발생 시 표시할 내용
  if (error) return <p>Error: {error.message}</p>;

  // 데이터가 비어 있을 때 표시할 내용
  if (!data || data.length === 0) {
    return <p>No exhibitions available.</p>;
  }
  return (
    <>
      <div className="container11">
        <div className="container1-1">
          <small className="small">7월 4주차</small>
          <h1 className="main">지금 주목받고 있는 전시회 BEST 3</h1>
          <img className="background" src={background} alt="배경" />
          <img className="background" src={background} alt="배경" />
          <img className="background" src={background} alt="배경" />
          <img className="BackLine1" src={BackLine} alt="배경 선" />
          <img className="BackLine2" src={BackLine} alt="배경 선" />
          <img className="BackLine3" src={BackLine} alt="배경 선" />

          <div className="bestContainer">
            {bestExhibits.map((item) => (
              <Best
                key={item.id}
                id={item.id}
                content={item.title}
                location={item.place}
                period={`${item.start_date} ~ ${item.end_date}`} // 기간을 표시
                thumbnail={item.thumbnail}
              />
            ))}
          </div>
        </div>
        <div className="container1-2">
          <hr />
          <img className="calender-icon1" src={calender} alt="달력 아이콘" />
          <p className="calender-text1">2024.07.21</p>
          <img className="location-icon" src={locationDot} alt="location" />
          <p className="location-text">부산광역시 전체</p>
        </div>
        <div className="container1-3">
          <Lists data={data} />
          {/* <div className="listContainer">
            {data2.map((item) => (
              <List
                key={item.id}
                content={item.content}
                location={item.location}
                period={item.period}
                favorites={item.favorites}
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
