import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Next.module.sass";

import cyberpolin from "../public/img/cyberpolin.jpeg";

import Skill from "../components/Skill";
import { Name } from "../components/Name";
import getMdContent, { getPortfolio } from "../lib/api";
import { useEffect, useState } from "react"

import * as yup from "yup"

import UseGetQuote from "../hooks/UseGetQuote"
const skillNames = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "HTML + CSS",
  "Comunication Skills",
  "Spoken & written English",
]

const formSchema = yup.object().shape({
  text: yup.string().required(),
  from: yup.string().required().email(),
  name: yup.string().required(),
})

export default function Home(props) {
  const [skillValues, setSkillValues] = useState([0, 0, 0, 0, 0, 0])
  const [form, setForm] = useState()
  const [errors, setErrors] = useState(true)
  const { status, data, getQuote } = UseGetQuote({ ...form })

  const validate = () => {
    formSchema
      .validate(form)
      .then((valid) => setErrors(false))
      .catch((err) => setErrors(err))
  }

  useEffect(() => setSkillValues([90, 90, 65, 95, 80, 87]), [])
  useEffect(() => {
    if (form) validate()
  }, [form])

  const isDone = status === "done"

  return (
    <div className={styles.content}>
      <section>
        <div className={styles.Row}>
          <div className={styles.Aside}>
            {/* Cyberpolin */}
            <Name>Carlos González</Name>
            <p className={styles.subtitle}>React Native Developer</p>
            <span className={styles.H2}>Skills</span>
            {skillNames.map((skill, i) => (
              <Skill key={i} level={skillValues[i]}>
                {skill}{" "}
              </Skill>
            ))}
            <span className={styles.H2}>Contact Info</span>
            <ul className={styles.personalBullets}>
              <li>Calle el Aguila #344. Tabasco, Mexico</li>
              <li>
                <a href="phone:9931175435">+52 9931 175 435</a>
              </li>
              <li>
                <a href="mailto:iam@cyberpolin.com">iam@cyberpolin.com</a>
              </li>
            </ul>
          </div>
          <div className={styles.Content}>
            <div className={styles.Hi}>
              <div className={`${styles.personalInfoMargin}`}>
                <div className={[styles.imageContainer]}>
                  <Image
                    src={cyberpolin}
                    className={styles.mainPicture}
                    width="180px"
                    height="180px"
                  />
                </div>
                <div className={styles.column}>
                  <p>
                    Hey there, I am <b>Carlos Gonzáles</b>, aka{" "}
                    <a href="https://github.com/cyberpolin">@cyberpolin</a>. I
                    live in Mexico, and have 8+ years involve in development, at
                    first a lot of web, then Back end and five years from now
                    started with RN (React Native).
                  </p>
                  <p>
                    I&#39;ve worked at my state government as a project manager,
                    so I know I can handle several projects at the time with the
                    right team, but also I am pretty good coding myself (which
                    is what I love the most). I lived at SF 5 years ago where I
                    attended a Dev boot camp and where I started working with
                    RN.
                  </p>
                  <p>
                    Now I live in Mexico, where I&#39;m from and have being
                    working in several RN projects, some of them with Backend
                    developed by my self, some other with a BE team. My las work
                    was with Inkind, where I maintain 3 apps distributed on USA,
                    Canada, Australia and New Zealand, I&#39;ve been present on
                    two major redesigns and had the opportunity to lead the dev
                    team. But enough about me, Let me know if you guys want to
                    talk further I would love to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {props.portfolio.map(({ data, content }, i) => {
        const idOdd = i % 2
        return (
          <section key={i}>
            <div className={`${styles.Row} ${!idOdd && styles.odd}`}>
              <div
                className={`${styles.PortfolioAside}`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className={styles.Content}>
                {/* TODO make carousel */}
                <img src={data.images[0]} alt="Inkind Mobile App" />
              </div>
            </div>
          </section>
        )
      })}
      <div className={styles.contact}>
        {isDone ? (
          <>
            <div className={styles.tyLeft}>
              <h3>Great Scott!</h3>
              <p>
                Excelent news, I'll get in touch asap, and we will rock that
                project!
              </p>
              <p>
                In the meanwhile, take a look at my{" "}
                <a
                  className={styles.myVideos}
                  href="https://www.youtube.com/@carlosvasconcelos8266/videos"
                >
                  youtube videos
                </a>{" "}
                where I show some ideas and how to's
              </p>
              <p>Please subscribe!</p>
            </div>
            <div className={styles.tyRight}>
              <Image
                src={cyberpolin}
                className={styles.mainPicture}
                width="180px"
                height="180px"
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.left}>
              <h3>Let's make a great app together!</h3>
              <p>
                I'll be glad to read from you and help you with your project.
                Get a quote!
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
                  placeholder="What's your name?"
                  className={errors.path === "name" && styles.inputError}
                />
                {errors.path === "name" && (
                  <span className={styles.error}>{errors.message}</span>
                )}
                <input
                  name="from"
                  onChange={(e) => setForm({ ...form, from: e.target.value })}
                  placeholder="How can I get in touch?"
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
        )}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPortfolio = getPortfolio();
  const mdContent = getMdContent(allPortfolio);

  return {
    props: { portfolio: mdContent },
  };
};
