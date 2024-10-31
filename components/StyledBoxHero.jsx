import Link from "next/link";
import styles from "./StyledBoxHero.module.css";

const StyledBoxHero = (props) => {
  const { path, style, title, subtitle, description } = props;
  return (
    <>
      <Link href={path}>
        <div className={styles.styledBoxHero}>
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

export default StyledBoxHero;
