import styles from "./TableHorizontal.module.css";

const TableHorizontal = (props) => {
  const { numberOfColumns, data } = props;
  const object = Object.entries(data).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <>
      {numberOfColumns == "1" ? (
        <div className={styles.tableHorizontal}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfColumns == "2" ? (
        <div className={styles.tableHorizontal}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfColumns == "3" ? (
        <div className={styles.tableHorizontal}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfColumns == "4" ? (
        <div className={styles.tableHorizontal}>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <p>{object[3].key}</p>
            </div>
            {object[3].value
              ? object[3].value.map((row, key) => {
                  return (
                    <div className={styles.row} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TableHorizontal;
