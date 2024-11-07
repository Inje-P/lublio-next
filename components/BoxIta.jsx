import Link from "next/link";
import styles from "./BoxIta.module.css";

const BoxIta = (props) => {
  const { path, title, subtitle, description } = props;
  return (
    <>
      <Link href={path}>
        <div className={styles.box}>
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

export default BoxIta;
