import axios from "axios";

const baseURL = "http://www.culture.go.kr/openapi";

const client = axios.create({
  baseURL,
  params: {
    serviceKey:
      "aBCeE33mjmqEhr%2F2mSYiVTzbvscZ7pIVretDFwq6tGRTMY3ovfshg6OYTPGUgFHPfAwsHRF%2Bn7Pm4%2FRlE3Y%2BWQ%3D%3D",
  },
});

export default client;
