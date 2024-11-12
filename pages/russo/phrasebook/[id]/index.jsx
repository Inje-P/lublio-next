import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Phrasebook
import RussianPhrasebook1 from "./RussianPhrasebook1";
import RussianPhrasebook2 from "./RussianPhrasebook2";
import RussianPhrasebook3 from "./RussianPhrasebook3";
import RussianPhrasebook4 from "./RussianPhrasebook4";
import RussianPhrasebook5 from "./RussianPhrasebook5";
import RussianPhrasebook6 from "./RussianPhrasebook6";
import RussianPhrasebook7 from "./RussianPhrasebook7";
import RussianPhrasebook8 from "./RussianPhrasebook8";
import RussianPhrasebook9 from "./RussianPhrasebook9";
import RussianPhrasebook10 from "./RussianPhrasebook10";
import RussianPhrasebook11 from "./RussianPhrasebook11";
import RussianPhrasebook12 from "./RussianPhrasebook12";

export default function RussianPhrasebook() {
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
            <RussianPhrasebook1 />
          </>
        ) : null}
        {chapter == "2" ? (
          <>
            <RussianPhrasebook2 />
          </>
        ) : null}
        {chapter == "3" ? (
          <>
            <RussianPhrasebook3 />
          </>
        ) : null}
        {chapter == "4" ? (
          <>
            <RussianPhrasebook4 />
          </>
        ) : null}
        {chapter == "5" ? (
          <>
            <RussianPhrasebook5 />
          </>
        ) : null}
        {chapter == "6" ? (
          <>
            <RussianPhrasebook6 />
          </>
        ) : null}
        {chapter == "7" ? (
          <>
            <RussianPhrasebook7 />
          </>
        ) : null}
        {chapter == "8" ? (
          <>
            <RussianPhrasebook8 />
          </>
        ) : null}
        {chapter == "9" ? (
          <>
            <RussianPhrasebook9 />
          </>
        ) : null}
        {chapter == "10" ? (
          <>
            <RussianPhrasebook10 />
          </>
        ) : null}
        {chapter == "11" ? (
          <>
            <RussianPhrasebook11 />
          </>
        ) : null}
        {chapter == "12" ? (
          <>
            <RussianPhrasebook12 />
          </>
        ) : null}
      </div>
    </>
  );
}
