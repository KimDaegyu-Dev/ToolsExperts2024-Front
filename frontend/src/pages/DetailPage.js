import React from "react";
import "../styles/DetailPage.css";
import star from "../assets/star.png"; // 별 아이콘
import blueStar from "../assets/blueStar.png"; // 평점 별 아이콘
import arrow from "../assets/arrow.png"; // 별 아이콘
const data1 = [
  {
    id: "review1",
    name: "이름1",
    date: "2024.07.21",
    content: "어쩌고 저쩌고 리뷰리뷰",
  },
  {
    id: "review2",
    name: "이름2",
    date: "2024.07.21",
    content: "어쩌고 저쩌고 리뷰리뷰",
  },
  {
    id: "review3",
    name: "이름3",
    date: "2024.07.21",
    content: "어쩌고 저쩌고 리뷰리뷰",
  },
];
function Review({ name, date, content }) {
  return (
    <>
      <p className="review-circle"></p>
      <p className="review-name">{name}</p>
      <img className="review-star" src={blueStar} alt="blueStar" />
      <img className="review-star" src={blueStar} alt="blueStar" />
      <img className="review-star" src={blueStar} alt="blueStar" />
      <img className="review-star" src={blueStar} alt="blueStar" />
      <img className="review-star" src={blueStar} alt="blueStar" />
      <p className="review-date">{date}</p>
      <p className="review-content">{content}</p>
      <hr className="review-line" />
    </>
  );
}

function DetailPage() {
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
          <td>
            리뷰
            <img className="star" src={star} alt="star" />
            <span>4.6(246)</span>
          </td>
          <td>Q&A</td>
        </tr>
      </table>
      <div className="rating">
        <p className="rating-text">
          이용자 총 평점
          <p className="rating-num">4.7</p>
          <img className="rating-star" src={blueStar} alt="blueStar" />
          <img className="rating-star" src={blueStar} alt="blueStar" />
          <img className="rating-star" src={blueStar} alt="blueStar" />
          <img className="rating-star" src={blueStar} alt="blueStar" />
          <img className="rating-star" src={blueStar} alt="blueStar" />
        </p>

        <hr className="rating-line" />
        <p className="ageGroup-title">연령대별 평점 비율</p>
        <table className="ageGroup">
          <tr>
            <td>10대</td>
            <td className={"ageGroupContainer"}>
              <hr className="max" />
              <hr className="teen" />
            </td>
            <td className="num">29</td>
          </tr>
          <tr>
            <td>20~30대</td>
            <td>
              <hr className="max" />
              <hr className="twenty" />
            </td>
            <td className="num">72</td>
          </tr>
          <tr>
            <td>40~50대</td>
            <td>
              <hr className="max" />
              <hr className="forty" />
            </td>
            <td className="num">41</td>
          </tr>
          <tr>
            <td>60대 이상</td>
            <td>
              <hr className="max" />
              <hr className="sixty" />
            </td>
            <td className="num">3</td>
          </tr>
        </table>
        <div className="review-top">
          <p className="review-num">리뷰 246건</p>
          <p className="latest">최신순</p>
          <img className="latest-arrow" src={arrow} alt="arrow" />
          <p className="all">전체보기</p>
          <img className="all-arrow" src={arrow} alt="arrow" />
        </div>
        <div className="review">
          {data1.map((item) => (
            <Review
              key={item.id}
              name={item.name}
              date={item.date}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default DetailPage;
