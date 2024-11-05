import Head from "next/head";
import { useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BoxDeu from "@/components/BoxDeu";
import Header from "@/components/Header";

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

        <title>German | Lublio</title>
      </Head>
      <Header />
      <div className="wrapper">
        <h1>German</h1>
        <Breadcrumbs />
        <BoxDeu
          path="/german/a1"
          title="A1"
          subtitle="Beginner"
          description="Lublio ist nicht nur das Erlernen einer Sprache, sondern auch die Freiheit, die Welt selbstbewusst zu erkunden."
        />
        <BoxDeu
          path="/german/a2"
          title="A2"
          subtitle="Elementary"
          description="Lublio ist nicht nur das Erlernen einer Sprache, sondern auch die Freiheit, die Welt selbstbewusst zu erkunden."
        />
        <BoxDeu
          path="/german/b1"
          title="B1"
          subtitle="Intermediate"
          description="Lublio ist nicht nur das Erlernen einer Sprache, sondern auch die Freiheit, die Welt selbstbewusst zu erkunden."
        />
        <BoxDeu
          path="/german/b2"
          title="B2"
          subtitle="Upper intermediate"
          description="Lublio ist nicht nur das Erlernen einer Sprache, sondern auch die Freiheit, die Welt selbstbewusst zu erkunden."
        />
        <BoxDeu
          path="/german/phrasebook"
          title="Sprachführer"
          subtitle="Phrasebook"
          description="Lublio ist nicht nur das Erlernen einer Sprache, sondern auch die Freiheit, die Welt selbstbewusst zu erkunden."
        />
        <BoxDeu
          path="/german/germany"
          title="Bundesrepublik Deutschland"
          subtitle="About Germany"
          description="Lublio ist nicht nur das Erlernen einer Sprache, sondern auch die Freiheit, die Welt selbstbewusst zu erkunden."
        />
      </div>
    </>
  );
}
