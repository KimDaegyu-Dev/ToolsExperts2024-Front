import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 표시할 div
    const options = {
      center: new window.kakao.maps.LatLng(35.1796, 129.0756), // 지도의 중심 좌표 (부산광역시)
      level: 7, // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성

    // 마커 생성
    const markerPosition = new window.kakao.maps.LatLng(35.1796, 129.0756);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map); // 마커를 지도 위에 표시

    // 지도 클릭 이벤트 추가
    window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      const latlng = mouseEvent.latLng; // 클릭된 위치의 위/경도 객체
      console.log("클릭된 위치의 위도:", latlng.getLat());
      console.log("클릭된 위치의 경도:", latlng.getLng());
    });
  }, []); // 빈 배열을 전달해 컴포넌트 마운트 시 한 번만 실행

  return (
    <div
      id="map"
      style={{
        width: "100%", // 지도 너비
        height: "500px", // 지도 높이
        borderRadius: "12px", // 모서리 둥글게
      }}
    ></div>
  );
};

export default MapComponent;
