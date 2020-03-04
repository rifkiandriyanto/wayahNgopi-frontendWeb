const initialState = {
  products: [],
  pages: []
};
const product = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "GET_PRODUCTS_PENDING":
      return {
        ...state
      };

    case "GET_PRODUCTS_REJECTED":
      return {
        ...state
      };

    case "GET_PRODUCTS_FULFILLED":
      // console.log(action.payload);
      return {
        ...state,
        products: action.payload.data.result,
      };

      //PRODUCT CASHER
      case "GET_PRODUCTSCASHIER_PENDING":
      return {
        ...state
      };

    case "GET_PRODUCTSCASHIER_REJECTED":
      return {
        ...state
      };

    case "GET_PRODUCTSCASHIER_FULFILLED":
      return {
        ...state,
        products: action.payload.data.result,
        pages: action.payload.data.totalPages
      };

    case "DELETE_PRODUCT_PENDING":
      return {
        ...state
      };

    case "DELETE_PRODUCT_REJECTED":
      return {
        ...state
      };

    case "DELETE_PRODUCT_FULFILLED":
      console.log(action.payload.data.result);
      const newDataAfterDelete = state.products.filter(
        product => product.id !== parseInt(action.payload.data.result)
      );
      return {
        ...state,
        products: newDataAfterDelete
      };

    case "POST_PRODUCT_PENDING":
      return {
        ...state
      };

    case "POST_PRODUCT_REJECTED":
      return {
        ...state
      };

    case "POST_PRODUCT_FULFILLED":
      console.log(action.payload.data);
      console.log(state.products);
      const productAdd = [...state.products, action.payload.data.result];
      return {
        ...state,
        products: productAdd
      };

    case "UPDATE_PRODUCT_PENDING":
      return {
        ...state
      };
    case "UPDATE_PRODUCT_REJECTED":
      return {
        ...state
      };
    case "UPDATE_PRODUCT_FULFILLED":
      console.log(action.payload);
      const newProductAfterUpdate = state.products.map(product => {
        if (product.id === parseInt(action.payload.data.result.id)) {
          return action.payload.data.result;
        }

        return product;
      });
      // console.log(newProductAfterUpdate)
      return {
        ...state,
        products: newProductAfterUpdate
      };

    default:
      return state;
  }
};

export default product;
