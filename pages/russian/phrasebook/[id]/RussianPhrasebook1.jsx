import { useEffect, useState } from "react";

// Json Data
import chapter1_1 from "@/assets/json/phrasebook1/phrasebook1_1.json";
import chapter1_2 from "@/assets/json/phrasebook1/phrasebook1_2.json";
import chapter1_3 from "@/assets/json/phrasebook1/phrasebook1_3.json";
import chapter1_4 from "@/assets/json/phrasebook1/phrasebook1_4.json";
const obj1_1 = Object.entries(chapter1_1).map(([key, value]) => ({
  key,
  value,
}));
const obj1_2 = Object.entries(chapter1_2).map(([key, value]) => ({
  key,
  value,
}));
const obj1_3 = Object.entries(chapter1_3).map(([key, value]) => ({
  key,
  value,
}));
const obj1_4 = Object.entries(chapter1_4).map(([key, value]) => ({
  key,
  value,
}));

export default function Phrasebook1() {
  const [phrases1, setPhrases1] = useState("");
  const [phrases2, setPhrases2] = useState("");
  const [phrases3, setPhrases3] = useState("");
  const [phrases4, setPhrases4] = useState("");
  const [phrases5, setPhrases5] = useState("");

  const sectionTitles = [
    "Common greetings",
    "Introducing oneself",
    "Asking for someone's information",
    "Simple pleasantries",
  ];

  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setPhrases1(obj1_1);
    setPhrases2(obj1_2);
    setPhrases3(obj1_3);
    setPhrases4(obj1_4);
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
        <section id="section1">
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
        <section id="section2">
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
        <section id="section3">
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
        <section id="section4">
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
        <section id="section5">
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
      {/* ───────────── Section 5 ───────────── */}
    </>
  );
}
