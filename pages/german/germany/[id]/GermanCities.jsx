import { useEffect } from "react";
import { useRouter } from "next/router";

// Json Data
import cities_germany from "@/assets/json/cities/cities_germany.json";

export default function GermanCities() {
  const router = useRouter();
  const chapter = router.query.id;
  let data;

  useEffect(() => {
    switch (chapter) {
      case "1":
        data = cities_germany[0];
        break;
      case "2":
        data = cities_germany[1];
        break;
      case "3":
        data = cities_germany[2];
        break;
      case "4":
        data = cities_germany[3];
        break;
      case "5":
        data = cities_germany[4];
        break;
      case "6":
        data = cities_germany[5];
        break;
      case "7":
        data = cities_germany[6];
        break;
      case "8":
        data = cities_germany[7];
        break;
      case "9":
        data = cities_germany[8];
        break;
      case "10":
        data = cities_germany[9];
        break;
      case "11":
        data = cities_germany[10];
        break;
      case "12":
        data = cities_germany[11];
        break;
      case "13":
        data = cities_germany[12];
        break;
      case "14":
        data = cities_germany[13];
        break;
      case "15":
        data = cities_germany[14];
        break;
      case "16":
        data = cities_germany[15];
        break;
      case "17":
        data = cities_germany[16];
        break;
      case "18":
        data = cities_germany[17];
        break;
      case "19":
        data = cities_germany[18];
        break;
      case "20":
        data = cities_germany[19];
        break;
      default:
        data = cities_germany[0];
        break;
    }
  }, []);

  return (
    <>
      {chapter == "1" ? (
        <>
          <h1>{cities_germany[0].city}</h1>
          <h3>{cities_germany[0].bundesland}</h3>
          <p>{cities_germany[0].content.content1}</p>
          <p>{cities_germany[0].content.content2}</p>
          <p>{cities_germany[0].content.content3}</p>
        </>
      ) : null}
      {chapter == "2" ? (
        <>
          <h1>{cities_germany[1].city}</h1>
          <h3>{cities_germany[1].bundesland}</h3>
          <p>{cities_germany[1].content.content1}</p>
          <p>{cities_germany[1].content.content2}</p>
          <p>{cities_germany[1].content.content3}</p>
        </>
      ) : null}
      {chapter == "3" ? (
        <>
          <h1>{cities_germany[2].city}</h1>
          <h3>{cities_germany[2].bundesland}</h3>
          <p>{cities_germany[2].content.content1}</p>
          <p>{cities_germany[2].content.content2}</p>
          <p>{cities_germany[2].content.content3}</p>
        </>
      ) : null}
      {chapter == "4" ? (
        <>
          <h1>{cities_germany[3].city}</h1>
          <h3>{cities_germany[3].bundesland}</h3>
          <p>{cities_germany[3].content.content1}</p>
          <p>{cities_germany[3].content.content2}</p>
          <p>{cities_germany[3].content.content3}</p>
        </>
      ) : null}
      {chapter == "5" ? (
        <>
          <h1>{cities_germany[4].city}</h1>
          <h3>{cities_germany[4].bundesland}</h3>
          <p>{cities_germany[4].content.content1}</p>
          <p>{cities_germany[4].content.content2}</p>
          <p>{cities_germany[4].content.content3}</p>
        </>
      ) : null}
      {chapter == "6" ? (
        <>
          <h1>{cities_germany[5].city}</h1>
          <h3>{cities_germany[5].bundesland}</h3>
          <p>{cities_germany[5].content.content1}</p>
          <p>{cities_germany[5].content.content2}</p>
          <p>{cities_germany[5].content.content3}</p>
        </>
      ) : null}
      {chapter == "7" ? (
        <>
          <h1>{cities_germany[6].city}</h1>
          <h3>{cities_germany[6].bundesland}</h3>
          <p>{cities_germany[6].content.content1}</p>
          <p>{cities_germany[6].content.content2}</p>
          <p>{cities_germany[6].content.content3}</p>
        </>
      ) : null}
      {chapter == "8" ? (
        <>
          <h1>{cities_germany[7].city}</h1>
          <h3>{cities_germany[7].bundesland}</h3>
          <p>{cities_germany[7].content.content1}</p>
          <p>{cities_germany[7].content.content2}</p>
          <p>{cities_germany[7].content.content3}</p>
        </>
      ) : null}
      {chapter == "9" ? (
        <>
          <h1>{cities_germany[8].city}</h1>
          <h3>{cities_germany[8].bundesland}</h3>
          <p>{cities_germany[8].content.content1}</p>
          <p>{cities_germany[8].content.content2}</p>
          <p>{cities_germany[8].content.content3}</p>
        </>
      ) : null}
      {chapter == "10" ? (
        <>
          <h1>{cities_germany[9].city}</h1>
          <h3>{cities_germany[9].bundesland}</h3>
          <p>{cities_germany[9].content.content1}</p>
          <p>{cities_germany[9].content.content2}</p>
          <p>{cities_germany[9].content.content3}</p>
        </>
      ) : null}
      {chapter == "11" ? (
        <>
          <h1>{cities_germany[10].city}</h1>
          <h3>{cities_germany[10].bundesland}</h3>
          <p>{cities_germany[10].content.content1}</p>
          <p>{cities_germany[10].content.content2}</p>
          <p>{cities_germany[10].content.content3}</p>
        </>
      ) : null}
      {chapter == "12" ? (
        <>
          <h1>{cities_germany[11].city}</h1>
          <h3>{cities_germany[11].bundesland}</h3>
          <p>{cities_germany[11].content.content1}</p>
          <p>{cities_germany[11].content.content2}</p>
          <p>{cities_germany[11].content.content3}</p>
        </>
      ) : null}
      {chapter == "13" ? (
        <>
          <h1>{cities_germany[12].city}</h1>
          <h3>{cities_germany[12].bundesland}</h3>
          <p>{cities_germany[12].content.content1}</p>
          <p>{cities_germany[12].content.content2}</p>
          <p>{cities_germany[12].content.content3}</p>
        </>
      ) : null}
      {chapter == "14" ? (
        <>
          <h1>{cities_germany[13].city}</h1>
          <h3>{cities_germany[13].bundesland}</h3>
          <p>{cities_germany[13].content.content1}</p>
          <p>{cities_germany[13].content.content2}</p>
          <p>{cities_germany[13].content.content3}</p>
        </>
      ) : null}
      {chapter == "15" ? (
        <>
          <h1>{cities_germany[14].city}</h1>
          <h3>{cities_germany[14].bundesland}</h3>
          <p>{cities_germany[14].content.content1}</p>
          <p>{cities_germany[14].content.content2}</p>
          <p>{cities_germany[14].content.content3}</p>
        </>
      ) : null}
      {chapter == "16" ? (
        <>
          <h1>{cities_germany[15].city}</h1>
          <h3>{cities_germany[15].bundesland}</h3>
          <p>{cities_germany[15].content.content1}</p>
          <p>{cities_germany[15].content.content2}</p>
          <p>{cities_germany[15].content.content3}</p>
        </>
      ) : null}
      {chapter == "17" ? (
        <>
          <h1>{cities_germany[16].city}</h1>
          <h3>{cities_germany[16].bundesland}</h3>
          <p>{cities_germany[16].content.content1}</p>
          <p>{cities_germany[16].content.content2}</p>
          <p>{cities_germany[16].content.content3}</p>
        </>
      ) : null}
      {chapter == "18" ? (
        <>
          <h1>{cities_germany[17].city}</h1>
          <h3>{cities_germany[17].bundesland}</h3>
          <p>{cities_germany[17].content.content1}</p>
          <p>{cities_germany[17].content.content2}</p>
          <p>{cities_germany[17].content.content3}</p>
        </>
      ) : null}
      {chapter == "19" ? (
        <>
          <h1>{cities_germany[18].city}</h1>
          <h3>{cities_germany[18].bundesland}</h3>
          <p>{cities_germany[18].content.content1}</p>
          <p>{cities_germany[18].content.content2}</p>
          <p>{cities_germany[18].content.content3}</p>
        </>
      ) : null}
      {chapter == "20" ? (
        <>
          <h1>{cities_germany[19].city}</h1>
          <h3>{cities_germany[19].bundesland}</h3>
          <p>{cities_germany[19].content.content1}</p>
          <p>{cities_germany[19].content.content2}</p>
          <p>{cities_germany[19].content.content3}</p>
        </>
      ) : null}
    </>
  );
}
