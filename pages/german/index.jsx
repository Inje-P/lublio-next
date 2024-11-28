import Head from "next/head";
import { useEffect } from "react";
import Box from "@/components/Box";
import Header from "@/components/Header";
import { CubeDeu3 } from "@/components/Cube";
import styles from "@/styles/German.module.css";

export default function German() {
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
              <h1 className="riseUp_1">Deutsch</h1>
              <h2 className="riseUp_2">German</h2>
              <p className="riseUp_3">
                German is a language of the Germanic branch of the Indo-European
                language family, spoken by about 100 million people in Germany,
                Austria, Switzerland, and elsewhere. As the main official
                language of the European Union, it is also a central language of
                the European economy and plays an important role in science and
                technology.
              </p>
            </div>
            <div className={`${styles.titleRight} riseUp_4`}>
              <CubeDeu3 />
            </div>
          </div>
          <div className={`${styles.menu} riseUp_4`}>
            <Box
              path="/german/bootcamp"
              title="Bootcamp"
              subtitle="Training"
              description="Bei Lublio geht es nicht nur um das Erlernen einer Sprache, sondern auch um die Freiheit, die Welt mit Selbstvertrauen zu erkunden."
            />
            <Box
              path="/german/grammar"
              title="Grammatik"
              subtitle="Grammar"
              description="Bei Lublio geht es nicht nur um das Erlernen einer Sprache, sondern auch um die Freiheit, die Welt mit Selbstvertrauen zu erkunden."
            />
            <Box
              path="/german/phrasebook"
              title="Sprachführer"
              subtitle="Phrasebook"
              description="Bei Lublio geht es nicht nur um das Erlernen einer Sprache, sondern auch um die Freiheit, die Welt mit Selbstvertrauen zu erkunden."
            />
            <Box
              path="/german/germany"
              title="Bundesrepublik Deutschland"
              subtitle="About Germany"
              description="Bei Lublio geht es nicht nur um das Erlernen einer Sprache, sondern auch um die Freiheit, die Welt mit Selbstvertrauen zu erkunden."
            />
          </div>
        </div>
      </div>
    </>
  );
}
