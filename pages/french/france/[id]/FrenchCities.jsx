import { useEffect } from "react";
import { useRouter } from "next/router";

// Json Data
import cities_france from "@/assets/json/cities/cities_france.json";

export default function FrenchCities() {
  const router = useRouter();
  const chapter = router.query.id;
  let data;

  useEffect(() => {
    switch (chapter) {
      case "1":
        data = cities_france[0];
        break;
      case "2":
        data = cities_france[1];
        break;
      case "3":
        data = cities_france[2];
        break;
      case "4":
        data = cities_france[3];
        break;
      case "5":
        data = cities_france[4];
        break;
      case "6":
        data = cities_france[5];
        break;
      case "7":
        data = cities_france[6];
        break;
      case "8":
        data = cities_france[7];
        break;
      case "9":
        data = cities_france[8];
        break;
      case "10":
        data = cities_france[9];
        break;
      case "11":
        data = cities_france[10];
        break;
      case "12":
        data = cities_france[11];
        break;
      case "13":
        data = cities_france[12];
        break;
      case "14":
        data = cities_france[13];
        break;
      case "15":
        data = cities_france[14];
        break;
      case "16":
        data = cities_france[15];
        break;
      case "17":
        data = cities_france[16];
        break;
      case "18":
        data = cities_france[17];
        break;
      case "19":
        data = cities_france[18];
        break;
      case "20":
        data = cities_france[19];
        break;
      default:
        data = cities_france[0];
        break;
    }
  }, []);

  return (
    <>
      {chapter == "1" ? (
        <>
          <h1>{cities_france[0].city}</h1>
          <h3>{cities_france[0].region}</h3>
          <p>{cities_france[0].content.content1}</p>
          <p>{cities_france[0].content.content2}</p>
          <p>{cities_france[0].content.content3}</p>
        </>
      ) : null}
      {chapter == "2" ? (
        <>
          <h1>{cities_france[1].city}</h1>
          <h3>{cities_france[1].region}</h3>
          <p>{cities_france[1].content.content1}</p>
          <p>{cities_france[1].content.content2}</p>
          <p>{cities_france[1].content.content3}</p>
        </>
      ) : null}
      {chapter == "3" ? (
        <>
          <h1>{cities_france[2].city}</h1>
          <h3>{cities_france[2].region}</h3>
          <p>{cities_france[2].content.content1}</p>
          <p>{cities_france[2].content.content2}</p>
          <p>{cities_france[2].content.content3}</p>
        </>
      ) : null}
      {chapter == "4" ? (
        <>
          <h1>{cities_france[3].city}</h1>
          <h3>{cities_france[3].region}</h3>
          <p>{cities_france[3].content.content1}</p>
          <p>{cities_france[3].content.content2}</p>
          <p>{cities_france[3].content.content3}</p>
        </>
      ) : null}
      {chapter == "5" ? (
        <>
          <h1>{cities_france[4].city}</h1>
          <h3>{cities_france[4].region}</h3>
          <p>{cities_france[4].content.content1}</p>
          <p>{cities_france[4].content.content2}</p>
          <p>{cities_france[4].content.content3}</p>
        </>
      ) : null}
      {chapter == "6" ? (
        <>
          <h1>{cities_france[5].city}</h1>
          <h3>{cities_france[5].region}</h3>
          <p>{cities_france[5].content.content1}</p>
          <p>{cities_france[5].content.content2}</p>
          <p>{cities_france[5].content.content3}</p>
        </>
      ) : null}
      {chapter == "7" ? (
        <>
          <h1>{cities_france[6].city}</h1>
          <h3>{cities_france[6].region}</h3>
          <p>{cities_france[6].content.content1}</p>
          <p>{cities_france[6].content.content2}</p>
          <p>{cities_france[6].content.content3}</p>
        </>
      ) : null}
      {chapter == "8" ? (
        <>
          <h1>{cities_france[7].city}</h1>
          <h3>{cities_france[7].region}</h3>
          <p>{cities_france[7].content.content1}</p>
          <p>{cities_france[7].content.content2}</p>
          <p>{cities_france[7].content.content3}</p>
        </>
      ) : null}
      {chapter == "9" ? (
        <>
          <h1>{cities_france[8].city}</h1>
          <h3>{cities_france[8].region}</h3>
          <p>{cities_france[8].content.content1}</p>
          <p>{cities_france[8].content.content2}</p>
          <p>{cities_france[8].content.content3}</p>
        </>
      ) : null}
      {chapter == "10" ? (
        <>
          <h1>{cities_france[9].city}</h1>
          <h3>{cities_france[9].region}</h3>
          <p>{cities_france[9].content.content1}</p>
          <p>{cities_france[9].content.content2}</p>
          <p>{cities_france[9].content.content3}</p>
        </>
      ) : null}
      {chapter == "11" ? (
        <>
          <h1>{cities_france[10].city}</h1>
          <h3>{cities_france[10].region}</h3>
          <p>{cities_france[10].content.content1}</p>
          <p>{cities_france[10].content.content2}</p>
          <p>{cities_france[10].content.content3}</p>
        </>
      ) : null}
      {chapter == "12" ? (
        <>
          <h1>{cities_france[11].city}</h1>
          <h3>{cities_france[11].region}</h3>
          <p>{cities_france[11].content.content1}</p>
          <p>{cities_france[11].content.content2}</p>
          <p>{cities_france[11].content.content3}</p>
        </>
      ) : null}
      {chapter == "13" ? (
        <>
          <h1>{cities_france[12].city}</h1>
          <h3>{cities_france[12].region}</h3>
          <p>{cities_france[12].content.content1}</p>
          <p>{cities_france[12].content.content2}</p>
          <p>{cities_france[12].content.content3}</p>
        </>
      ) : null}
      {chapter == "14" ? (
        <>
          <h1>{cities_france[13].city}</h1>
          <h3>{cities_france[13].region}</h3>
          <p>{cities_france[13].content.content1}</p>
          <p>{cities_france[13].content.content2}</p>
          <p>{cities_france[13].content.content3}</p>
        </>
      ) : null}
      {chapter == "15" ? (
        <>
          <h1>{cities_france[14].city}</h1>
          <h3>{cities_france[14].region}</h3>
          <p>{cities_france[14].content.content1}</p>
          <p>{cities_france[14].content.content2}</p>
          <p>{cities_france[14].content.content3}</p>
        </>
      ) : null}
      {chapter == "16" ? (
        <>
          <h1>{cities_france[15].city}</h1>
          <h3>{cities_france[15].region}</h3>
          <p>{cities_france[15].content.content1}</p>
          <p>{cities_france[15].content.content2}</p>
          <p>{cities_france[15].content.content3}</p>
        </>
      ) : null}
      {chapter == "17" ? (
        <>
          <h1>{cities_france[16].city}</h1>
          <h3>{cities_france[16].region}</h3>
          <p>{cities_france[16].content.content1}</p>
          <p>{cities_france[16].content.content2}</p>
          <p>{cities_france[16].content.content3}</p>
        </>
      ) : null}
      {chapter == "18" ? (
        <>
          <h1>{cities_france[17].city}</h1>
          <h3>{cities_france[17].region}</h3>
          <p>{cities_france[17].content.content1}</p>
          <p>{cities_france[17].content.content2}</p>
          <p>{cities_france[17].content.content3}</p>
        </>
      ) : null}
      {chapter == "19" ? (
        <>
          <h1>{cities_france[18].city}</h1>
          <h3>{cities_france[18].region}</h3>
          <p>{cities_france[18].content.content1}</p>
          <p>{cities_france[18].content.content2}</p>
          <p>{cities_france[18].content.content3}</p>
        </>
      ) : null}
      {chapter == "20" ? (
        <>
          <h1>{cities_france[19].city}</h1>
          <h3>{cities_france[19].region}</h3>
          <p>{cities_france[19].content.content1}</p>
          <p>{cities_france[19].content.content2}</p>
          <p>{cities_france[19].content.content3}</p>
        </>
      ) : null}
    </>
  );
}
