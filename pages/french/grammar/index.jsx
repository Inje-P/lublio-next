import Head from "next/head";
import { useEffect, useState } from "react";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";
import Header from "@/components/Header";
import styles from "@/styles/French.module.css";

import PersonalPronoun1 from "./PersonalPronoun1";
import PersonalPronoun2 from "./PersonalPronoun2";
import PersonalPronoun3 from "./PersonalPronoun3";
import PersonalPronoun4 from "./PersonalPronoun4";

export default function FrenchGrammar() {
  const [section, setSection] = useState(1);
  const [example1, setExample1] = useState(1);
  const [example2, setExample2] = useState(1);
  const [example3, setExample3] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lublio" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="title" content="Lublio" />

        <meta
          name="keywords"
          content="english, french, spanish, german, italian, russian, turkish, greek, portuguese, polish, romanian, czech, language, language learning, learning, polyglot"
        />
        <meta
          name="description"
          content="Lublio, your ultimate destination for language learning. Our website provides interactive lessons, engaging practice exercises, and expert guidance tailored to your learning pace. Join our community of learners and start your language journey today!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lublio" />
        <meta property="og:site_name" content="Lublio" />
        <meta
          property="og:description"
          content="Lublio, your ultimate destination for language learning. Our website provides interactive lessons, engaging practice exercises, and expert guidance tailored to your learning pace. Join our community of learners and start your language journey today!"
        />
        <meta property="og:image" content="@/public/images/lublio_og.png" />
        <meta property="og:url" content="https://lublio.com" />

        <link rel="canonical" href="https://lublio.com" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css"
        />

        <title>Lublio</title>
      </Head>
      <Header />
      <div className={styles.bgDark}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1 className="riseUp_1">Les pronoms personnels</h1>
            <h2 className="riseUp_2">Personal pronouns</h2>
          </div>
          <div className={styles.contents}>
            <div className="buttons">
              <button onClick={() => setSection(1)}>Pronoms sujets</button>
              <button onClick={() => setSection(2)}>COD</button>
              <button onClick={() => setSection(3)}>COI</button>
              <button onClick={() => setSection(4)}>Pronoms toniques</button>
              <button onClick={() => setSection(5)}>✨</button>
            </div>

            {section == 1 ? <PersonalPronoun1 /> : null}
            {section == 2 ? <PersonalPronoun2 /> : null}
            {section == 3 ? <PersonalPronoun3 /> : null}
            {section == 4 ? <PersonalPronoun4 /> : null}
            {section == 5 ? (
              <>
                <TableHorizontal
                  numberOfColumns="4"
                  data={{
                    Sujet: [
                      "je",
                      "tu",
                      "il / elle",
                      "nous",
                      "vous",
                      "ils / elles",
                    ],
                    COD: [
                      "me (m')",
                      "te (t')",
                      "le / la (l')",
                      "nous",
                      "vous",
                      "les",
                    ],
                    COI: ["me (m')", "te (t')", "lui", "nous", "vous", "leur"],
                    Tonique: [
                      "moi",
                      "toi",
                      "lui / elle",
                      "nous",
                      "vous",
                      "eux / elles",
                    ],
                  }}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
