import Image from "next/image"
import styles from "/styles/Next.module.sass"

import cyberpolin from "/public/img/cyberpolin.jpeg"
import { useEffect, useState } from "react"
import * as yup from "yup"

import UseGetQuote from "../../hooks/UseGetQuote"
const formSchema = yup.object().shape({
  text: yup.string().required(),
  from: yup.string().required().email(),
  name: yup.string().required(),
})
const HireMe = () => {
  const [form, setForm] = useState()
  const [errors, setErrors] = useState(true)
  const { status, data, getQuote } = UseGetQuote({ ...form })
  console.log("status", status)
  const validate = async () => {
    formSchema
      .validate(form)
      .then((valid) => setErrors(false))
      .catch((err) => setErrors(err))
  }

  useEffect(() => {
    if (form) validate()
  }, [form])

  switch (status) {
    case "error":
      return (
        <div className={styles.contact}>
          <>
            <div className={styles.left}>
              <h3>Something wrong happened!</h3>
              <p>I could sweare it worked on my machine!</p>
            </div>
            <div className={styles.rightRight}>
              <h3>Please send me a mail to </h3>
              <a href="mailto:cyberpolin@gmail.com">cyberpolin@gmail.com</a>
            </div>
          </>
        </div>
      )
    case "success":
      return (
        <div className={styles.contact}>
          <>
            <div className={styles.tyLeft}>
              <h3>Great Scott!</h3>
              <p>
                Excelent news, I&#39;ll get in touch asap, and we will rock that
                project!
              </p>
              <p>
                In the meanwhile, take a look at my{" "}
                <a
                  className={styles.myVideos}
                  target="_blank"
                  href="https://www.youtube.com/@carlosvasconcelos8266/videos"
                >
                  youtube videos
                </a>{" "}
                where I show some ideas and how to&#39;s
              </p>
              <p>Please subscribe!</p>
            </div>
            <div className={styles.tyRight}>
              <Image
                src={cyberpolin}
                className={styles.mainPicture}
                width={180}
                height={180}
              />
            </div>
          </>
        </div>
      )
    default:
      return (
        <div className={styles.contact}>
          <>
            <div className={styles.left}>
              <h3>Let&#39;s make a great app together!</h3>
              <p>
                I&#39;ll be glad to read from you and help you with your
                project. Get a quote!
              </p>
            </div>
            <div className={styles.right}>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  getQuote()
                }}
              >
                <input
                  name="name"
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value })
                  }}
                  placeholder="What&#39;s your name?"
                  className={errors.path === "name" && styles.inputError}
                />
                {errors.path === "name" && (
                  <span className={styles.error}>{errors.message}</span>
                )}
                <input
                  name="from"
                  onChange={(e) => setForm({ ...form, from: e.target.value })}
                  placeholder="your@email.com"
                  className={errors.path === "from" && styles.inputError}
                />
                {errors.path === "from" && (
                  <span className={styles.error}>{errors.message}</span>
                )}
                <textarea
                  name="text"
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  placeholder="What can I do for you?"
                  className={errors.path === "text" && styles.inputError}
                />
                {errors.path === "text" && (
                  <span className={styles.error}>{errors.message}</span>
                )}
                <button
                  className={!errors && styles.showSubmit}
                  type="submit"
                  disabled={errors}
                >
                  {status === "loading" ? "Loading" : "Let me hear it..."}
                </button>
              </form>
            </div>
          </>
        </div>
      )
  }
}

export default HireMe
