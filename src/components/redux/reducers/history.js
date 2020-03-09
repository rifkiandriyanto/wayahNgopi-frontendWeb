const initialState = {
  histories: [],
  detailHistory: []
};

const Histories = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HISTORY_PENDING":
      return {
        ...state
      };
    case "GET_HISTORY_REJECTED":
      return {
        ...state
      };

    case "GET_HISTORY_FULFIELLED":
      return {
        ...state,
        histories: action.payload.data.result
      };

    case "GET_DETAIL_HISTORY_PENDING":
      return {
        ...state
      };

    case "GET_DETAIL_HISTORY_REJECTED":
      return {
        ...state
      };
    case "GET_DETAIL_HISTORY_FULFILLED":
      return {
        ...state,
        detailHistory: action.payload.data.result
      };
    default:
      return state;
  }
};

export default Histories;
