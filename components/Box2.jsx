import Link from "next/link";
import styles from "./Box2.module.css";

const Box2 = (props) => {
  const { path, title, subtitle, description } = props;
  return (
    <>
      <Link href={path}>
        <div className={styles.box2}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </Link>
    </>
  );
};

export default Box2;
