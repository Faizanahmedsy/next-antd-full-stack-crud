import styles from "./pagewrapper.module.css";

const PageWrapper = ({ children }) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default PageWrapper;
