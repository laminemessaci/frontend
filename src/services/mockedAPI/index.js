import axios from "axios";

/* A mocked data for testing component app. */
const datas = "/mockeddatas.json";
export const getAllDatasMocked = () => {
  return axios.get(datas).then((response) => response.data);
};
