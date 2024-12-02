import "../styles/InfoPage.css";
import Content from "../components/Content.js";
import ExhibitionDetail from "../components/ExhibitionDetail.js";

function InfoPage() {
  // 전시회 ID를 설정 (예: 1번 전시회)
  const exhibitionId = 1;

  return (
    <>
      <Content />
      {/* ExhibitionDetail 컴포넌트 추가 */}
      <div className="exhibition-detail-section">
        <h2>전시회 상세 정보</h2>
        <ExhibitionDetail exhibitionId={exhibitionId} />
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
          <p>
            취소기간 : 2024년 5월 17일 19:00 까지 (* 이후 교환/환불 및 사용불가)
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
