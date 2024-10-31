import { useEffect, useState } from "react";

// Json Data
import chapter3_1 from "@/assets/json/phrasebook3/phrasebook3_1.json";
import chapter3_2 from "@/assets/json/phrasebook3/phrasebook3_2.json";
import chapter3_3 from "@/assets/json/phrasebook3/phrasebook3_3.json";
import chapter3_4 from "@/assets/json/phrasebook3/phrasebook3_4.json";
const obj3_1 = Object.entries(chapter3_1).map(([key, value]) => ({
  key,
  value,
}));
const obj3_2 = Object.entries(chapter3_2).map(([key, value]) => ({
  key,
  value,
}));
const obj3_3 = Object.entries(chapter3_3).map(([key, value]) => ({
  key,
  value,
}));
const obj3_4 = Object.entries(chapter3_4).map(([key, value]) => ({
  key,
  value,
}));

export default function Phrasebook3() {
  const [phrases1, setPhrases1] = useState("");
  const [phrases2, setPhrases2] = useState("");
  const [phrases3, setPhrases3] = useState("");
  const [phrases4, setPhrases4] = useState("");
  const [phrases5, setPhrases5] = useState("");

  const sectionTitles = [
    "Checking in and out of a hotel",
    "Asking about amenities",
    "Requesting services",
    "Dealing with issues",
  ];

  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setPhrases1(obj3_1);
    setPhrases2(obj3_2);
    setPhrases3(obj3_3);
    setPhrases4(obj3_4);
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
        <section id="section1" className="animated fade_1">
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
        <section id="section2" className="animated fade_1">
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
        <section id="section3" className="animated fade_1">
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
        <section id="section4" className="animated fade_1">
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
        <section id="section5" className="animated fade_1">
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
