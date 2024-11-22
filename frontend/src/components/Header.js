import React from "react";
import "../components/Header.css";
import search from "../assets/search.png";
import heart from "../assets/heart.png";
import profile from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header">
        <Link to="/Landing" className="logo"></Link>
        <ul>
          <li>
            <span
              onClick={() => {
                navigate("/detail");
              }}
            >
              전시 추천
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                navigate("/detail");
              }}
            >
              팔로우
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                navigate("/detail");
              }}
            >
              내 근처
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                navigate("/schedule");
              }}
            >
              일정별
            </span>
          </li>
        </ul>
        <a href="#">
          <div className="search"></div>
        </a>
        <a href="#">
          <img className="search-icon" src={search} alt="search" />
        </a>
        <a href="#">
          <img className="heart-icon" src={heart} alt="heart" />
        </a>
        <a href="#">
          <img className="profile-icon" src={profile} alt="profile" />
        </a>
      </header>
    </div>
  );
}
