import client from "./client";

export const login = async ({ id, password }) => {
  try {
    const response = await client
      .post("/auth/login", { id, password })
      .then((res) => {
        client.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;
        if (res.status === 200) {
          window.location.href = "/";
        }
        return res;
      });
    return response.status;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await client.post("/auth/logout");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await client.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const find = async (query) => {
  try {
    const response = await client.get("/auth/find", { params: query });
    return response.data;
  } catch (error) {
    throw error;
  }
};
