import { useEffect, useState } from "react";

// Json Data
import chapter2_1 from "@/assets/json/phrasebook2/phrasebook2_1.json";
import chapter2_2 from "@/assets/json/phrasebook2/phrasebook2_2.json";
import chapter2_3 from "@/assets/json/phrasebook2/phrasebook2_3.json";
import chapter2_4 from "@/assets/json/phrasebook2/phrasebook2_4.json";
import chapter2_5 from "@/assets/json/phrasebook2/phrasebook2_5.json";
const obj2_1 = Object.entries(chapter2_1).map(([key, value]) => ({
  key,
  value,
}));
const obj2_2 = Object.entries(chapter2_2).map(([key, value]) => ({
  key,
  value,
}));
const obj2_3 = Object.entries(chapter2_3).map(([key, value]) => ({
  key,
  value,
}));
const obj2_4 = Object.entries(chapter2_4).map(([key, value]) => ({
  key,
  value,
}));
const obj2_5 = Object.entries(chapter2_5).map(([key, value]) => ({
  key,
  value,
}));

export default function Phrasebook2() {
  const [phrases1, setPhrases1] = useState("");
  const [phrases2, setPhrases2] = useState("");
  const [phrases3, setPhrases3] = useState("");
  const [phrases4, setPhrases4] = useState("");
  const [phrases5, setPhrases5] = useState("");

  const sectionTitles = [
    "Asking for directions",
    "Buying tickets",
    "Inquiring about schedules",
    "Renting a car or bicycle",
    "Getting a taxi",
  ];

  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setPhrases1(obj2_1);
    setPhrases2(obj2_2);
    setPhrases3(obj2_3);
    setPhrases4(obj2_4);
    setPhrases5(obj2_5);
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
                    <p className="phrase-fra">
                      <span
                        className="fi fi-fr"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.fra}
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
                    <p className="phrase-fra">
                      <span
                        className="fi fi-fr"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.fra}
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
                    <p className="phrase-fra">
                      <span
                        className="fi fi-fr"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.fra}
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
                    <p className="phrase-fra">
                      <span
                        className="fi fi-fr"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.fra}
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
                    <p className="phrase-fra">
                      <span
                        className="fi fi-fr"
                        style={{ marginRight: "10px" }}
                      ></span>
                      {phrase.value.fra}
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
