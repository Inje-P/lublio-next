import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";
import Header from "@/components/Header";
import styles from "@/styles/Russian.module.css";

import PersonalPronoun1 from "./PersonalPronoun1";
import PersonalPronoun2 from "./PersonalPronoun2";
import PersonalPronoun3 from "./PersonalPronoun3";

export default function RussianGrammar() {
  const router = useRouter();
  const chapter = router.query.id;

  const [section1, setSection1] = useState(1);
  const [section2, setSection2] = useState(1);
  const [section3, setSection3] = useState(1);

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
            <h1 className="riseUp_1">Род имён существительных</h1>
            <h3 className="riseUp_2">Gender of nouns</h3>
          </div>
          <div className={styles.contents}>
            <div className="buttons">
              <button onClick={() => setSection1(1)}>Мужской</button>
              <button onClick={() => setSection1(2)}>Женский род</button>
              <button onClick={() => setSection1(3)}>с.</button>
            </div>

            {section1 == 1 ? (
              <>
                <h2>Мужской род : Masculine</h2>
                <TableHorizontal
                  numberOfColumns="2"
                  data={{
                    Единственное: ["я", "ты", "он", "она", "оно"],
                    Множественное: ["мы", "вы", "они"],
                  }}
                />

                <div className="text-box">
                  <ul className="styled-list-with-flags">
                    <li>
                      <span className="fi fi-ru"></span>
                      <p>Я надеюсь, что вам тут понравится.</p>
                    </li>
                    <li>
                      <span className="fi fi-ru"></span>
                      <p>Хотелось бы, чтобы ты пришёл чуть раньше.</p>
                    </li>
                    <li>
                      <span className="fi fi-ru"></span>
                      <p>Вы не могли бы нас сфотографировать?</p>
                    </li>
                    <li>
                      <span className="fi fi-ru"></span>
                      <p>Они поддерживают дружеские отношения друг с другом.</p>
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
            {section1 == 2 ? <PersonalPronoun2 /> : null}
            {section1 == 3 ? <PersonalPronoun3 /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
