import axios from "axios";

export const getHistory = () => {
  return {
    type: "GET_HISTORY",
    payload: axios({
      method: "GET",
      URL: "http://localhost:8006/transaction"
    })
  };
};

export const getDetailHistory = id => {
  return {
    type: "GET_DETAIL_HISTORY",
    payload: axios({
      method: "GET",
      url: "http://localhost:8006/transaction" + id
    })
  };
};
