const initialState = {
  categories: [],
  isLoading: false
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_PENDING':
      return {
        ...state
      }

    case 'GET_CATEGORIES_REJECTED':
      return {
        ...state
      }

    case 'GET_CATEGORIES_FULFILLED':
      return {
        ...state,
        categories: action.payload.data.result
      }

      case 'POST_CATEGORY_PENDING':
      return {
        ...state
      }
  
      case 'POST_CATEGORY_REJECTED':
      return {
        ...state
      }
  
      case 'POST_CATEGORY_FULFILLED':
      console.log(action.payload.data)
        console.log(state.categories)
        const categoryAdd = [...state.categories, action.payload.data.result]
        return {
        ...state,
        categories: categoryAdd
      }
  
      case 'UPDATE_CATEGORY_PENDING':
      return {
        ...state
      }
      case 'UPDATE_CATEGORY_REJECTED':
      return {
        ...state
      }
      case 'UPDATE_CATEGORY_FULFILLED':
      console.log(action.payload)
        const newCategoryAfterUpdate = state.categories.map(category => {
        if (category.id === parseInt(action.payload.data.result.id)) {
          return action.payload.data.result
          }

        return category
        })
        return {
        ...state,
        categories: newCategoryAfterUpdate
      }

        case 'DELETE_CATEGORY_PENDING':
      return {
        ...state
      }

    case 'DELETE_CATEGORY_REJECTED':
      return {
        ...state
      }

    case 'DELETE_CATEGORY_FULFILLED':
      console.log(action.payload.data.result)
      const newDeleteCategory = state.categories.filter(
        category => category.id !== parseInt(action.payload.data.result)
      )
      return {
        ...state,
        categories: newDeleteCategory
      }
  
    default:
      return state
  }
}

export default category
