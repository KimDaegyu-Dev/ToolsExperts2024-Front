import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// API 데이터를 가져오는 함수
const fetchExhibitions = async () => {
  // axios를 사용해 데이터 가져오기
  const { data } = await axios.get("http://localhost:3001/api/exhibitions");
  return data; // 데이터 반환
};

function Post() {
  // useQuery 훅을 사용해 데이터를 가져옴 (객체 형태로 수정)
  const { data, isLoading, error } = useQuery({
    queryKey: ["exhibitions"],
    queryFn: fetchExhibitions,
  });

  // 데이터 로딩 중일 때 표시할 내용
  if (isLoading) return <p>Loading...</p>;

  // 오류 발생 시 표시할 내용
  if (error) return <p>Error: {error.message}</p>;

  // 데이터가 정상적으로 로드되었는지 확인하고, 없으면 빈 배열 사용
  const exhibitions = data ?? [];

  // 데이터가 정상적으로 로드되었을 때 표시할 내용
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Exhibitions</h1>
      <ul style={styles.list}>
        {exhibitions.map((exhibition) => (
          <li key={exhibition.id} style={styles.listItem}>
            {exhibition.title} - {exhibition.start_date} ~ {exhibition.end_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 간단한 스타일 추가
const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "black",
    borderRadius: "10px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "white",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
};

export default Post;
