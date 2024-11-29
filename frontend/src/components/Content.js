import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Content.css'; 

function content() {
  const [activeButton, setActiveButton] = useState(""); // 클릭된 버튼 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  // 버튼 클릭 핸들러
  const handleButtonClick = (buttonName, path) => {
    setActiveButton(buttonName); // 클릭된 버튼 상태 업데이트
    navigate(path); // 지정된 경로로 이동
  };

  return (
    <div className="detailCon">
      <div className="detailCon1">
        <div className="titleName">
          스웨덴 국립미술관 컬렉션
          <p className="subtitleName">새벽부터 황혼까지</p>
        </div>
        <div>
          <div className="poster1">
            <table className="poster-info">
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
                <td className="price1">가격</td>
                <td>
                  성인 (만 19세 이상) 20,000원
                  <br />
                  청소년 (만 13세~만 18세) 16,000원
                  <br />
                  어린이 (만 4세~만 12세) 12,000원
                </td>
              </tr>
            </table>
          </div>
        </div>
        <button href="#" className="book1">
          예매하러 가기
        </button>
        <div className="detailCon2">
        <div className="index1">
          <button
            className={`index-info ${activeButton === "info" ? "clicked" : ""}`}
            onClick={() => handleButtonClick("info", "/info")}
          >
            위치안내
          </button>
          <button
            className={`index-review ${
              activeButton === "review" ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick("review", "/detail")}
          >
            관람 후기
          </button>
          <button
            className={`index-QnA ${activeButton === "qna" ? "clicked" : ""}`}
            onClick={() => handleButtonClick("qna", "/mynear")}
          >
            전시회 주변
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
export default content;