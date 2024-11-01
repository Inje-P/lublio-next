import Link from "next/link";
import styles from "./StyledBoxRus.module.css";

const StyledBoxRus = (props) => {
  const { path, title, subtitle, description } = props;
  return (
    <>
      <Link href={path}>
        <div className={styles.styledBox}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className={styles.item}>
            <i className={styles.loader}></i>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default StyledBoxRus;
