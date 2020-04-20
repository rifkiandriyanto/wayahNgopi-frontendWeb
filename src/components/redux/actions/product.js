import axios from "axios";
import 'dotenv/config'

export const getProducts = data => {
  // const limit = 6;
  const page = data.activePage || 1;
  const category = data.activeCategory || "";
  const name = data.searchName || "";
  const sortBy = data.sort || "id";
  // const sort = data.by || "ASC";
  return {
    type: "GET_PRODUCTS",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/product/?limit=5&page=${page}&category=${category}&name=${name}&sortBy=${sortBy}&sort=ASC`
    })
  };
};

export const postProduct = data => {
  return {
    type: "POST_PRODUCT",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}/product`,
      data: data
    })
  };
};

export const deleteProduct = productId => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_URL}/product/${productId}`
    })
  };
};

export const updateProduct = (productId, data) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_URL}/product/${productId}`,
      data: data
    })
  };
};
