import React from "react";
import "../styles/DetailPage.css";
import star from "../assets/star.png"; // 별 아이콘
import orangeStar from "../assets/orangeStar.png"; // 평점 별 아이콘
import arrow from "../assets/arrow.png"; // 별 아이콘
import { useParams } from "react-router-dom";
import ExhibitionDetail from "../components/ExhibitionDetail";
import { useExhibitionDetail } from "../hooks/useExhibits";
import { getExhibitionDetail } from "../api/exhibit";
import { useQuery } from "react-query";
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
  {
    id: "review4",
    name: "이름4",
    date: "2024.07.21",
    content: "어쩌고 저쩌고 리뷰리뷰",
  },
  {
    id: "review5",
    name: "이름5",
    date: "2024.07.21",
    content: "어쩌고 저쩌고 리뷰리뷰",
  },
];
function Review({ name, date, content }) {
  return (
    <>
      <p className="review-circle"></p>
      <p className="review-name">{name}</p>
      <img className="review-star" src={orangeStar} alt="orangeStar" />
      <img className="review-star" src={orangeStar} alt="orangeStar" />
      <img className="review-star" src={orangeStar} alt="orangeStar" />
      <img className="review-star" src={orangeStar} alt="orangeStar" />
      <img className="review-star" src={orangeStar} alt="orangeStar" />
      <p className="review-date">{date}</p>
      <p className="review-content">{content}</p>
      <hr className="review-line" />
    </>
  );
}

function DetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["exhibitionDetail", id],
    queryFn: () => getExhibitionDetail(id),
  });

  const exhibitionData = data?.exhibitionDetail;
  const placeData = data?.venue;
  return (
    <>
      <div className="detailCon">
        <div className="detailCon1">
          <div className="titleName">
            {exhibitionData?.title}
            <p className="subtitleName">새벽부터 황혼까지</p>
          </div>
          <div>
            <div className="poster1">
              {/* <img
                src={data.thumbnail}
                alt="poster"
                style={{ width: "80px" }}
              /> */}
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
                    {exhibitionData ? (
                      exhibitionData.price
                    ) : (
                      <>
                        성인 (만 19세 이상) 가격 정보 없음
                        <br />
                        청소년 (만 13세~만 18세) 가격 정보 없음
                        <br />
                        어린이 (만 4세~만 12세) 가격 정보 없음
                      </>
                    )}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <a href={placeData?.place_url} className="book1">
            예매하러 가기
          </a>
        </div>

        <div className="detailCon2">
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
          <div className="rating">
            <p className="rating-text">
              이용자 총 평점
              <p className="rating-num">4.7</p>
              <img className="rating-star" src={orangeStar} alt="orangeStar" />
              <img className="rating-star" src={orangeStar} alt="orangeStar" />
              <img className="rating-star" src={orangeStar} alt="orangeStar" />
              <img className="rating-star" src={orangeStar} alt="orangeStar" />
              <img className="rating-star" src={orangeStar} alt="orangeStar" />
            </p>

            <hr className="rating-line" />
            <p className="ageGroup-title">연령대별 평점 비율</p>
            <div className="ageGroup">
              <div>10대</div>
              <hr className="max" />
              <hr className="teen" />
              <div className="num num1">29</div>
              <div>20~30대</div>
              <hr className="max2" />
              <hr className="twenty" />
              <div className="num num2">72</div>
              <div>40~50대</div>
              <hr className="max3" />
              <hr className="forty" />
              <div className="num num3">41</div>
              <div>60대 이상</div>
              <hr className="max4" />
              <hr className="sixty" />
              <div className="num num4">3</div>
            </div>
          </div>

          <div className="review-top">
            {/* <p className="review-num">리뷰 246건</p> */}
            <p className="latest1">최신순</p>
            <img className="latest-arrow1" src={arrow} alt="arrow" />
            <p className="all1">전체보기</p>
            <img className="all-arrow1" src={arrow} alt="arrow" />
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
      </div>
    </>
  );
}
export default DetailPage;
