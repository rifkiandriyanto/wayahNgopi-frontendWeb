import axios from "axios";
import 'dotenv/config'


export const getCategory = () => {
  return {
    type: "GET_CATEGORIES",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/category`
    })
  };
};

export const postCategory = data => {
  return {
    type: "POST_CATEGORY",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}/category`,
      data: data
    })
  };
};

export const deleteCategory = categoryId => {
  return {
    type: "DELETE_CATEGORY",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_URL}/category/${categoryId}`
    })
  };
};
export const updateCategory = (categoryId, data) => {
  return {
    type: "UPDATE_CATEGORY",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_URL}/category/${categoryId}`,
      data: data
    })
  };
};
