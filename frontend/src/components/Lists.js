import './Lists.css'; 
import locationDot from "../assets/location_on.png"; // 위치 아이콘
import locationDot2 from "../assets/location_white.png"; // 위치 아이콘
import locationDot3 from "../assets/location_black.png"; // 위치 아이콘
import calender from "../assets/calender.png"; // 달력 아이콘
import heart from "../assets/heart.png"; // 하트 아이콘

const data2 = [
  {
    id: 1,
    content: "전시회 이름 1",
    location: "위치 1",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: 2,
    content: "전시회 이름 2",
    location: "위치 2",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: 3,
    content: "전시회 이름 3",
    location: "위치 3",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: 4,
    content: "전시회 이름 4",
    location: "위치 4",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: 5,
    content: "전시회 이름 5",
    location: "위치 5",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: 6,
    content: "전시회 이름 6",
    location: "위치 6",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: 7,
    content: "전시회 이름 7",
    location: "위치 7",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
  {
    id: 8,
    content: "전시회 이름 8",
    location: "위치 8",
    period: "2024.06.05 ~ 2024.09.18",
    url: "#",
  },
];

function List({ content, location, period, url }) {
  return (
    <a href={url} className="list-link">
      <div className="listItem">
        <div className="listBox"></div>
        <div className="listText">
          <p className="list-content">
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
    </a>
  );
}

export default function Lists() {
  return (
    <>
      <div className="container11">
        <div className="container1-3">
          <div className="listContainer">
            {data2.map((item) => (
              <List
                key={item.id}
                content={item.content}
                location={item.location}
                period={item.period}
                favorites={item.favorites}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



  