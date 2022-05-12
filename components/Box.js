import styles from "../styles/Box.module.sass";

const Box = ({ title, children, bgColor }) => (
  <div className={styles.container}>
    <h2>{title}</h2>
    <>{children}</>
  </div>
);

export default Box;
