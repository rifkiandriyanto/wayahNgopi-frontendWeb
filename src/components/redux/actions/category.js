import axios from "axios";

export const getCategory = () => {
  return {
    type: "GET_CATEGORIES",
    payload: axios({
      method: "GET",
      url: "http://localhost:8006/category"
    })
  };
};

export const postCategory = data => {
  return {
    type: "POST_CATEGORY",
    payload: axios({
      method: "POST",
      url: "http://localhost:8006/category",
      data: data
    })
  };
};

export const deleteCategory = categoryId => {
  return {
    type: "DELETE_CATEGORY",
    payload: axios({
      method: "DELETE",
      url: `http://localhost:8006/category/${categoryId}`
    })
  };
};
export const updateCategory = (categoryId, data) => {
  return {
    type: "UPDATE_CATEGORY",
    payload: axios({
      method: "PATCH",
      url: `http://localhost:8006/category/${categoryId}`,
      data: data
    })
  };
};
