import './Content.css'; 

export default function Content() {
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
        <a href="#" className="book1">
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
      </div>
    </div>
  );
}