import styles from "./StyledSectionRus.module.css";

const StyledSectionRus = (props) => {
  const { icon, description } = props;
  return (
    <>
      <div className={styles.styledSectionRus}>
        <div className={styles.item}>
          <i className={styles.loader}></i>
        </div>
        <p>{description}</p>
        <div className={styles.styledSectionRusIcon}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </>
  );
};

export default StyledSectionRus;
