import { useState } from "react"
import fetchAPI from "../lib/fetchAPI"
import { useReCaptcha } from "next-recaptcha-v3"

const GetQuote = ({ from, name, text }) => {
  const { executeRecaptcha } = useReCaptcha()
  const [status, setStatus] = useState("none") // loading, error, done, none
  const [data, setData] = useState()
  const payload = {
    from,
    name,
    text,
  }

  async function getQuote() {
    setData()
    setStatus("loading")

    try {
      const token = await executeRecaptcha("hire_submit")
      const { data } = await fetchAPI.post("/api/hireme", {
        ...payload,
        token,
      })
      if (!!data.success) {
        setStatus("success")
        setData(data)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error", error)
    }
  }

  return { status, data, getQuote }
}

export default GetQuote
