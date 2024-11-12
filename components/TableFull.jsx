import styles from "./TableFull.module.css";

const TableFull = (props) => {
  const { numberOfRows, columns, data } = props;
  const object = Object.entries(data).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <>
      {numberOfRows == "1" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfRows == "2" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfRows == "3" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfRows == "4" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[3].key}</p>
            </div>
            {object[3].value
              ? object[3].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfRows == "5" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[3].key}</p>
            </div>
            {object[3].value
              ? object[3].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[4].key}</p>
            </div>
            {object[4].value
              ? object[4].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfRows == "6" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[3].key}</p>
            </div>
            {object[3].value
              ? object[3].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[4].key}</p>
            </div>
            {object[4].value
              ? object[4].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[5].key}</p>
            </div>
            {object[5].value
              ? object[5].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfRows == "7" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[3].key}</p>
            </div>
            {object[3].value
              ? object[3].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[4].key}</p>
            </div>
            {object[4].value
              ? object[4].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[5].key}</p>
            </div>
            {object[5].value
              ? object[5].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[6].key}</p>
            </div>
            {object[6].value
              ? object[6].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : null}

      {numberOfRows == "8" ? (
        <div className={styles.tableFull}>
          <div className={styles.row}>
            <div className={styles.rowHeader}></div>
            {columns
              ? columns.map((column, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          color: "var(--zinc200)",
                          fontWeight: 500,
                          cursor: "default",
                        }}
                      >
                        {column}
                      </p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[0].key}</p>
            </div>
            {object[0].value
              ? object[0].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[1].key}</p>
            </div>
            {object[1].value
              ? object[1].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[2].key}</p>
            </div>
            {object[2].value
              ? object[2].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[3].key}</p>
            </div>
            {object[3].value
              ? object[3].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[4].key}</p>
            </div>
            {object[4].value
              ? object[4].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[5].key}</p>
            </div>
            {object[5].value
              ? object[5].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[6].key}</p>
            </div>
            {object[6].value
              ? object[6].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
                      <p>{row}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.row}>
            <div className={styles.rowHeader}>
              <p>{object[7].key}</p>
            </div>
            {object[7].value
              ? object[7].value.map((row, key) => {
                  return (
                    <div className={styles.column} key={key}>
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

export default TableFull;
