import Head from "next/head";
import { useEffect } from "react";
import Box from "@/components/Box";
import Header from "@/components/Header";
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
            <h1 className="riseUp_1">Russo</h1>
            <h2 className="riseUp_2">Russophone</h2>
            <p className="riseUp_3">
              Russian is a member of the East Slavic branch of the Indo-European
              language family, spoken by approximately 250 million people in
              Russia and neighboring countries. It is an official language of
              the United Nations and plays an important role in space-related
              terminology and science and technology. It has a rich literary
              tradition and is the working language of world-renowned authors
              such as Tolstoy and Dostoevsky.
            </p>
          </div>
          <div className={`${styles.menu} riseUp_4`}>
            <Box
              path="/russian/bootcamp"
              title="Bootcamp"
              subtitle="Training"
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
