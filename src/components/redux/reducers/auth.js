const initialState = {
  isAuthenticated: false,
  profile: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      }
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      }
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        isAuthenticated: true,
        profile: action.payload.data.result
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      }
    default:
      return state
  }
}
