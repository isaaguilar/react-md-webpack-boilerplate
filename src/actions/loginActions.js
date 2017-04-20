import axios from "axios"

export function logMeIn(email, password) {
  return {
    type: "LOGIN",
    payload: axios({
      method: "post",
      url: "http://localhost:5000/api/some/login/url",
      data: { email, password },
      headers: { "Content-Type": "application/json" }
    })
  }
}
