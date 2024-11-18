import Head from "next/head";
import { useEffect } from "react";
import Box from "@/components/Box";
import Header from "@/components/Header";
import styles from "@/styles/French.module.css";

export default function French() {
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
            <h1 className="riseUp_1">Franco</h1>
            <h2 className="riseUp_2">Francophone</h2>
            <p className="riseUp_3">
              French is a language of the Romance branch of the Indo-European
              language family and is an official language in 29 countries around
              the world, including France. It is one of the official languages
              of the United Nations and has traditionally been recognized as the
              language of diplomacy and the arts. It captures the essence of
              French culture, has a refined pronunciation, rich vocabulary, and
              sophisticated grammar, and is highly influential internationally.
            </p>
          </div>
          <div className={`${styles.menu} riseUp_4`}>
            <Box
              path="/french/bootcamp"
              title="Bootcamp"
              subtitle="Training"
              description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
            />
            <Box
              path="/french/grammar"
              title="Grammaire"
              subtitle="Upper intermediate"
              description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
            />
            <Box
              path="/french/phrasebook"
              title="Guide de conversation"
              subtitle="Phrasebook"
              description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
            />
            <Box
              path="/french/france"
              title="République Française"
              subtitle="About France"
              description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
            />
          </div>
        </div>
      </div>
    </>
  );
}
