import React from "react";
import "../styles/InfoPage.css";
import star2 from "../assets/star.png"; // 별 아이콘

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
                성인 (만 19세 이상) 20,000원
                <br />
                청소년 (만 13세~만 18세) 16,000원
                <br />
                어린이 (만 4세~만 12세) 12,000원
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="book2">예매하기</div>    
    <table className="index2">    
      <tbody>
        <tr>
          <td>관람정보</td>
          <td>
            리뷰
            <img className="star2" src={star2} alt="star2" />
            <span>4.6(246)</span>
          </td>
          <td>Q&A</td>
        </tr>
      </tbody>
    </table>
    <div className="detail2">
      <div>
        <div className="subTitle12">공연시간 정보</div>
        <div className="info12">
          [전시 관람 정보]<br />
          관람일정 : 2024년 3월 21일 - 8월 25일 (휴관일 없음)<br />
          관람시간 : 월-일 10:00 - 19:40 (입장마감 19:00)<br />
          <br />
          [얼리버드 관람 정보]<br />
          관람일정 : 2024년 3월 21일 - 5월 17일 까지<br />
          취소기간 : 2024년 5월 17일 19:00 까지 (* 이후 교환/환불 및 사용불가)<br />
          <br />
          [관람 요금 정보]<br />
          성인 (만 19세 이상) 20,000원<br />
          청소년 (만 13세 - 만 18세) 16,000원<br />
          어린이 (만 4세 - 만 12세) 12,000원<br />
          무료 (만 3세 미만) - 증비서류제시<br />
          <br />
          * 경로우대 및 특별할인요금은 사전 예매없이 현장에서 결제가 가능합니다.
          (증빙서류제시)<br />
          * 청소년/어린이 및 특별할인/무료 관람은 현장에서 증빙서류 확인 후 발권이 가능합니다.<br />
          * 더 자세한 요금 정보는 페이지 하단에서 확인하실 수 있습니다.<br />
        </div>
      </div>

      <div>
        <div className="subTitle22">공지사항</div>
        <div className="info22">
          [정규도슨트 프로그램 정보]<br />
          월-금 11시, 14시, 16시 (3회)<br />
          <br />
          [3-4월 정규도슨트 스케줄 안내]<br />
          | 월,화,수 - 이지안 도슨트<br />
          | 목 - 한지원 도슨트<br />
          | 금 - 정우철 도슨트<br />
          <br />
          * 현재 스케줄은 변동 될 수 있으며, 방문 전 미술관 인스타그램 및 홈페이지에서 확인해 주시기 바랍니다.<br />
          * 스케줄 변동 시에는 인스타그램 및 홈페이지를 통해서 공지될 예정이며,
          사전 문의 시에도 안내가 어렵습니다.<br />
          * 상세 스케줄은 미술관 인스타그램 및 홈페이지에서 확인하실 수 있습니다.<br />
          * 정규도슨트는 무료 제공 프로그램으로 사전 공지 없이 미술관 사정에 따라 변동될 수 있습니다.<br />
          * 프라이빗 및 특별 전시 투어는 미술관 홈페이지 또는 카카오채널로 별도 문의 주시기 바랍니다.<br />
          * 정규도슨트는 평일에서 운영되며, 주말 및 공휴일에는 운영되지 않습니다.<br />
          <br />
          [기타 공지사항]<br />
          * 얼리버드 티켓 관람 기간은 전시 정보와 상이함으로 반드시 예매 티켓의 관람 기간을 확인해 주시기 바랍니다.<br />
          * 티켓 사용 기간 이후의 교환/환불 및 사용이 불가한 점 확인해 주시기 바랍니다.<br />
          * 20매 이상의 티켓 단체 구매 문의는 마이아트뮤지엄 카카오채널로 별도 문의 주시기 바랍니다.<br />
          * 전시 관련 문의는 [마이아트뮤지엄 카카오채널]을 통해서 남겨 주시기 바랍니다.<br />
          * 티켓 예매 및 취소 관련 문의는 [인터파크티켓 고객센터]를 이용해 주시기 바랍니다.<br />
          * 전시티켓의 취소/환불은 소비자보호법 규정을 준수하고 있습니다.<br />
        </div>
      </div>
    </div>
    </div>
);

export default InfoPage;
