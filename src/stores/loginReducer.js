const initLogin = {
  authenticated: window.localStorage.getItem("access_token") != null,
  pending: false,
  email: null,
  error: null
}

export default function reducer(state = initLogin, action) {
  switch (action.type) {
    case "LOGIN_FULFILLED": {
      if (action.payload.data.access_token == null) {
        return {
          ...state,
          authenticated: false,
          pending: false,
          error: null
        }
      }
      const access_token = action.payload.data.access_token
      window.localStorage.setItem("access_token", access_token)
      return {
        ...state,
        authenticated: true,
        email: action.payload.data.email,
        pending: false,
        error: null
      }
    }
    case "LOGIN_PENDING": {
      return {
        ...state,
        error: null,
        pending: true
      }
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        error: action.payload.message,
        email: null,
        authenticated: false,
        pending: false
      }
    }
  }
  return state
}
