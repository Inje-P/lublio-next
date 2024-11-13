import { useEffect, useState } from "react";

// Json Data
import chapter7_1 from "@/assets/json/phrasebook7/phrasebook7_1.json";
import chapter7_2 from "@/assets/json/phrasebook7/phrasebook7_2.json";
import chapter7_3 from "@/assets/json/phrasebook7/phrasebook7_3.json";
import chapter7_4 from "@/assets/json/phrasebook7/phrasebook7_4.json";
import chapter7_5 from "@/assets/json/phrasebook7/phrasebook7_5.json";
const obj7_1 = Object.entries(chapter7_1).map(([key, value]) => ({
  key,
  value,
}));
const obj7_2 = Object.entries(chapter7_2).map(([key, value]) => ({
  key,
  value,
}));
const obj7_3 = Object.entries(chapter7_3).map(([key, value]) => ({
  key,
  value,
}));
const obj7_4 = Object.entries(chapter7_4).map(([key, value]) => ({
  key,
  value,
}));
const obj7_5 = Object.entries(chapter7_5).map(([key, value]) => ({
  key,
  value,
}));

export default function Phrasebook7() {
  const [phrases1, setPhrases1] = useState("");
  const [phrases2, setPhrases2] = useState("");
  const [phrases3, setPhrases3] = useState("");
  const [phrases4, setPhrases4] = useState("");
  const [phrases5, setPhrases5] = useState("");

  const sectionTitles = [
    "Finding co-working spaces",
    "Asking about facilities",
    "Setting up meetings",
    "Technical support for devices",
    "Discussing work schedules",
  ];

  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setPhrases1(obj7_1);
    setPhrases2(obj7_2);
    setPhrases3(obj7_3);
    setPhrases4(obj7_4);
    setPhrases5(obj7_5);
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
                    <p className="phrase-deu">
                      <span
                        className="fi fi-de"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.deu}
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
                    <p className="phrase-deu">
                      <span
                        className="fi fi-de"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.deu}
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
                    <p className="phrase-deu">
                      <span
                        className="fi fi-de"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.deu}
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
                    <p className="phrase-deu">
                      <span
                        className="fi fi-de"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.deu}
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
                    <p className="phrase-deu">
                      <span
                        className="fi fi-de"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.deu}
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
