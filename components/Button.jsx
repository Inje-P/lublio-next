import Link from "next/link";
import styles from "./Button.module.css";

const Button = (props) => {
  const { path, title } = props;
  return (
    <>
      <Link href={path} className={styles.btn}>
        <h2>{title}</h2>
        <div className={styles.arrow}>
          <span></span>
          <span></span>
        </div>
      </Link>
    </>
  );
};

export default Button;
