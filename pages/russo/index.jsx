import Head from "next/head";
import { useEffect } from "react";
import Box from "@/components/Box";
import Header from "@/components/Header";
import styles from "@/styles/Russo.module.css";

export default function Russo() {
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
      <div className={styles.bg}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1 className="riseUp_1">#Russo</h1>
            <h2 className="riseUp_2">Русский язык</h2>
            <p className="riseUp_3">
              Russian is a member of the East Slavic branch of the Indo-European
              language family, spoken by more than 100 million people in Russia
              and and neighboring countries, spoken by approximately 250 million
              people. It uses the Cyrillic alphabet, is characterized by six
              declensions and a systematic phase distinction for verbs. Official
              of the United Nations language, and has an important place in
              space-related terminology and science and technology.
              space-related terminology and in science and technology. With a
              rich literary tradition, it is the language of Tolstoy,
              Dostoevsky, etc. Tolstoy, Dostoevsky, and others.
            </p>
          </div>
          <div className={`${styles.menu} riseUp_4`}>
            <Box
              path="/russo/a1"
              title="A1"
              subtitle="Beginner"
              description="Лублио - это не только изучение языка, но и свобода уверенно познавать мир."
            />
            <Box
              path="/russo/a2"
              title="A2"
              subtitle="Elementary"
              description="Лублио - это не только изучение языка, но и свобода уверенно познавать мир."
            />
            <Box
              path="/russo/b1"
              title="B1"
              subtitle="Intermediate"
              description="Лублио - это не только изучение языка, но и свобода уверенно познавать мир."
            />
            <Box
              path="/russo/b2"
              title="B2"
              subtitle="Upper intermediate"
              description="Лублио - это не только изучение языка, но и свобода уверенно познавать мир."
            />
            <Box
              path="/russo/phrasebook"
              title="Разговорник"
              subtitle="Phrasebook"
              description="Лублио - это не только изучение языка, но и свобода уверенно познавать мир."
            />
            <Box
              path="/russo/russia"
              title="Российская Федерация"
              subtitle="About Russia"
              description="Лублио - это не только изучение языка, но и свобода уверенно познавать мир."
            />
          </div>
        </div>
      </div>
    </>
  );
}
