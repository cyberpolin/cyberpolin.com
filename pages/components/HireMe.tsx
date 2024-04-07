import Image from "next/image"
import styles from "/styles/Next.module.sass"

import cyberpolin from "/public/img/cyberpolin.jpeg"

import * as yup from "yup"

import UseGetQuote from "../../hooks/UseGetQuote"
import { useFormik } from "formik"

type errorProps = {
  error: boolean | { path: string; message: string }
}

const validationSchema = yup.object().shape({
  text: yup.string().required().min(3),
  from: yup.string().required().min(3).email(),
  name: yup.string().required().min(3),
})

const HireMe = () => {
  const initialValues = {
    name: "",
    from: "",
    text: "",
  }

  const { getQuote, data, status } = UseGetQuote(initialValues)

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: { name: string; from: string; text: string }) => {
      //@ts-ignore

      getQuote(values)
    },
  })

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
                  rel="noreferrer"
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
                alt="fullstack Javascript developer - Carlos Vasconcelos Cyberpolin"
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
                  formik.handleSubmit(e)
                }}
              >
                <input
                  name="name"
                  onChange={formik.handleChange}
                  placeholder="What&#39;s your name?"
                />
                {formik.errors["name"] && (
                  <span className={styles.error}>{formik.errors["name"]}</span>
                )}
                <input
                  name="from"
                  onChange={formik.handleChange}
                  placeholder="your@email.com"
                />
                {formik.errors["from"] && (
                  <span className={styles.error}>{formik.errors["from"]}</span>
                )}

                <textarea
                  name="text"
                  onChange={formik.handleChange}
                  placeholder="What can I do for you?"
                />
                {formik.errors["text"] && (
                  <span className={styles.error}>{formik.errors["text"]}</span>
                )}

                <button
                  className={
                    formik.isValid && formik.dirty && styles.showSubmit
                  }
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Loading" : "Let me hear it..."}
                </button>
              </form>
            </div>
          </>
        </div>
      )
  }
}

export default HireMe
