import client from "./client";

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
