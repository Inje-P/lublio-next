import Head from "next/head";
import { useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BoxFra from "@/components/BoxFra";
import Header from "@/components/Header";

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

        <title>French | Lublio</title>
      </Head>
      <Header />
      <div className="wrapper">
        <h1>French</h1>
        <Breadcrumbs />
        <BoxFra
          path="/french/a1"
          title="A1"
          subtitle="Beginner"
          description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
        />
        <BoxFra
          path="/french/a2"
          title="A2"
          subtitle="Elementary"
          description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
        />
        <BoxFra
          path="/french/b1"
          title="B1"
          subtitle="Intermediate"
          description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
        />
        <BoxFra
          path="/french/b2"
          title="B2"
          subtitle="Upper intermediate"
          description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
        />
        <BoxFra
          path="/french/phrasebook"
          title="Guide de conversation"
          subtitle="Phrasebook"
          description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
        />
        <BoxFra
          path="/french/france"
          title="République Française"
          subtitle="About France"
          description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
        />
      </div>
    </>
  );
}
