import React, { useState } from "react";
import "../styles/QnAPage.css";
import arrow from "../assets/arrow.png";
import box from "../assets/box.png";

const categories = [
  {
    name: "Top",
    value: "Top",
  },
  {
    name: "이용문의",
    value: "이용문의",
  },
  {
    name: "자주 묻는 질문",
    value: "자주 묻는 질문",
  },
  {
    name: "운영정책",
    value: "운영정책",
  },
  {
    name: "기타",
    value: "기타",
  },
];

const qnaList = [
  {
    category: "이용문의",
    question: "예매하기 버튼이 안 눌러지는데 해결방법이 궁금해요.",
    answer: "내용",
  },
  {
    category: "자주 묻는 질문",
    question:
      "전시 예매 후 다시 취소하고 싶은데, 환불 절차는 어디에서 밟을 수 있나요?",
    answer: "내용",
  },
  {
    category: "운영정책",
    question: "운영정책?",
    answer: "내용",
  },
  {
    category: "기타",
    question: "기타?",
    answer: "내용",
  },
];

function QnAPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Top");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredQnA = qnaList.filter(
    (item) => selectedCategory === "Top" || item.category === selectedCategory
  );

  return (
    <>
      <div className="title">
        스웨덴 국립미술관 컬렉션
        <p className="subtitle">새벽부터 황혼까지</p>
      </div>
      <div>
        <div className="poster">
          <table className="info">
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
              <td className="price">가격</td>
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
      <div className="book">예매하기</div>
      <table className="index">
        <tr>
          <td>관람정보</td>
          <td>리뷰</td>
          <td>Q&A</td>
        </tr>
      </table>

      <div className="category-container">
        {categories.map((category) => (
          <div
            key={category.value}
            className={`category-item ${
              selectedCategory === category.value ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.name}
          </div>
        ))}
      </div>
      <div className="accordion">
        {filteredQnA.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion-header">
                <p className="accordion-question">{item.question}</p>
                <p className="accordion-category">{item.category}</p>
              </div>
              <img
                className={`arrow ${activeIndex === index ? "rotate" : ""}`}
                src={arrow}
                alt="arrow"
              />
            </button>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="footer-buttons">
        <div className="box-container">
          <img className="box" src={box} alt="box" />
          <div className="button-text">1:1 문의</div>
        </div>
        <div className="box-container">
          <img className="box" src={box} alt="box" />
          <div className="button-text">문의내역</div>
        </div>
      </div>
    </>
  );
}

export default QnAPage;
