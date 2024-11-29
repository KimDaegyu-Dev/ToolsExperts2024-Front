import client from "./client";

/**
 * 전시회 목록 조회
 * @param {Object} params - 조회를 위한 파라미터 (startDate, endDate)
 * @returns {Promise} API 응답 데이터
 */
export async function getExhibits({ startDate, endDate }) {
  console.log(startDate, endDate);
  const response = await client.get("/exhibitions", {
    params: {
      startDate,
      endDate,
    },
  });
  console.log(response);
  return response.data;
}

/**
 * 전시회 상세 조회
 * @param {number} id - 전시회 ID
 * @returns {Promise} API 응답 데이터
 */
export async function getExhibitionDetail(id) {
  try {
    const response = await client.get(`/exhibitions/${id}`);
    console.log(`Exhibition Detail (ID: ${id})`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch exhibition detail for ID: ${id}`, error);
    throw error;
  }
}
