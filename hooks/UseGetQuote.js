import { useState } from "react"
import fetchAPI from "../lib/fetchAPI"

const GetQuote = ({ from, name, text }) => {
  const [status, setStatus] = useState("none") // loading, error, done, none
  const [data, setData] = useState()
  async function getQuote() {
    setData()
    setStatus("loading")
    try {
      const data = await fetchAPI.post("/email", {
        from,
        name,
        text,
      })

      setData(data)
      setStatus("done")
    } catch (error) {
      setStatus("error")
    }
  }

  return { status, data, getQuote }
}

export default GetQuote
