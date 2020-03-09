const initialState = {
  cart: [],
  totalPurchase: 0
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "POST_CART":
      const newDataCart = [...state.cart, action.payload.data];
      return {
        ...state,
        cart: newDataCart,
        totalPurchase: state.totalPurchase + 1
      };

    case "MANIPULATE_ITEM":
      console.log(action);
      const newProductAfterUpdate = state.cart.map(product => {
        if (product.productId === action.payload.data.productId) {
          return action.payload.data;
        }
        return product;
      });
      return {
        ...state,
        cart: newProductAfterUpdate
      };

    case "DELETE_CART":
      const newProductAfterDelete = state.cart.filter(
        product => product.productId !== parseInt(action.payload.id)
      );
      return {
        ...state,
        cart: newProductAfterDelete,
        totalPurchase: state.totalPurchase - 1
      };

    case "CHECKOUT_PENDING":
      return {
        ...state
      };

    case "CHECKOUT_REJECTED":
      return {
        ...state
      };

    case "CHECKOUT_FULFILLED":
      return {
        cart: [],
        totalPurchase: 0
      };
    default:
      return state;
  }
};

export default cart;
