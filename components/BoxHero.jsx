import Link from "next/link";
import styles from "./BoxHero.module.css";

const BoxHero = (props) => {
  const { path, style, title, subtitle, description } = props;
  return (
    <>
      <Link href={path}>
        <div className={styles.boxHero}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className={styles.arrow}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default BoxHero;
