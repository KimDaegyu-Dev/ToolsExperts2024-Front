import React from "react";
import axios from "axios";
const learn = async () => {
  const post = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(post);
  return <></>;
};

export default learn;
