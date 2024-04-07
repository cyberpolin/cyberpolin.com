import Image from "next/image"
import styles from "../styles/Next.module.sass"
import Head from "next/head"
import cyberpolin from "../public/img/cyberpolin.jpeg"

import Skill from "../components/Skill"
import { Name } from "../components/Name"
import getMdContent, { getPortfolio } from "../lib/api"
import { useEffect, useState } from "react"
import HireMe from "./components/HireMe"

const skillNames = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "HTML + CSS",
  "Comunication Skills",
  "Spoken & written English",
]

export default function Home(props) {
  const [skillValues, setSkillValues] = useState([0, 0, 0, 0, 0, 0])

  useEffect(() => setSkillValues([90, 90, 65, 95, 80, 87]), [])

  return (
    <div className={styles.content}>
      <Head>
        <title>Carlos González - React Native Developer</title>
        <meta name="description" content="Fullstack Javascript developer" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        ></meta>
      </Head>
      <section>
        <div className={`flex h-full lg:flex-row flex-col-reverse `}>
          <div className={styles.Aside}>
            {/* Cyberpolin */}
            <Name>Carlos González</Name>
            <p className={styles.subtitle}>React Native Developer</p>

            <span className={styles.H2}>Skills</span>
            <div className="flex lg:block flex-wrap">
              {skillNames.map((skill, i) => (
                <Skill key={i} level={skillValues[i]}>
                  {skill}{" "}
                </Skill>
              ))}
            </div>
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
          <div
            className={`flex items-center justify-center flex-grow lg:flex-grow-0  `}
          >
            <div className={`bg-bgColor flex content-center items-center`}>
              <div
                className={`p-5 lg:p-10 flex-column lg:block content-center lg: h-1/2`}
              >
                <div
                  className={`mr-2 flex p-4
                
                `}
                >
                  <Image
                    src={cyberpolin}
                    className={`rounded-full `}
                    width={180}
                    height={180}
                    alt="Carlos González aka Cyberpolin, fullstack JS developer"
                  />
                </div>
                <div className={styles.column}>
                  <p className="text-lg ld:text-xl pb-4 ">
                    Hey there, I am <b>Carlos Gonzáles</b>, aka{" "}
                    <a href="https://github.com/cyberpolin">@cyberpolin</a>. I
                    live in Mexico, and have 8+ years involve in development, at
                    first a lot of web, then Back end and five years from now
                    started with RN (React Native).
                  </p>
                  <p className="text-lg ld:text-xl pb-4 ">
                    I&#39;ve worked at my state government as a project manager,
                    so I know I can handle several projects at the time with the
                    right team, but also I am pretty good coding myself (which
                    is what I love the most). I lived at SF 5 years ago where I
                    attended a Dev boot camp and where I started working with
                    RN.
                  </p>
                  <p className="text-lg ld:text-xl pb-4 ">
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
        const isOdd = i % 2
        return (
          <section key={i}>
            <div
              className={`flex ${
                isOdd
                  ? "flex-col-reverse lg:flex-row"
                  : "flex-col-reverse lg:flex-row-reverse"
              }`}
            >
              <div
                className={`${styles.PortfolioAside}`}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className={`flex items-center justify-center  `}>
                {data.youtube?.[0] ? (
                  <iframe
                    // eslint-disable-next-line
                    width="100%"
                    height="315"
                    src={data.youtube?.[0]}
                    title="YouTube video player"
                    frameorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    className=" "
                    src={data.images[0]}
                    alt="Inkind Mobile App"
                  />
                )}
              </div>
            </div>
          </section>
        )
      })}
      <HireMe />
    </div>
  )
}

export const getStaticProps = async () => {
  const allPortfolio = getPortfolio()
  const mdContent = getMdContent(allPortfolio)

  return {
    props: { portfolio: mdContent },
  }
}
