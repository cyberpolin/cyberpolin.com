import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
// const baseURL =
//   "https://0292-2806-10a6-22-37cd-2896-50d5-3e9e-7271.ngrok.io/api"

const fetchAPI = axios.create({
  baseURL,
})
// fetchAPI.defaults.baseURL = process.env.BASE_URL
console.log(fetchAPI.defaults.baseURL)
fetchAPI.interceptors.request.use((req) => {
  console.log("req > ", req)
  return req
})
fetchAPI.interceptors.response.use((res) => {
  console.log("res > ", res)
  return res
})

export default fetchAPI
