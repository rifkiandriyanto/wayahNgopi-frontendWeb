import axios from "axios";
export const getProducts = (limit, activePage, activeCategory) => {
  return {
    type: "GET_PRODUCTS",
    payload: axios({
      method: "GET",
      url: `http://localhost:8006/product/?limit=${limit}&page=${activePage}`
    })
  };
};


export const filterProduct = (category, search) => {
  return {
    type: 'FILTERSEARCH_PRODUCT',
    payload: axios({
      method: "GET",
      url: `http://localhost:8006/product/?category=${category}&name=${search}`,
    })
  }
}

export const postProduct = data => {
  return {
    type: "POST_PRODUCT",
    payload: axios({
      method: "POST",
      url: "http://localhost:8006/product",
      data: data
    })
  };
};

export const deleteProduct = productId => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios({
      method: "DELETE",
      url: `http://localhost:8006/product/${productId}`
    })
  };
};
export const updateProduct = (productId, data) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: axios({
      method: "PATCH",
      url: `http://localhost:8006/product/${productId}`,
      data: data

    })
  };
};
