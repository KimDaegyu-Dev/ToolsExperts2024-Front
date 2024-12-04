import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getExhibitionDetail } from "../api/exhibit";
import "./ExhibitionDetail.css";

export default function ExhibitionDetail({ exhibitionId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exhibitionDetail", exhibitionId],
    queryFn: () => getExhibitionDetail(exhibitionId),
    enabled: !!exhibitionId, // exhibitionId가 있을 때만 실행
  });
  const exhibitionData = data.eexhibitionDetail;
  const placeData = data.venue;

  // 로딩 중 상태 처리
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // 에러 발생 상태 처리
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // 데이터가 없을 경우 처리
  if (!data) {
    return <p>No data available.</p>;
  }

  // 데이터 렌더링
  return (
    <div className="exhibition-detail">
      <h1>{exhibitionData.title}</h1>
      <p>
        <strong>기간:</strong> {exhibitionData.start_date} ~{" "}
        {exhibitionData.end_date}
      </p>
      <p>
        <strong>장소:</strong> {placeData.name}
      </p>
      <p>
        <strong>설명:</strong> {data.description}
      </p>
      <p>
        <strong>카테고리:</strong> {data.category}
      </p>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        자세히 보기
      </a>
    </div>
  );
}
