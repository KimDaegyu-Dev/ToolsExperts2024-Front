import "./Header.css";
import search from "../assets/search.png";
import heart from "../assets/heart.png";
import profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import useExhibits from "../hooks/useExhibits";

export default function Header() {
  //   //   convertXmlToJson(data);
  //   const { mutate: getExhibits } = useExhibits();
  //   getExhibits({ from: "20240901", to: "20240901", page: "1", rows: "10" });
  return (
    <header className="header">
      <Link to="/" className="logo">
        {/* <div className="logo"></div> */}
      </Link>
      <ul>
        <li>
          <Link to="/">전시 추천</Link>
        </li>{" "}
        <li>
          <Link to="/follow">팔로우</Link>{" "}
        </li>{" "}
        <li>
          <Link to="/mynear">내 근처</Link>{" "}
        </li>{" "}
        <li>
          <Link to="/schedule">일정별</Link>{" "}
        </li>
      </ul>
      <div className="user-bar">
        <div className="search">
          <img className="search-icon" src={search} alt="search" />
        </div>
        <div className="header-icons">
          <img className="heart-icon" src={heart} alt="heart" />
          <img className="profile-icon" src={profile} alt="profile" />
        </div>
      </div>
    </header>
  );
}
