import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/German.module.css";

// Phrasebook
import GermanPhrasebook1 from "./GermanPhrasebook1";
import GermanPhrasebook2 from "./GermanPhrasebook2";
import GermanPhrasebook3 from "./GermanPhrasebook3";
import GermanPhrasebook4 from "./GermanPhrasebook4";
import GermanPhrasebook5 from "./GermanPhrasebook5";
import GermanPhrasebook6 from "./GermanPhrasebook6";
import GermanPhrasebook7 from "./GermanPhrasebook7";
import GermanPhrasebook8 from "./GermanPhrasebook8";
import GermanPhrasebook9 from "./GermanPhrasebook9";
import GermanPhrasebook10 from "./GermanPhrasebook10";
import GermanPhrasebook11 from "./GermanPhrasebook11";
import GermanPhrasebook12 from "./GermanPhrasebook12";

export default function GermanPhrasebook() {
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
                <GermanPhrasebook1 />
              </>
            ) : null}
            {chapter == "2" ? (
              <>
                <GermanPhrasebook2 />
              </>
            ) : null}
            {chapter == "3" ? (
              <>
                <GermanPhrasebook3 />
              </>
            ) : null}
            {chapter == "4" ? (
              <>
                <GermanPhrasebook4 />
              </>
            ) : null}
            {chapter == "5" ? (
              <>
                <GermanPhrasebook5 />
              </>
            ) : null}
            {chapter == "6" ? (
              <>
                <GermanPhrasebook6 />
              </>
            ) : null}
            {chapter == "7" ? (
              <>
                <GermanPhrasebook7 />
              </>
            ) : null}
            {chapter == "8" ? (
              <>
                <GermanPhrasebook8 />
              </>
            ) : null}
            {chapter == "9" ? (
              <>
                <GermanPhrasebook9 />
              </>
            ) : null}
            {chapter == "10" ? (
              <>
                <GermanPhrasebook10 />
              </>
            ) : null}
            {chapter == "11" ? (
              <>
                <GermanPhrasebook11 />
              </>
            ) : null}
            {chapter == "12" ? (
              <>
                <GermanPhrasebook12 />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
