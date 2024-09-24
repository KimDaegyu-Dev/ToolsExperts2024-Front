import client from "./client";

export async function getExhibits({ from, to, page, rows }) {
  const response = await client.get("/rest/publicperformancedisplays/realm", {
    params: {
      from,
      to,
      cPage: page,
      rows,
      realmCode: "D000",
    },
  });
  return response.data;
}
