import React from "react";
import "../styles/InfoPage.css";
//import Header from "../components/Header.js"; 
//import star2 from "../assets/star.png"; // 별 아이콘


const InfoPage = () => (
  <div className="info-page">
    <div className="title2">
      스웨덴 국립미술관 컬렉션
      <p className="subtitle2">새벽부터 황혼까지</p>
    </div>
    <div className="poster-container2">
      <div className="poster2">
      <table className="info2">
        <tbody>
          <tr>
            <td>장소</td>
            <td>마이아트뮤지엄</td>
          </tr>
          <tr>
            <td>기간</td>
            <td>2024.03.21~2024.08.25</td>
          </tr>
          <tr>
            <td>관람시간</td>
            <td>60분</td>
          </tr>
          <tr>
            <td>관람연령</td>
            <td>전체관람가</td>
          </tr>
          <tr>
            <td className="price2">가격</td>
            <td>
              <div className="price-details">
                성인 (만 19세 이상) 20,000원
                <br />
                청소년 (만 13세~만 18세) 16,000원
                <br />
                어린이 (만 4세~만 12세) 12,000원
              </div>
            </td>
          </tr>
        </tbody>
      </table>

         
      </div>
    </div>
    <div className="book2">예매하러 가기</div>    
    <div className="index2">
      <button className="item">위치안내</button>
      <button className="item">관람후기</button>
      <button className="item">전시회 주변</button> 
    </div>

    <div className="container">
      <div className="left-section">
        <p>전시장명</p>
        <p>얼리버드 관람 정보</p>
      </div>

      <div className="divider"></div> 

      <div className="right-section">
        <p>관람일정 : 2024년 3월 21일 - 8월 25일 (휴관일 없음)</p>
        <p>관람시간 : 월-일 10:00 - 19:40 (입장마감 19:00)</p>
        <br />
        <p>관람일정 : 2024년 3월 21일 - 5월 17일 까지</p>
        <p>관람시간 : 월-일 10:00 - 19:40 (입장마감 19:00)</p>
        <p>취소기간 : 2024년 5월 17일 19:00 까지 (* 이후 교환/환불 및 사용불가)</p>
      </div>
    </div>

    </div> 
);

export default InfoPage;
