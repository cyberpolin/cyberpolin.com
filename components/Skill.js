import styles from "../styles/Skill.module.sass";

const Skill = ({ children, level }) => (
  <>
    <h5 className={styles.skillName}>{children}</h5>
    <div className={styles.skillGaugeContainer}>
      <div
        className={styles.skillGaugeLevel}
        style={{
          width: `${level}%`,
        }}
      />
    </div>
  </>
)

export default Skill