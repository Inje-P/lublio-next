import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/French.module.css";

// Phrasebook
import FrenchPhrasebook1 from "./FrenchPhrasebook1";
import FrenchPhrasebook2 from "./FrenchPhrasebook2";
import FrenchPhrasebook3 from "./FrenchPhrasebook3";
import FrenchPhrasebook4 from "./FrenchPhrasebook4";
import FrenchPhrasebook5 from "./FrenchPhrasebook5";
import FrenchPhrasebook6 from "./FrenchPhrasebook6";
import FrenchPhrasebook7 from "./FrenchPhrasebook7";
import FrenchPhrasebook8 from "./FrenchPhrasebook8";
import FrenchPhrasebook9 from "./FrenchPhrasebook9";
import FrenchPhrasebook10 from "./FrenchPhrasebook10";
import FrenchPhrasebook11 from "./FrenchPhrasebook11";
import FrenchPhrasebook12 from "./FrenchPhrasebook12";

export default function FrenchPhrasebook() {
  const router = useRouter();
  const chapter = router.query.id;

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
            <h1 className="riseUp_1">Phrasebook</h1>
            <Breadcrumbs />
          </div>
          <div className={styles.contents}>
            {chapter == "1" ? (
              <>
                <FrenchPhrasebook1 />
              </>
            ) : null}
            {chapter == "2" ? (
              <>
                <FrenchPhrasebook2 />
              </>
            ) : null}
            {chapter == "3" ? (
              <>
                <FrenchPhrasebook3 />
              </>
            ) : null}
            {chapter == "4" ? (
              <>
                <FrenchPhrasebook4 />
              </>
            ) : null}
            {chapter == "5" ? (
              <>
                <FrenchPhrasebook5 />
              </>
            ) : null}
            {chapter == "6" ? (
              <>
                <FrenchPhrasebook6 />
              </>
            ) : null}
            {chapter == "7" ? (
              <>
                <FrenchPhrasebook7 />
              </>
            ) : null}
            {chapter == "8" ? (
              <>
                <FrenchPhrasebook8 />
              </>
            ) : null}
            {chapter == "9" ? (
              <>
                <FrenchPhrasebook9 />
              </>
            ) : null}
            {chapter == "10" ? (
              <>
                <FrenchPhrasebook10 />
              </>
            ) : null}
            {chapter == "11" ? (
              <>
                <FrenchPhrasebook11 />
              </>
            ) : null}
            {chapter == "12" ? (
              <>
                <FrenchPhrasebook12 />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
