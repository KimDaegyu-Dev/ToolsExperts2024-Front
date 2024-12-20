import React, { useEffect, useState } from "react";
import "../components/Header.css";
import search from "../assets/search.png";
import heart from "../assets/heart.png";
import profile from "../assets/profile.png";
import MyPage from "../pages/MyPage";
import { Link, useNavigate } from "react-router-dom";
import { useGalleristContext } from "../contexts/ExhibitContext";
import client from "../api/client";
import { logout } from "../api/auth";

export default function Header() {
  const [isMyPageOpen, setMyPageOpen] = useState(false);
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useGalleristContext();

  const handleSearchFocus = () => {
    setMyPageOpen(false);
    // removeRipple();
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsLogin(true);
      client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);
  // const removeRipple = () => {
  //   const profileCircle = document.querySelector(".profile-circle");
  //   const rippleExists = profileCircle?.querySelector(".ripple");
  //   if (rippleExists) rippleExists.remove();
  // };
  const handleProfileClick = (e) => {
    e.preventDefault();
    // e.stopPropagation();

    // const profileCircle = e.currentTarget;
    // const rippleExists = profileCircle.querySelector(".ripple");

    // if (rippleExists) {
    //   rippleExists.remove();
    // } else {
    //   const ripple = document.createElement("span");
    //   ripple.classList.add("ripple");
    //   profileCircle.appendChild(ripple);
    // }

    setMyPageOpen((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.reload();
    logout();
  };

  const handleNavigation = (path) => {
    setMyPageOpen(false);
    // removeRipple();
    navigate(path);
  };

  return (
    <div>
      <header className="header">
        <Link to="/Landing" className="logo"></Link>
        <ul>
          <li>
            <span onClick={() => handleNavigation("/landing")}>전시 추천</span>
          </li>
          <li>
            <span onClick={() => handleNavigation("/follow")}>팔로우</span>
          </li>
          <li>
            <span onClick={() => handleNavigation("/mynear")}>내 근처</span>
          </li>
          <li>
            <span onClick={() => handleNavigation("/schedule")}>일정별</span>
          </li>
        </ul>
        <form className="search">
          <input
            className="search-text"
            type="seaarch-text"
            spellCheck="false"
            onFocus={handleSearchFocus}
          />
        </form>
        <a>
          <img className="search-icon" src={search} alt="search" />
        </a>
        {isLogin ? (
          <>
            <a>
              <img className="heart-icon" src={heart} alt="heart" />
            </a>
            <a className="profile-circle" href="#" onClick={handleLogout}>
              <img className="profile-icon" src={profile} alt="profile" />
            </a>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className="header-login">로그인</div>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <div className="header-register">회원가입</div>
            </Link>
          </>
        )}

        {isMyPageOpen && <MyPage />}
      </header>
    </div>
  );
}
