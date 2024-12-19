import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    // Kakao Maps API 로드 확인
    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Maps API가 로드되지 않았습니다.");
      return;
    }

    const container = document.getElementById("map"); // 지도를 표시할 div
    const options = {
      center: new window.kakao.maps.LatLng(37.4802402, 127.0142152), // 지도의 초기 중심 좌표
      level: 5, // 지도의 확대 레벨
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성
    const places = new window.kakao.maps.services.Places(); // 장소 검색 객체 생성

    // 마커 위치 및 정보
    const markerPosition = new window.kakao.maps.LatLng(37.4802402, 127.0142152); // 예술의 전당 위치
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map); // 마커를 지도 위에 표시

    // 좌표 -> 장소 이름 검색 및 CustomOverlay 생성
    const searchNearbyPlace = (position) => {
      const callback = (result, status) => {
        if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
          const placeName = result[0].place_name; // 가장 가까운 장소 이름 가져오기
          const overlayContent = `
            <div style="
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 5px 10px;
              background: rgba(255, 255, 255, 0.9);
              border-radius: 12px;
              font-size: 14px;
              font-weight: bold;
              color: #000;
              white-space: nowrap;
              border: 1px solid #ddd;
              box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            ">
              ${placeName}
            </div>
          `;

          const customOverlay = new window.kakao.maps.CustomOverlay({
            map: map,
            position: position,
            content: overlayContent,
            yAnchor: 1.5, // 말풍선을 마커 위로 배치
          });
        } else {
          console.error("장소 검색 실패: ", status);
        }
      };

      // 좌표로 주변 장소 검색
      places.keywordSearch("예술의 전당", callback, {
        location: position,
        radius: 1000, // 검색 반경 1000m
        sort: "distance", // 거리순 정렬
      });
    };

    // 마커 위치의 장소 이름 검색
    searchNearbyPlace(markerPosition);

    // 지도 클릭 이벤트 추가
    window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      const latlng = mouseEvent.latLng; // 클릭된 위치의 위/경도 객체
      console.log("클릭된 위치의 위도:", latlng.getLat());
      console.log("클릭된 위치의 경도:", latlng.getLng());
    });

    // 내 위치로 이동 버튼 처리
    const moveToCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // 사용자의 위치로 지도 이동
            const moveLatLng = new window.kakao.maps.LatLng(lat, lng);
            map.setCenter(moveLatLng);

            // 위치에 마커 추가
            const currentLocationMarker = new window.kakao.maps.Marker({
              position: moveLatLng,
            });
            currentLocationMarker.setMap(map);

            // 내 위치의 장소 검색
            searchNearbyPlace(moveLatLng);
          },
          (error) => {
            console.error("Error retrieving location:", error);
          }
        );
      } else {
        alert("현재 브라우저는 위치 정보를 지원하지 않습니다.");
      }
    };

    // Target 버튼 이벤트 등록
    const targetButton = document.querySelector(".target-icon");
    if (targetButton) {
      targetButton.addEventListener("click", moveToCurrentLocation);
    }

    // Clean-up 이벤트 리스너
    return () => {
      if (targetButton) {
        targetButton.removeEventListener("click", moveToCurrentLocation);
      }
    };
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "520px",
          borderRadius: "17px",
        }}
      ></div>
    </div>
  );
};

export default MapComponent;
