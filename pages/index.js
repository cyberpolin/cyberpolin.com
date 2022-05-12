import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import styles2 from "../styles/Skill.module.sass";

import cyberpolin from "../public/img/cyberpolin.jpeg";
import Name from "../components/Name";

const Skill = ({ children, level }) => (
  <>
    <h5 className={styles2.skillName}>{children}</h5>
    <div className={styles2.skillGaugeContainer}>
      <div
        className={styles2.skillGaugeLevel}
        style={{
          width: `${level}%`,
        }}
      />
    </div>
  </>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          React & React Native developer - Full stack coder - Carlos González
        </title>
        <meta
          name="description"
          content="React Native & Full stack developer/programer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={styles.aside}>
        {/* Cyberpolin */}
        <Name> Carlos González</Name>
        <p className={styles.subtitle}>React Native Developer</p>
        <span className={styles.H2}>Skills</span>
        <Skill level={85}> React Native </Skill>
        <Skill level={90}> JavaScript </Skill>
        <Skill level={65}> Typescript </Skill>
        <Skill level={95}> HTML + CSS </Skill>
        <Skill level={80}> Comunication Skills </Skill>
        <Skill level={87}> Spoken & written English </Skill>
        <span className={styles.H2}>Contact Info</span>
        <ul className={styles.personalBullets}>
          <li>Calle el Aguila #344. Tabasco, Mexico</li>
          <li>+52 9931 175 435</li>
          <li>iam@cyberpolin.com</li>
        </ul>
      </aside>
      <section className={styles.mainContent}>
        <article className={styles.personalInfo}>
          <Image
            src={cyberpolin}
            className={styles.mainPicture}
            width="150%"
            height="150%"
          />
          <p>
            My name is Carlos I live in Mexico, and have 8+ years involve in
            development, at first a lot of web, then Back end and five years
            from now started with RN (React Native).
          </p>
          <p>
            I've worked at my state government as a project manager, so I know I
            can handle several projects at the time with the right team, but
            also I am pretty good coding myself (which is what I love the most).
            I lived at SF 5 years ago where I attended a Dev boot camp and where
            I started working with RN.
          </p>
          <p>
            Now I live in Mexico, where I'm from and have being working in
            several RN projects, some of them with Backend developed by my self,
            some other with a BE team. My las work was with Inkind, where I
            maintain 3 apps distributed on USA, Canada, Australia and New
            Zealand, I've been present on two major redesigns and had the
            opportunity to lead the dev team. But enough about me, Let me know
            if you guys want to talk further I would love to.
          </p>
        </article>
      </section>
    </div>
  );
}
