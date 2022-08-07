import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Next.module.sass";

import cyberpolin from "../public/img/cyberpolin.jpeg";

import Skill from "../components/Skill";
import { Name } from "../components/Name";
import getMdContent, { getPortfolio } from "../lib/api";

export default function Home(props) {
  return (
    <div className={styles.content}>
      <section>
        <div className={styles.Row}>
          <div className={styles.Aside}>
            {/* Cyberpolin */}
            <Name>Carlos González</Name>
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
        const idOdd = i % 2;
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
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const allPortfolio = getPortfolio();
  const mdContent = getMdContent(allPortfolio);

  return {
    props: { portfolio: mdContent },
  };
};
