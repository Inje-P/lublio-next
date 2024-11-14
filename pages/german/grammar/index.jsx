import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Box2 from "@/components/Box2";
import styles from "@/styles/German.module.css";

export default function GermanGrammar() {
  const [part, setPart] = useState(1);
  const part1 = [
    {
      index: 1,
      title: "Bestimmter Artikel",
      subtitle: "Definite article",
    },
    {
      index: 2,
      title: "Unbestimmter Artikel",
      subtitle: "Indefinite article",
    },
    {
      index: 3,
      title: "Demonstrativartikel",
      subtitle: "Demonstrative article",
    },
    {
      index: 4,
      title: "Interrogativartikel",
      subtitle: "Interrogative article",
    },
    {
      index: 5,
      title: "Negativer Artikel",
      subtitle: "Negative article",
    },
    {
      index: 6,
      title: "Possesivartikel",
      subtitle: "Possessive article",
    },
  ];

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
            <h1 className="riseUp_1">Deutsche Grammatik</h1>
            <h2 className="riseUp_2">German Grammar</h2>
          </div>
          <div className={styles.contents}>
            <div className="buttons">
              <button onClick={() => setPart(1)}>Part 1</button>
              <button onClick={() => setPart(2)}>Part 2</button>
            </div>

            {part == 1 ? (
              <>
                <h3>Part 1</h3>
                {part1.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/german/grammar/artikel/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
            {part == 2 ? (
              <>
                <h3>Part 2</h3>
                {part1.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/german/grammar/artikel/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}