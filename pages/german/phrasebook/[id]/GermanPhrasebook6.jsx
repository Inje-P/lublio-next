import { useEffect, useState } from "react";

// Json Data
import chapter6_1 from "@/assets/json/phrasebook6/phrasebook6_1.json";
import chapter6_2 from "@/assets/json/phrasebook6/phrasebook6_2.json";
import chapter6_3 from "@/assets/json/phrasebook6/phrasebook6_3.json";
import chapter6_4 from "@/assets/json/phrasebook6/phrasebook6_4.json";
const obj6_1 = Object.entries(chapter6_1).map(([key, value]) => ({
  key,
  value,
}));
const obj6_2 = Object.entries(chapter6_2).map(([key, value]) => ({
  key,
  value,
}));
const obj6_3 = Object.entries(chapter6_3).map(([key, value]) => ({
  key,
  value,
}));
const obj6_4 = Object.entries(chapter6_4).map(([key, value]) => ({
  key,
  value,
}));

export default function Phrasebook6() {
  const [phrases1, setPhrases1] = useState("");
  const [phrases2, setPhrases2] = useState("");
  const [phrases3, setPhrases3] = useState("");
  const [phrases4, setPhrases4] = useState("");
  const [phrases5, setPhrases5] = useState("");

  const sectionTitles = [
    "Describing symptoms",
    "Asking for medication",
    "Emergency contact",
    "First aid phrases",
  ];

  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setPhrases1(obj6_1);
    setPhrases2(obj6_2);
    setPhrases3(obj6_3);
    setPhrases4(obj6_4);
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
        <section id="section2" className="animated fade_1">
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
        <section id="section3" className="animated fade_1">
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
        <section id="section4" className="animated fade_1">
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
        <section id="section5" className="animated fade_1">
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
