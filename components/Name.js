import styles from "../styles/Name.module.sass";

const Name = ({ children }) => <h3 className={styles.name}>{children}</h3>;

export default Name;
