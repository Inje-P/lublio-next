import Head from "next/head";
import { useEffect, useState } from "react";
import TableFull from "@/components/TableFull";
import TableVertical from "@/components/TableVertical";
import TableHorizontal from "@/components/TableHorizontal";
import Header from "@/components/Header";
import styles from "@/styles/Russo.module.css";

import PersonalPronoun1 from "./PersonalPronoun1";
import PersonalPronoun2 from "./PersonalPronoun2";
import PersonalPronoun3 from "./PersonalPronoun3";
import PersonalPronoun4 from "./PersonalPronoun4";
import PersonalPronoun5 from "./PersonalPronoun5";
import PersonalPronoun6 from "./PersonalPronoun6";

export default function RussianGrammar() {
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
            <h1 className="riseUp_1">Личные местоимения</h1>
            <h2 className="riseUp_2">Personal pronouns</h2>
          </div>
          <div className={styles.contents}>
            <div className="buttons">
              <button onClick={() => setSection(1)}>И.</button>
              <button onClick={() => setSection(2)}>Р.</button>
              <button onClick={() => setSection(3)}>Д.</button>
              <button onClick={() => setSection(4)}>В.</button>
              <button onClick={() => setSection(5)}>Т.</button>
              <button onClick={() => setSection(6)}>П.</button>
              <button onClick={() => setSection(7)}>✨</button>
            </div>

            {section == 1 ? <PersonalPronoun1 /> : null}
            {section == 2 ? <PersonalPronoun2 /> : null}
            {section == 3 ? <PersonalPronoun3 /> : null}
            {section == 4 ? <PersonalPronoun4 /> : null}
            {section == 5 ? <PersonalPronoun5 /> : null}
            {section == 6 ? <PersonalPronoun6 /> : null}
            {section == 7 ? (
              <>
                <TableVertical
                  numberOfRows="6"
                  data={{
                    "И.": ["я", "ты", "он/оно", "она"],
                    "Р.": ["меня", "тебя", "его", "её"],
                    "Д.": ["мне", "тебе", "ему", "ей"],
                    "В.": ["меня", "тебя", "его", "её"],
                    "Т.": ["мной", "тобой", "им", "ею"],
                    "П.": ["(обо) мне", "(о) тебе", "(о) нём", "(о) ней"],
                  }}
                />
                <TableVertical
                  numberOfRows="6"
                  data={{
                    "И.": ["мы", "вы", "они"],
                    "Р.": ["нас", "вас", "их"],
                    "Д.": ["нам", "вам", "им"],
                    "В.": ["нас", "вас", "их"],
                    "Т.": ["нами", "вами", "ими"],
                    "П.": ["(о) нас", "(о) вас", "(о) них"],
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
