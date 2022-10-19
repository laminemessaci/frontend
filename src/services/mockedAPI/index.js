import axios from 'axios';

/* A mocked data for testing component app. */
const datas = '/mockeddatas.json';
export const getAllDatasMocked = () => {
  return axios.get(datas).then((response) => response.data);
};

/* A mocked data for testing component app. */
const data = '/mockedData.json';
export const getAllDataMocked = () => {
  return axios.get(data).then((response) => response.data);
};

export const getDataByUserId = (userId, data) => {
  return data.map((obj) => obj.userId === userId);
};
