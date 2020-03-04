import axios from "axios";
export const getProducts = () => {
  return {
    type: "GET_PRODUCTS",
    payload: axios({
      method: "GET",
      url: "http://localhost:8006/product"
    })
  };
};


export const getProductsCashier = (data) => {
  const limit = 6
  const page = data.activePage || 1
  const category = data.activeCategory || ''
  const name= data.serachName || ''
  const sortBy = data.sort || 'id'
  const sort = data.by || 'ASC'
  return {
      type: 'GET_PRODUCTSCASHIER',
      payload: axios({
          method: "GET",
          url: `http://localhost:8006/product/?limit=${limit}&page=${page}&category=${category}&name=${name}&sortBy=${sortBy}&sort=${sort}`
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
