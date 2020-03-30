import axios from "axios";
import 'dotenv/config'

export const getHistory = () => {
  return {
    type: "GET_HISTORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/transaction/history`
    })
  };
};

export const getDetailHistory = id => {
  return {
    type: "GET_DETAIL_HISTORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/transaction/history/` + id
    })
  };
};

export const getWeeklyHistory = () => {
  return {
    type: "GET_WEEKLY_HISTORY",
     payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/transaction/history/weekly`
    })
  }
}

