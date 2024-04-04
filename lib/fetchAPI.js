import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

const fetchAPI = axios.create({
  baseURL,
})

fetchAPI.interceptors.request.use((req) => {
  console.log("req >> ", req)
  return req
})
fetchAPI.interceptors.response.use((res) => {
  console.log("res >> ", res)
  return res
})

export default fetchAPI
