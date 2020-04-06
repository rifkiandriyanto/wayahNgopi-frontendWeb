import axios from 'axios'

export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: `${process.env.REACT_APP_URL}/user/login`,
      data: data
    })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}
