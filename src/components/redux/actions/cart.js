import axios from "axios";
import 'dotenv/config'

export const postCart = data => {
  return {
    type: "POST_CART",
    payload: { data }
  };
};

export const manipulateItem = data => {
  return {
    type: "MANIPULATE_ITEM",
    payload: { data }
  };
};

export const deleteCart = id => {
  return {
    type: "DELETE_CART",
    payload: { id }
  };
};

export const checkout = data => {
  return {
    type: "CHECKOUT",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}/transaction`,
      data: data
    })
  };
};
