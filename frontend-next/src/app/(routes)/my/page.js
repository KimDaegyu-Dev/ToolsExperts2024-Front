import React from "react";
import "./MyPage.css";
import roundHeart from "../../../../assets/roundHeart.png";

function MyPage() {
  return (
    <>
      <div className="container">
        <p>
          <p className="circle"></p>
          <span className="name">김민주님 안녕하세요!</span>
        </p>
        <p className="myInfo">내 정보</p>
        <div className="attendedContainer">
          <p className="attended-text">이번 달에 관람한 전시회</p>
          <p className="attended-num">
            총 <span>7</span>개
          </p>
          <div className="max"></div>
          <div className="current"></div>
          <p className="zero">0개</p>
          <p className="ten">10개</p>
        </div>
        <div className="myPage">마이페이지</div>
        <div className="BookmarkBox">
          <Image className="roundHeart" src={roundHeart} alt="roundHeart" />
          <p>내가 찜해놓은 전시</p>
        </div>
        <div className="PreviousReviewBox">
          <Image className="roundHeart" src={roundHeart} alt="roundHeart" />
          <p>지난 리뷰 작성</p>
        </div>
        <div className="MyReviewBox">
          <Image className="roundHeart" src={roundHeart} alt="roundHeart" />
          <p>내가 남긴 리뷰</p>
        </div>
        <div className="logout">로그아웃</div>
      </div>
    </>
  );
}
export default MyPage;
