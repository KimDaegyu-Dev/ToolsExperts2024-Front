import client from "./client";

export async function getPlaces(id) {
  try {
    const response = await client.get(`/venues/${id}/exhibitions`, {
      params: {
        startDate: "2024-01-01",
        endDate: "2024-12-31",
      },
    });
    // console.log(`Place Detail (ID: ${id})`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch place detail for ID: ${id}`, error);
    throw error;
  }
}

export async function getPlaceList() {
  try {
    const response = await client.get(`/venues/liked`);
    // console.log("Place List", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch place list", error);
    throw error;
  }
}
