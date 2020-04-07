const initialState = {
  user: []
}
  const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_FULFILLED':
      // console.log(user);
      return {
        ...state,
        user: action.payload.data.result
      }
      case 'GET_USER_PENDING':
      return {
        ...state
      }
      case 'GET_USER_REJECTED':
      return {
        ...state
      }
  
      case 'POST_USER_FULFILLED':
      const newDataUser = [...state.user, action.payload.data.result]
        return {
        ...state,
        user: newDataUser
      }
      // console.log(action.payload);
      case 'POST_USER_PENDING':
      return {
        ...state
      }
      case 'POST_USER_REJECTED':
      return {
        ...state
      }
      case 'UPDATE_USER_PENDING':
      return {
        ...state
      }
      case 'UPDATE_USER_REJECTED':
      return {
        ...state
      }
      case 'UPDATE_USER_FULFILLED':
      const newUserAfterUpdate = state.user.map(user => {
        if (user.id === action.payload.data.result.id) {
          return action.payload.data.result
          }

        return user
        })
        // console.log(newuserAfterUpdate)
        return {
        ...state,
        user: newUserAfterUpdate
      }
      case 'DELETE_USER_FULFILLED':
      console.log(user.id)
        const newDataAfterDelete = state.user.filter(
        user => user.id !== action.payload.data.result.id
      )
        return {
        ...state,
        user: newDataAfterDelete
      }
      case 'DELETE_USER_PENDING':
      return {
        ...state
      }
      case 'DELETE_USER_REJECTED':
      return {
        ...state
      }
      //
  
      default:
      return state
    }
}
  
  export default user

