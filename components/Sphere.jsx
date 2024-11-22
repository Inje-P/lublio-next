import React, {CSSProperties} from "react";
import styles from "./Sphere.module.css";

const Sphere = () => {
  return (
    <>
      <div className={styles.loader} style={{"--j":0} as React.CSSProperties}></div>
    </>
  );
};

export default Sphere;
