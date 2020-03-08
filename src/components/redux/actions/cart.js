import axios from "axios";

export const postCart = data => {
  return {
    type: "POST_CART",
    payload: { data }
  };
};

export const manipulateItem = data => {
  return {
    type: "MANIPUTLATE_QUANTITY",
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
      url: "http://localhost:8006/transaction",
      data: data
    })
  };
};
