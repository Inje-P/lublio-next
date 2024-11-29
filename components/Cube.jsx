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
      <div className={styles.bottomFra}></div>
    </div>
  );
};

const CubeDeu = () => {
  return (
    <div className={styles.cubeDeu}>
      <div className={styles.topDeu}></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.bottomDeu}></div>
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
      <div className={styles.bottomRus}></div>
    </div>
  );
};

export { CubeFra, CubeDeu, CubeRus };
