import styles from "../styles/Skill.module.sass";

const Skill = ({ children, level }) => (
  <div className="flex w-1/3 lg:w-full flex-col p-4">
    <h5 className={styles.skillName}>{children}</h5>
    <div
      className={`
    bg-darkBlue
      w-full lg:w-full
      h-4
      p-1
      rounded-full
    `}
    >
      <div
        className={styles.skillGaugeLevel}
        style={{
          width: `${level}%`,
        }}
      />
    </div>
  </div>
)

export default Skill