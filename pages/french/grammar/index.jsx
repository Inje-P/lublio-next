import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Box2 from "@/components/Box2";
import styles from "@/styles/French.module.css";

export default function FrenchGrammar() {
  const [part, setPart] = useState(1);
  const part1 = [
    {
      index: 1,
      title: "Le genre",
      subtitle: "Gender of nouns",
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
  const part2 = [
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
  const part3 = [
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
  const part4 = [
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
  const part5 = [
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
  const part6 = [
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
  const part7 = [
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
  const part8 = [
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
            <div className={styles.titleFull}>
              <h1 className="riseUp_1">Grammaire française</h1>
              <h3 className="riseUp_2">French Grammar</h3>
            </div>
          </div>
          <div className={styles.contents}>
            <div className="buttons">
              <button onClick={() => setPart(1)}>Nouns & Articles</button>
              <button onClick={() => setPart(2)}>Pronouns</button>
              <button onClick={() => setPart(3)}>Adjectives & Adverbs</button>
              <button onClick={() => setPart(4)}>Prepositions</button>
            </div>
            <div className="buttons">
              {/* Verbs : Aspects, Voices, Participles, Gerunds, Infinitives */}
              <button onClick={() => setPart(5)}>Verbs</button>
              <button onClick={() => setPart(6)}>Tenses</button>
              <button onClick={() => setPart(7)}>Moods</button>
              <button onClick={() => setPart(8)}>Syntax</button>
            </div>

            {part == 1 ? (
              <>
                <h2>Nouns & Articles</h2>
                {part1.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/french/grammar/nouns-and-articles/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
            {part == 2 ? (
              <>
                <h2>Pronouns</h2>
                {part2.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/french/grammar/pronouns/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
            {part == 3 ? (
              <>
                <h2>Adjectives & Adverbs</h2>
                {part3.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={
                      "/french/grammar/adjectives-and-adverbs/" + chapter.index
                    }
                  />
                ))}
              </>
            ) : null}
            {part == 4 ? (
              <>
                <h2>Prepositions</h2>
                {part4.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/french/grammar/prepositions/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
            {part == 5 ? (
              <>
                <h2>Verbs</h2>
                {part5.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/french/grammar/verbs/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
            {part == 6 ? (
              <>
                <h2>Tenses</h2>
                {part6.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/french/grammar/tenses/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
            {part == 7 ? (
              <>
                <h2>Moods</h2>
                {part7.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/french/grammar/moods/" + chapter.index}
                  />
                ))}
              </>
            ) : null}
            {part == 8 ? (
              <>
                <h2>Syntax</h2>
                {part8.map((chapter) => (
                  <Box2
                    title={chapter.title}
                    subtitle={chapter.subtitle}
                    path={"/french/grammar/syntax/" + chapter.index}
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
