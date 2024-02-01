import axios from "axios";

const backendUrl = "https://pink-witty-jellyfish.cyclic.app";

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`${backendUrl}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`${backendUrl}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`${backendUrl}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
  const res = await axios.patch(`${backendUrl}/api/${url}`, post, {
    headers: { Authorization: token },
  });
  return res;
};

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`${backendUrl}/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
