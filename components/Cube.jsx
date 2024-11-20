import styles from "./Cube.module.css";

const CubeFra = () => {
  return (
    <div className={styles.cubeFra}>
      <div className={styles.topFra}></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

const CubeRus = () => {
  return (
    <div className={styles.cubeRus}>
      <div className={styles.topRus}></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export { CubeFra, CubeRus };
