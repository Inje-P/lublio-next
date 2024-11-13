import { useEffect, useState } from "react";

// Json Data
import chapter4_1 from "@/assets/json/phrasebook4/phrasebook4_1.json";
import chapter4_2 from "@/assets/json/phrasebook4/phrasebook4_2.json";
import chapter4_3 from "@/assets/json/phrasebook4/phrasebook4_3.json";
import chapter4_4 from "@/assets/json/phrasebook4/phrasebook4_4.json";
import chapter4_5 from "@/assets/json/phrasebook4/phrasebook4_5.json";
const obj4_1 = Object.entries(chapter4_1).map(([key, value]) => ({
  key,
  value,
}));
const obj4_2 = Object.entries(chapter4_2).map(([key, value]) => ({
  key,
  value,
}));
const obj4_3 = Object.entries(chapter4_3).map(([key, value]) => ({
  key,
  value,
}));
const obj4_4 = Object.entries(chapter4_4).map(([key, value]) => ({
  key,
  value,
}));
const obj4_5 = Object.entries(chapter4_5).map(([key, value]) => ({
  key,
  value,
}));

export default function Phrasebook4() {
  const [phrases1, setPhrases1] = useState("");
  const [phrases2, setPhrases2] = useState("");
  const [phrases3, setPhrases3] = useState("");
  const [phrases4, setPhrases4] = useState("");
  const [phrases5, setPhrases5] = useState("");

  const sectionTitles = [
    "Making reservations",
    "Ordering food and drinks",
    "Dietary restrictions",
    "Paying the bill",
    "Complimenting or complaining",
  ];

  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setPhrases1(obj4_1);
    setPhrases2(obj4_2);
    setPhrases3(obj4_3);
    setPhrases4(obj4_4);
    setPhrases5(obj4_5);
  }, []);

  return (
    <>
      {/* ───────────── Selector ───────────── */}
      <div style={{ marginBottom: "20px" }}>
        <select id="selection" onChange={handleSelect}>
          {sectionTitles.map((title, key) => (
            <option value={key + 1} key={key}>
              {title}
            </option>
          ))}
        </select>
      </div>
      {/* ───────────── Selector ───────────── */}

      {/* ───────────── Section 1 ───────────── */}
      {selected == 1 ? (
        <section id="section1" >
          {phrases1
            ? phrases1.map((phrase, key) => {
                return (
                  <div className="text-box" key={key}>
                    <p className="phrase-rus">
                      <span
                        className="fi fi-ru"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.rus}
                    </p>
                    <p className="phrase-eng">
                      <span
                        className="fi fi-gb"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.eng}
                    </p>
                  </div>
                );
              })
            : null}
        </section>
      ) : null}
      {/* ───────────── Section 1 ───────────── */}

      {/* ───────────── Section 2 ───────────── */}
      {selected == 2 ? (
        <section id="section2" >
          {phrases2
            ? phrases2.map((phrase, key) => {
                return (
                  <div className="text-box" key={key}>
                    <p className="phrase-rus">
                      <span
                        className="fi fi-ru"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.rus}
                    </p>
                    <p className="phrase-eng">
                      <span
                        className="fi fi-gb"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.eng}
                    </p>
                  </div>
                );
              })
            : null}
        </section>
      ) : null}
      {/* ───────────── Section 2 ───────────── */}

      {/* ───────────── Section 3 ───────────── */}
      {selected == 3 ? (
        <section id="section3" >
          {phrases3
            ? phrases3.map((phrase, key) => {
                return (
                  <div className="text-box" key={key}>
                    <p className="phrase-rus">
                      <span
                        className="fi fi-ru"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.rus}
                    </p>
                    <p className="phrase-eng">
                      <span
                        className="fi fi-gb"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.eng}
                    </p>
                  </div>
                );
              })
            : null}
        </section>
      ) : null}
      {/* ───────────── Section 3 ───────────── */}

      {/* ───────────── Section 4 ───────────── */}
      {selected == 4 ? (
        <section id="section4" >
          {phrases4
            ? phrases4.map((phrase, key) => {
                return (
                  <div className="text-box" key={key}>
                    <p className="phrase-rus">
                      <span
                        className="fi fi-ru"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.rus}
                    </p>
                    <p className="phrase-eng">
                      <span
                        className="fi fi-gb"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.eng}
                    </p>
                  </div>
                );
              })
            : null}
        </section>
      ) : null}
      {/* ───────────── Section 4 ───────────── */}

      {/* ───────────── Section 5 ───────────── */}
      {selected == 5 ? (
        <section id="section5" >
          {phrases5
            ? phrases5.map((phrase, key) => {
                return (
                  <div className="text-box" key={key}>
                    <p className="phrase-rus">
                      <span
                        className="fi fi-ru"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.rus}
                    </p>
                    <p className="phrase-eng">
                      <span
                        className="fi fi-gb"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.eng}
                    </p>
                  </div>
                );
              })
            : null}
        </section>
      ) : null}
      {/* ───────────── Section 5 ───────────── */}
    </>
  );
}
