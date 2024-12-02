import React from "react";
import "../styles/MyPage.css";
import roundHeart from "../assets/roundHeart.png";

function MyPage() {
  return (
    <>
      <div className="modal">
        <div className="container1">
          <div className="Name">김민주님 안녕하세요!</div>
          <a href="#" className="myInfo">
            내 정보
          </a>
          <div className="attendedContainer">
            <p className="attended-text">이번 달에 관람한 전시회</p>
            <p className="attended-num">
              총 <span>7</span>개
            </p>
            <div className="max1"></div>
            <div className="current1"></div>
            <p className="zero">0개</p>
            <p className="ten">10개</p>
          </div>
          <div className="myPage">마이페이지</div>
          <a href="#" className="BookmarkBox">
            <img className="roundHeart1" src={roundHeart} alt="roundHeart" />
            <div>내가 찜해놓은 전시</div>
          </a>
          <a href="#" className="PreviousReviewBox">
            <img className="roundHeart1" src={roundHeart} alt="roundHeart" />
            <div>지난 리뷰 작성</div>
          </a>
          <a href="#" className="MyReviewBox">
            <img className="roundHeart1" src={roundHeart} alt="roundHeart" />
            <div>내가 남긴 리뷰</div>
          </a>
          <a href="#" className="logout">
            로그아웃
          </a>
        </div>
      </div>
    </>
  );
}
export default MyPage;
