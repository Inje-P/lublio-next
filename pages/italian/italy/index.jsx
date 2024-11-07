import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import StyledSectionIta from "@/components/StyledSectionIta";
import BoxIta from "@/components/BoxIta";
import { useEffect } from "react";

export default function AboutItaly() {
  const chapters = [
    {
      index: 1,
      city: "Roma",
      region: "Lazio",
      introduction:
        "Roma, la capitale d'Italia, è una città ricca di storia millenaria, arte straordinaria e una cultura vibrante che affascina i visitatori di tutto il mondo.",
    },
    {
      index: 2,
      city: "Milano",
      region: "Lombardia",
      introduction:
        "Milano, la capitale della Lombardia e una delle città più dinamiche d'Italia, è rinomata per la sua moda, il design e l'economia vibrante.",
    },
    {
      index: 3,
      city: "Napoli",
      region: "Campania",
      introduction:
        "Napoli è una delle città più affascinanti e vive d'Italia, rinomata per la sua storia millenaria, la sua cultura vibrante e la sua cucina straordinaria.",
    },
    {
      index: 4,
      city: "Torino",
      region: "Piemonte",
      introduction:
        "Torino, capoluogo del Piemonte, è una città ricca di storia, cultura e raffinatezza.",
    },
    {
      index: 5,
      city: "Palermo",
      region: "Sicilia",
      introduction:
        "Palermo, capitale della Sicilia, è una città ricca di storia, cultura e tradizioni millenarie.",
    },
    {
      index: 6,
      city: "Genova",
      region: "Liguria",
      introduction:
        "Genova, la capitale della Liguria, è una città ricca di storia marittima e culturale.",
    },
    {
      index: 7,
      city: "Bologna",
      region: "Emilia-Romagna",
      introduction:
        "Bologna, la capitale dell'Emilia-Romagna, è una città ricca di storia, cultura e gastronomia.",
    },
    {
      index: 8,
      city: "Firenze",
      region: "Toscana",
      introduction:
        "Firenze, situata nel cuore della Toscana, è una città rinomata per la sua ricca storia, la sua arte straordinaria e la sua architettura mozzafiato.",
    },
    {
      index: 9,
      city: "Bari",
      region: "Puglia",
      introduction:
        "Bari è una città portuale situata sulla costa adriatica della Puglia, nel sud-est dell'Italia.",
    },
    {
      index: 10,
      city: "Catania",
      region: "Sicilia",
      introduction:
        "Catania è una città situata sulla costa orientale della Sicilia, ai piedi del maestoso vulcano Etna.",
    },
    {
      index: 11,
      city: "Verona",
      region: "Veneto",
      introduction:
        "Verona, situata nella regione del Veneto, è una città intrisa di storia, cultura e romanticismo.",
    },
    {
      index: 12,
      city: "Venezia",
      region: "Veneto",
      introduction:
        "Venezia, la città dei canali e dei ponti, è una delle destinazioni più affascinanti e romantiche al mondo.",
    },
    {
      index: 13,
      city: "Messina",
      region: "Sicilia",
      introduction:
        "Messina è una città affascinante situata sulla punta nord-orientale della Sicilia, di fronte al Mar Ionio.",
    },
    {
      index: 14,
      city: "Padova",
      region: "Veneto",
      introduction:
        "Padova è una città ricca di storia e cultura situata nel nord-est Italia, nella regione del Veneto.",
    },
    {
      index: 15,
      city: "Prato",
      region: "Toscana",
      introduction:
        "Prato è una città affascinante situata nella regione della Toscana, nel cuore dell'Italia.",
    },
    {
      index: 16,
      city: "Trieste",
      region: "Friuli-Venezia Giulia",
      introduction:
        "Trieste è una città affascinante situata nel nord-est dell'Italia, sul confine con la Slovenia.",
    },
    {
      index: 17,
      city: "Brescia",
      region: "Lombardia",
      introduction:
        "Brescia è una città affascinante nel nord Italia, situata tra Milano e Venezia.",
    },
    {
      index: 18,
      city: "Parma",
      region: "Emilia-Romagna",
      introduction:
        "Parma è una città storica nel nord Italia, rinomata per la sua ricca cultura e la sua straordinaria tradizione gastronomica.",
    },
    {
      index: 19,
      city: "Taranto",
      region: "Puglia",
      introduction:
        "Taranto è una città affascinante situata nella regione della Puglia, nel sud Italia, famosa per la sua ricca storia e il suo importante patrimonio archeologico.",
    },
    {
      index: 20,
      city: "Modena",
      region: "Emilia-Romagna",
      introduction:
        "Modena è una città storica e affascinante situata nella regione dell'Emilia-Romagna, nel nord Italia.",
    },
  ];

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

        <title>Italy | Lublio</title>
      </Head>
      <Header />
      <div className="wrapper">
        <h1>Italy</h1>
        <Breadcrumbs />

        <StyledSectionIta
          icon="globe"
          description="Discover Italy's vibrant culture, history, and language through interactive lessons designed to enhance your learning experience."
        />

        {chapters.map((chapter) => (
          <BoxIta
            key={chapter.index}
            path={"/italian/italy/" + chapter.index}
            title={chapter.city}
            subtitle={chapter.region}
            description={chapter.introduction}
          />
        ))}
      </div>
    </>
  );
}
