import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Phrasebook
import ItalianPhrasebook1 from "./ItalianPhrasebook1";
import ItalianPhrasebook2 from "./ItalianPhrasebook2";
import ItalianPhrasebook3 from "./ItalianPhrasebook3";
import ItalianPhrasebook4 from "./ItalianPhrasebook4";
import ItalianPhrasebook5 from "./ItalianPhrasebook5";
import ItalianPhrasebook6 from "./ItalianPhrasebook6";
import ItalianPhrasebook7 from "./ItalianPhrasebook7";
import ItalianPhrasebook8 from "./ItalianPhrasebook8";
import ItalianPhrasebook9 from "./ItalianPhrasebook9";
import ItalianPhrasebook10 from "./ItalianPhrasebook10";
import ItalianPhrasebook11 from "./ItalianPhrasebook11";
import ItalianPhrasebook12 from "./ItalianPhrasebook12";

export default function ItalianPhrasebook() {
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

        <title>Phrasebook | Lublio</title>
      </Head>
      <Header />
      <div className="wrapper">
        <h1>Phrasebook</h1>
        <Breadcrumbs />

        {chapter == "1" ? (
          <>
            <ItalianPhrasebook1 />
          </>
        ) : null}
        {chapter == "2" ? (
          <>
            <ItalianPhrasebook2 />
          </>
        ) : null}
        {chapter == "3" ? (
          <>
            <ItalianPhrasebook3 />
          </>
        ) : null}
        {chapter == "4" ? (
          <>
            <ItalianPhrasebook4 />
          </>
        ) : null}
        {chapter == "5" ? (
          <>
            <ItalianPhrasebook5 />
          </>
        ) : null}
        {chapter == "6" ? (
          <>
            <ItalianPhrasebook6 />
          </>
        ) : null}
        {chapter == "7" ? (
          <>
            <ItalianPhrasebook7 />
          </>
        ) : null}
        {chapter == "8" ? (
          <>
            <ItalianPhrasebook8 />
          </>
        ) : null}
        {chapter == "9" ? (
          <>
            <ItalianPhrasebook9 />
          </>
        ) : null}
        {chapter == "10" ? (
          <>
            <ItalianPhrasebook10 />
          </>
        ) : null}
        {chapter == "11" ? (
          <>
            <ItalianPhrasebook11 />
          </>
        ) : null}
        {chapter == "12" ? (
          <>
            <ItalianPhrasebook12 />
          </>
        ) : null}
      </div>
    </>
  );
}
