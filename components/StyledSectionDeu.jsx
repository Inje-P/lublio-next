import styles from "./StyledSectionDeu.module.css";

const StyledSectionDeu = (props) => {
  const { icon, description } = props;
  return (
    <>
      <div className={styles.styledSectionDeu}>
        <div className={styles.item}>
          <i className={styles.loader}></i>
        </div>
        <p>{description}</p>
        <div className={styles.styledSectionDeuIcon}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </>
  );
};

export default StyledSectionDeu;
