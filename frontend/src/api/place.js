import client from "./client";

export async function getPlaces(id) {
  try {
    const response = await client.get(`/venues/${id}/exhibitions`);
    console.log(`Place Detail (ID: ${id})`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch place detail for ID: ${id}`, error);
    throw error;
  }
}
