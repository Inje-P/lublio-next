import styles from "./StyledSectionFra.module.css";

const StyledSectionFra = (props) => {
  const { icon, description } = props;
  return (
    <>
      <div className={styles.styledSectionFra}>
        <div className={styles.item}>
          <i className={styles.loader}></i>
        </div>
        <p>{description}</p>
        <div className={styles.styledSectionFraIcon}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </>
  );
};

export default StyledSectionFra;
