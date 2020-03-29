import axios from "axios";
import 'dotenv/config'

export const getHistory = () => {
  return {
    type: "GET_HISTORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/transaction`
    })
  };
};

export const getDetailHistory = id => {
  return {
    type: "GET_DETAIL_HISTORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/transaction` + id
    })
  };
};
