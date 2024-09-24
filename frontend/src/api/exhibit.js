import client from "./client";

export async function getExhibits({ from, to, page, rows }) {
  const response = await client.get("/exhibits", {
    params: {
      from,
      to,
      page,
      rows,
    },
  });
  return response.data;
}
