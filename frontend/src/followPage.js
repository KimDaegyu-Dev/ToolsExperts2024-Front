import React from "react";
import './followPage.css';
import { CiHeart } from "react-icons/ci";

function FollowPage() {
  return (
    <>
      <div className="subList">
        구독 목록
      </div>
      <div>
        <h1 className="author">작가</h1>
        <hr className="firstHr" />
        <hr className="secondHr" />
        <h2  className="gallery">갤러리/전시장</h2>
      </div>
      <div className="container-horizontal">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <div className="mini"></div>
      </div>
      <div className="name-horizontal">
        <div className="name1">리움미술관</div>
        <div className="name2">아모레퍼시픽</div>
        <div className="name3">예술의 전당</div>
        <div className="name4">대림미술관</div>
        <div className="name5">SETEC</div>
      </div>



      <div>
        <div className="subTitle1">새로운 전시</div>
        <div className="box"></div>
        <div className="collection" style={{top: '460px', left:'560px'}}>스웨덴 국립미술관 컬렉션</div>
        <i className="material-icons" style={{
          position: 'absolute',
          width: '17px',
          height: '17px',
          top: '487px',
          left: '558px',
          color: 'black'
          }}>
            location_on
          </i>
         
        <div className="place" style={{top: '492px', left:'582px'}}>마이아트뮤지엄</div>
        <CiHeart className="heart" style={{
          position: 'absolute',
          top: '460px',
          left: '806px'
        }}/>

        <div className="date" style={{top: '620px', left:'694px'}}>2024.06.05 ~2024.09.18</div>
      </div>
      <div>
        <div className="subTitle2">지난 전시 목록</div>
      </div>
      
 

 {/* 1st */}
      <div>
        <div className="box1" style={{top: '745px', left:'145px'}}></div>
        <div className="title1" style={{top: '745px', left:'360px'}}>스웨덴 국립미술관 컬렉션</div>
        <i className="material-icons" style={{
          position: 'absolute',
          width: '17px',
          height: '17px',
          top: '770px',
          left: '357px',
          color: 'black'
          }}>
            location_on
          </i>
        <div className="place1" style={{top: '777px', left:'383px'}}>마이아트뮤지엄</div>
        <CiHeart className="heart1" style={{
          position: 'absolute',
          top: '745px',
          left: '650px'
        }}/>
        <div className="date1" style={{top: '900px', left:'540px'}}>2024.06.05 ~2024.09.18</div>
      </div>

 {/* 2nd */}
      <div>
        <div className="box2" style={{top: '1000px', left:'145px'}}></div>
        <div className="title2" style={{top: '1000px', left:'360px'}}>스웨덴 국립미술관 컬렉션</div>
        <i className="material-icons" style={{
          position: 'absolute',
          width: '17px',
          height: '17px',
          top: '1025px',
          left: '357px',
          color: 'black'
          }}>
            location_on
          </i>
        <div className="place2" style={{top: '1032px', left:'383px'}}>마이아트뮤지엄</div>
        <CiHeart className="heart2" style={{
          position: 'absolute',
          top: '1000px',
          left: '650px'
        }}/>
        <div className="date2" style={{top: '1155px', left:'540px'}} >2024.06.05 ~2024.09.18</div>
      </div>

 {/* 3rd */}
      <div>
        <div className="box3" style={{top: '1255px', left:'145px'}}></div>
        <div className="title3" style={{top: '1255px', left:'360px'}}>스웨덴 국립미술관 컬렉션</div>
        <i className="material-icons" style={{
          position: 'absolute',
          width: '17px',
          height: '17px',
          top: '1280px',
          left: '357px',
          color: 'black'
          }}>
            location_on
          </i>
        <div className="place3" style={{top: '1287px', left:'383px'}}>마이아트뮤지엄</div>
        <CiHeart className="heart3" style={{
          position: 'absolute',
          top: '1255px',
          left: '650px'
        }}/>
        <div className="date3" style={{top: '1410px', left:'540px'}}>2024.06.05 ~2024.09.18</div>
      </div>

 {/* 4th */}
      <div>
        <div className="box4" style={{top: '745px', left:'710px'}}></div>
        <div className="title4">스웨덴 국립미술관 컬렉션</div>
        <i className="material-icons" style={{
          position: 'absolute',
          width: '17px',
          height: '17px',
          top: '770px',
          left: '357px',
          color: 'black'
          }}>
            location_on
          </i>
        <div className="place4">마이아트뮤지엄</div>
        <CiHeart className="heart4" style={{
          position: 'absolute',
          top: '460px',
          left: '806px'
        }}/>
        <div className="date4">2024.06.05 ~2024.09.18</div>
      </div>

 {/* 5th */}
      <div>
        <div className="box5"></div>
        <div className="title5">스웨덴 국립미술관 컬렉션</div>
        <i className="material-icons" style={{
          position: 'absolute',
          width: '17px',
          height: '17px',
          top: '770px',
          left: '357px',
          color: 'black'
          }}>
            location_on
          </i>
        <div className="place5">마이아트뮤지엄</div>
        <CiHeart className="heart5" style={{
          position: 'absolute',
          top: '460px',
          left: '806px'
        }}/>
        <div className="date5">2024.06.05 ~2024.09.18</div>
      </div>

 {/* 6th */}
      <div>
        <div className="box6"></div>
        <div className="title6">스웨덴 국립미술관 컬렉션</div>
        <i className="material-icons" style={{
          position: 'absolute',
          width: '17px',
          height: '17px',
          top: '770px',
          left: '357px',
          color: 'black'
          }}>
            location_on
          </i>
        <div className="place6">마이아트뮤지엄</div>
        <CiHeart className="heart6" style={{
          position: 'absolute',
          top: '460px',
          left: '806px'
        }}/>
        <div className="date6">2024.06.05 ~2024.09.18</div>
      </div>

    </>
  );
}
export default FollowPage;

