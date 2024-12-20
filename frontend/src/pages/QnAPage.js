import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import "../styles/QnAPage.css";
import arrow from "../assets/arrow.png";
import box from "../assets/box.png";
import { getExhibitionDetail } from "../api/exhibit";

const categories = [
  { name: "주변 관광지", value: "주변 관광지" },
  { name: "전시장의 다른 전시", value: "전시장의 다른 전시" },
];

const qnaList = [
  {
    category: "주변 관광지",
    question: "관광지",
    answer: "내용",
  },
  {
    category: "전시장의 다른 전시",
    question: "전시",
    answer: "내용",
  },
];

function QnA() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["exhibitionDetail", id],
    queryFn: () => getExhibitionDetail(id),
  });

  const exhibitionData = data?.exhibitionDetail;
  const placeData = data?.venue;

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
      <div className="detailCon1">
        <div className="titleName">
          {exhibitionData?.title}
          <p className="subtitleName">새벽부터 황혼까지</p>
        </div>
        <div>
          <div className="poster1">
            <table className="poster-info">
              <tr>
                <td>장소</td>
                <td>{placeData ? placeData.name : "장소 정보 없음"}</td>
              </tr>
              <tr>
                <td>기간</td>
                <td>
                  {exhibitionData?.startDate}~{exhibitionData?.endDate}
                </td>
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
                  성인: 20,000원<br />
                  청소년: 16,000원<br />
                  어린이: 12,000원
                </td>
              </tr>
            </table>
          </div>
        </div>
        <a href={placeData?.place_url} className="book1">
          예매하러 가기
        </a>
      </div>

      <div className="index1">
            <a href="#" className="index-info">
              위치안내
            </a>
            <a href="#" className="index-review">
              관람 후기
            </a>
            <a href="#" className="index-QnA">
              전시회 주변
            </a>
      </div>

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

export default QnA;
