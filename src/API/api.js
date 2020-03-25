import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

async function pushOrder() {
  const res = await API.post("/beans");
  const data = res.data;
  return data;
}

async function getMenu() {
  //console.log("start API");
  const res = await API.get("/beans");
  const data = res.data.menu;
  //console.log(data);
  return data;
}

export { pushOrder, getMenu };
