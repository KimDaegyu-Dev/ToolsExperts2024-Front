import React from "react";
import "../styles/FollowPage.css";
import locationDot from "../assets/location_on.png";
import heart from "../assets/heart.png";
import { useQuery } from "react-query";
import { getExhibits } from "../api/exhibit"; 

const followedData = [
  { id: 1, title: "팔로우 전시회 1", location: "위치 1", period: "2024.06.05 ~ 2024.09.18" },
  { id: 2, title: "팔로우 전시회 2", location: "위치 2", period: "2024.06.05 ~ 2024.09.18" },
  { id: 3, title: "팔로우 전시회 3", location: "위치 3", period: "2024.06.05 ~ 2024.09.18" },
  { id: 4, title: "팔로우 전시회 4", location: "위치 4", period: "2024.06.05 ~ 2024.09.18" },
];


function FollowCard({ title, location, period }) {
  return (
    <div className="followBox">
      <p className="follow-title">
        {title}
        <img className="follow-heart" src={heart} alt="heart" />
      </p>
      <img className="follow-locationIcon" src={locationDot} alt="location" />
      <p className="follow-location">{location}</p>
      <p className="follow-period">{period}</p>
    </div>
  );
}

function FollowPage() {
  const { data } = useQuery("followedExhibits", getExhibits);

  return (
    <>
      <div>
        <h1>내가 팔로우한 전시회</h1>
      </div>

      {/* Follow Card Section */}
      <div className="followContainer">
        {data
          ? data.map((item, idx) => (
              <FollowCard
                key={idx}
                title={item.title}
                location={item.location}
                period={item.period}
              />
            ))
          : followedData.map((item) => (
              <FollowCard
                key={item.id}
                title={item.title}
                location={item.location}
                period={item.period}
              />
            ))}
      </div>
    </>
  );
}

export default FollowPage;
