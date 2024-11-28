import Head from "next/head";
import { useEffect } from "react";
import Box from "@/components/Box";
import Header from "@/components/Header";
import { CubeRus3 } from "@/components/Cube";
import styles from "@/styles/Russian.module.css";

export default function Russian() {
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
            <div className={styles.titleLeft}>
              <h1 className="riseUp_1">Русский</h1>
              <h3 className="riseUp_2">Russian</h3>
              <p className="riseUp_3">
                Russian is a member of the East Slavic branch of the
                Indo-European language family, spoken by approximately 250
                million people in Russia and neighboring countries. It is an
                official language of the United Nations and plays an important
                role in space-related terminology and science and technology.
              </p>
            </div>
            <div className={`${styles.titleRight} riseUp_4`}>
              <CubeRus3 />
            </div>
          </div>
          <div className={`${styles.menu} riseUp_5`}>
            <Box
              path="/russian/bootcamp"
              title="Тренировочный лагерь"
              subtitle="Bootcamp"
              description="Люблио - это не только изучение языка, но и свобода, позволяющая уверенно исследовать мир."
            />
            <Box
              path="/russian/grammar"
              title="Грамматика"
              subtitle="Grammar"
              description="Люблио - это не только изучение языка, но и свобода, позволяющая уверенно исследовать мир."
            />
            <Box
              path="/russian/phrasebook"
              title="Разговорник"
              subtitle="Phrasebook"
              description="Люблио - это не только изучение языка, но и свобода, позволяющая уверенно исследовать мир."
            />
            <Box
              path="/russian/russia"
              title="Российская Федерация"
              subtitle="About Russia"
              description="Люблио - это не только изучение языка, но и свобода, позволяющая уверенно исследовать мир."
            />
          </div>
        </div>
      </div>
    </>
  );
}
