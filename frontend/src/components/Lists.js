import React from "react";
import "./Lists.css";
import locationDot2 from "../assets/location_white.png";
import heart from "../assets/heart.png";
import { useQuery } from "@tanstack/react-query";
import { getExhibits } from "../api/exhibit";
import { Link } from "react-router-dom";

// 전시회 목록 하나의 아이템을 렌더링하는 컴포넌트
function List({ content, id, location, period, thumbnail }) {
  return (
    <a className="list-link">
      <Link to={`/detail/${id}`}>
        <div className="listItem">
          <img className="listBox" src={thumbnail}></img>
          <div className="listText">
            <p className="list-content" title={content}>
              {content}
              <img className="list-heart" src={heart} alt="heart" />
            </p>
            <img
              className="list-locationIcon2"
              src={locationDot2}
              alt="location2"
            />
            <p className="list-location">{location}</p>
            <p className="list-period">{period}</p>
          </div>
        </div>
      </Link>
    </a>
  );
}

// 전시회 목록을 렌더링하는 메인 컴포넌트
export default function Lists() {
  // 원하는 startDate와 endDate 설정
  const startDate = "20241122";
  const endDate = "20241231";

  // useQuery 훅을 사용해 데이터를 가져옴
  const { data, isLoading, error } = useQuery({
    queryKey: ["exhibitions", { startDate, endDate }],
    queryFn: () => getExhibits({ startDate, endDate }),
  });

  // 데이터 로딩 중일 때 표시할 내용
  if (isLoading) return <p>Loading...</p>;

  // 오류 발생 시 표시할 내용
  if (error) return <p>Error: {error.message}</p>;

  // 데이터가 비어 있을 때 표시할 내용
  if (!data || data.length === 0) {
    return <p>No exhibitions available.</p>;
  }

  // 데이터가 정상적으로 로드되었을 때 전시회 목록을 렌더링
  return (
    <div className="container11">
      <div className="container1-3">
        <div className="listContainer">
          {data.map((item) => (
            <List
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
    </div>
  );
}
