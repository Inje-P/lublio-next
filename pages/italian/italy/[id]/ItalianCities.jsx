import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Cities.module.css";
import CountryFlag from "react-country-flag";

// Json Data
import cities_italy from "@/assets/json/cities/cities_italy.json";

const Ticket = ({ city, region, flag }) => {
  return (
    <div className={styles.ticketWrapper}>
      <div className={styles.ticketSection1}>
        <CountryFlag
          countryCode={flag}
          svg
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            transform: "translateY(-5px)",
          }}
        />
        <div className={styles.ticketInnerLeft}>
          
        </div>
        <div className={styles.ticketInnerRight}>
          
        </div>
        <h1>{city}</h1>
        <h3>{region}</h3>
      </div>
      <div className={styles.ticketSection2}>
        <h2>Adventure</h2>
      </div>
    </div>
  );
};

export default function RussianCities() {
  const router = useRouter();
  const chapter = router.query.id;
  let data;

  useEffect(() => {
    switch (chapter) {
      case "1":
        data = cities_italy[0];
        break;
      case "2":
        data = cities_italy[1];
        break;
      case "3":
        data = cities_italy[2];
        break;
      case "4":
        data = cities_italy[3];
        break;
      case "5":
        data = cities_italy[4];
        break;
      case "6":
        data = cities_italy[5];
        break;
      case "7":
        data = cities_italy[6];
        break;
      case "8":
        data = cities_italy[7];
        break;
      case "9":
        data = cities_italy[8];
        break;
      case "10":
        data = cities_italy[9];
        break;
      case "11":
        data = cities_italy[10];
        break;
      case "12":
        data = cities_italy[11];
        break;
      case "13":
        data = cities_italy[12];
        break;
      case "14":
        data = cities_italy[13];
        break;
      case "15":
        data = cities_italy[14];
        break;
      case "16":
        data = cities_italy[15];
        break;
      case "17":
        data = cities_italy[16];
        break;
      case "18":
        data = cities_italy[17];
        break;
      case "19":
        data = cities_italy[18];
        break;
      case "20":
        data = cities_italy[19];
        break;
      default:
        data = cities_italy[0];
        break;
    }
  }, []);

  return (
    <>
      {chapter == "1" ? (
        <>
          <div className={styles.citiesWrapper}>
            <Ticket
              city={cities_italy[0].city}
              region={cities_italy[0].region}
              flag="IT"
            />
            <div className={styles.citiesBottom}>
              <p>{cities_italy[0].content.content1}</p>
              <p>{cities_italy[0].content.content2}</p>
              <p>{cities_italy[0].content.content3}</p>
            </div>
          </div>
        </>
      ) : null}
      {chapter == "2" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[1].city}</h1>
            <h3>{cities_italy[1].region}</h3>
            <p>{cities_italy[1].content.content1}</p>
            <p>{cities_italy[1].content.content2}</p>
            <p>{cities_italy[1].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "3" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[2].city}</h1>
            <h3>{cities_italy[2].region}</h3>
            <p>{cities_italy[2].content.content1}</p>
            <p>{cities_italy[2].content.content2}</p>
            <p>{cities_italy[2].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "4" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[3].city}</h1>
            <h3>{cities_italy[3].region}</h3>
            <p>{cities_italy[3].content.content1}</p>
            <p>{cities_italy[3].content.content2}</p>
            <p>{cities_italy[3].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "5" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[4].city}</h1>
            <h3>{cities_italy[4].region}</h3>
            <p>{cities_italy[4].content.content1}</p>
            <p>{cities_italy[4].content.content2}</p>
            <p>{cities_italy[4].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "6" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[5].city}</h1>
            <h3>{cities_italy[5].region}</h3>
            <p>{cities_italy[5].content.content1}</p>
            <p>{cities_italy[5].content.content2}</p>
            <p>{cities_italy[5].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "7" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[6].city}</h1>
            <h3>{cities_italy[6].region}</h3>
            <p>{cities_italy[6].content.content1}</p>
            <p>{cities_italy[6].content.content2}</p>
            <p>{cities_italy[6].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "8" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[7].city}</h1>
            <h3>{cities_italy[7].region}</h3>
            <p>{cities_italy[7].content.content1}</p>
            <p>{cities_italy[7].content.content2}</p>
            <p>{cities_italy[7].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "9" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[8].city}</h1>
            <h3>{cities_italy[8].region}</h3>
            <p>{cities_italy[8].content.content1}</p>
            <p>{cities_italy[8].content.content2}</p>
            <p>{cities_italy[8].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "10" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[9].city}</h1>
            <h3>{cities_italy[9].region}</h3>
            <p>{cities_italy[9].content.content1}</p>
            <p>{cities_italy[9].content.content2}</p>
            <p>{cities_italy[9].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "11" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[10].city}</h1>
            <h3>{cities_italy[10].region}</h3>
            <p>{cities_italy[10].content.content1}</p>
            <p>{cities_italy[10].content.content2}</p>
            <p>{cities_italy[10].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "12" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[11].city}</h1>
            <h3>{cities_italy[11].region}</h3>
            <p>{cities_italy[11].content.content1}</p>
            <p>{cities_italy[11].content.content2}</p>
            <p>{cities_italy[11].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "13" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[12].city}</h1>
            <h3>{cities_italy[12].region}</h3>
            <p>{cities_italy[12].content.content1}</p>
            <p>{cities_italy[12].content.content2}</p>
            <p>{cities_italy[12].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "14" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[13].city}</h1>
            <h3>{cities_italy[13].region}</h3>
            <p>{cities_italy[13].content.content1}</p>
            <p>{cities_italy[13].content.content2}</p>
            <p>{cities_italy[13].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "15" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[14].city}</h1>
            <h3>{cities_italy[14].region}</h3>
            <p>{cities_italy[14].content.content1}</p>
            <p>{cities_italy[14].content.content2}</p>
            <p>{cities_italy[14].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "16" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[15].city}</h1>
            <h3>{cities_italy[15].region}</h3>
            <p>{cities_italy[15].content.content1}</p>
            <p>{cities_italy[15].content.content2}</p>
            <p>{cities_italy[15].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "17" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[16].city}</h1>
            <h3>{cities_italy[16].region}</h3>
            <p>{cities_italy[16].content.content1}</p>
            <p>{cities_italy[16].content.content2}</p>
            <p>{cities_italy[16].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "18" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[17].city}</h1>
            <h3>{cities_italy[17].region}</h3>
            <p>{cities_italy[17].content.content1}</p>
            <p>{cities_italy[17].content.content2}</p>
            <p>{cities_italy[17].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "19" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[18].city}</h1>
            <h3>{cities_italy[18].region}</h3>
            <p>{cities_italy[18].content.content1}</p>
            <p>{cities_italy[18].content.content2}</p>
            <p>{cities_italy[18].content.content3}</p>
          </div>
        </>
      ) : null}
      {chapter == "20" ? (
        <>
          <div className={styles.citiesWrapper}>
            <h1>{cities_italy[19].city}</h1>
            <h3>{cities_italy[19].region}</h3>
            <p>{cities_italy[19].content.content1}</p>
            <p>{cities_italy[19].content.content2}</p>
            <p>{cities_italy[19].content.content3}</p>
          </div>
        </>
      ) : null}
    </>
  );
}
