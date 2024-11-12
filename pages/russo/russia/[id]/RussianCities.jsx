import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Cities.module.css";

// Json Data
import cities_russia from "@/assets/json/cities/cities_russia.json";

export default function RussianCities() {
  const router = useRouter();
  const chapter = router.query.id;
  let data;

  useEffect(() => {
    switch (chapter) {
      case "1":
        data = cities_russia[0];
        break;
      case "2":
        data = cities_russia[1];
        break;
      case "3":
        data = cities_russia[2];
        break;
      case "4":
        data = cities_russia[3];
        break;
      case "5":
        data = cities_russia[4];
        break;
      case "6":
        data = cities_russia[5];
        break;
      case "7":
        data = cities_russia[6];
        break;
      case "8":
        data = cities_russia[7];
        break;
      case "9":
        data = cities_russia[8];
        break;
      case "10":
        data = cities_russia[9];
        break;
      case "11":
        data = cities_russia[10];
        break;
      case "12":
        data = cities_russia[11];
        break;
      case "13":
        data = cities_russia[12];
        break;
      case "14":
        data = cities_russia[13];
        break;
      case "15":
        data = cities_russia[14];
        break;
      case "16":
        data = cities_russia[15];
        break;
      case "17":
        data = cities_russia[16];
        break;
      case "18":
        data = cities_russia[17];
        break;
      case "19":
        data = cities_russia[18];
        break;
      case "20":
        data = cities_russia[19];
        break;
      default:
        data = cities_russia[0];
        break;
    }
  }, []);

  return (
    <>
      {chapter == "1" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[0].city}</h1>
            <h3>{cities_russia[0].region}</h3>
            <p>{cities_russia[0].content.content1}</p>
            <p>{cities_russia[0].content.content2}</p>
            <p>{cities_russia[0].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "2" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[1].city}</h1>
            <h3>{cities_russia[1].region}</h3>
            <p>{cities_russia[1].content.content1}</p>
            <p>{cities_russia[1].content.content2}</p>
            <p>{cities_russia[1].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "3" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[2].city}</h1>
            <h3>{cities_russia[2].region}</h3>
            <p>{cities_russia[2].content.content1}</p>
            <p>{cities_russia[2].content.content2}</p>
            <p>{cities_russia[2].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "4" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[3].city}</h1>
            <h3>{cities_russia[3].region}</h3>
            <p>{cities_russia[3].content.content1}</p>
            <p>{cities_russia[3].content.content2}</p>
            <p>{cities_russia[3].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "5" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[4].city}</h1>
            <h3>{cities_russia[4].region}</h3>
            <p>{cities_russia[4].content.content1}</p>
            <p>{cities_russia[4].content.content2}</p>
            <p>{cities_russia[4].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "6" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[5].city}</h1>
            <h3>{cities_russia[5].region}</h3>
            <p>{cities_russia[5].content.content1}</p>
            <p>{cities_russia[5].content.content2}</p>
            <p>{cities_russia[5].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "7" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[6].city}</h1>
            <h3>{cities_russia[6].region}</h3>
            <p>{cities_russia[6].content.content1}</p>
            <p>{cities_russia[6].content.content2}</p>
            <p>{cities_russia[6].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "8" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[7].city}</h1>
            <h3>{cities_russia[7].region}</h3>
            <p>{cities_russia[7].content.content1}</p>
            <p>{cities_russia[7].content.content2}</p>
            <p>{cities_russia[7].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "9" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[8].city}</h1>
            <h3>{cities_russia[8].region}</h3>
            <p>{cities_russia[8].content.content1}</p>
            <p>{cities_russia[8].content.content2}</p>
            <p>{cities_russia[8].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "10" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[9].city}</h1>
            <h3>{cities_russia[9].region}</h3>
            <p>{cities_russia[9].content.content1}</p>
            <p>{cities_russia[9].content.content2}</p>
            <p>{cities_russia[9].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "11" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[10].city}</h1>
            <h3>{cities_russia[10].region}</h3>
            <p>{cities_russia[10].content.content1}</p>
            <p>{cities_russia[10].content.content2}</p>
            <p>{cities_russia[10].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "12" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[11].city}</h1>
            <h3>{cities_russia[11].region}</h3>
            <p>{cities_russia[11].content.content1}</p>
            <p>{cities_russia[11].content.content2}</p>
            <p>{cities_russia[11].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "13" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[12].city}</h1>
            <h3>{cities_russia[12].region}</h3>
            <p>{cities_russia[12].content.content1}</p>
            <p>{cities_russia[12].content.content2}</p>
            <p>{cities_russia[12].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "14" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[13].city}</h1>
            <h3>{cities_russia[13].region}</h3>
            <p>{cities_russia[13].content.content1}</p>
            <p>{cities_russia[13].content.content2}</p>
            <p>{cities_russia[13].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "15" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[14].city}</h1>
            <h3>{cities_russia[14].region}</h3>
            <p>{cities_russia[14].content.content1}</p>
            <p>{cities_russia[14].content.content2}</p>
            <p>{cities_russia[14].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "16" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[15].city}</h1>
            <h3>{cities_russia[15].region}</h3>
            <p>{cities_russia[15].content.content1}</p>
            <p>{cities_russia[15].content.content2}</p>
            <p>{cities_russia[15].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "17" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[16].city}</h1>
            <h3>{cities_russia[16].region}</h3>
            <p>{cities_russia[16].content.content1}</p>
            <p>{cities_russia[16].content.content2}</p>
            <p>{cities_russia[16].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "18" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[17].city}</h1>
            <h3>{cities_russia[17].region}</h3>
            <p>{cities_russia[17].content.content1}</p>
            <p>{cities_russia[17].content.content2}</p>
            <p>{cities_russia[17].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "19" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[18].city}</h1>
            <h3>{cities_russia[18].region}</h3>
            <p>{cities_russia[18].content.content1}</p>
            <p>{cities_russia[18].content.content2}</p>
            <p>{cities_russia[18].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "20" ? (
        <>
          <div className={styles.articleBox}>
            <h1>{cities_russia[19].city}</h1>
            <h3>{cities_russia[19].region}</h3>
            <p>{cities_russia[19].content.content1}</p>
            <p>{cities_russia[19].content.content2}</p>
            <p>{cities_russia[19].content.content3}</p>
          </div>
        </>
      ) : null}
    </>
  );
}
