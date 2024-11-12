import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import StyledSectionFra from "@/components/StyledSectionFra";
import Box from "@/components/Box";
import { useEffect } from "react";
import styles from "@/styles/Franco.module.css";

export default function AboutFrance() {
  const chapters = [
    {
      index: 1,
      city: "Paris",
      region: "Île-de-France",
      introduction:
        "Paris, capitale de la France, connue pour ses monuments emblématiques, son histoire riche et sa culture vibrante.",
    },
    {
      index: 2,
      city: "Marseille",
      region: "Provence-Alpes-Côte d'Azur",
      introduction:
        "Marseille, ville méditerranéenne dynamique, célèbre pour le Vieux-Port historique, sa culture diversifiée et ses vues magnifiques.",
    },
    {
      index: 3,
      city: "Lyon",
      region: "Auvergne-Rhône-Alpes",
      introduction:
        "Lyon, site UNESCO, réputée pour sa gastronomie, son architecture historique et sa scène culturelle dynamique.",
    },
    {
      index: 4,
      city: "Toulouse",
      region: "Occitanie",
      introduction:
        "Toulouse, la 'Ville Rose', connue pour son histoire riche, son rôle dans l'aérospatiale et son patrimoine culturel vibrant.",
    },
    {
      index: 5,
      city: "Nice",
      region: "Provence-Alpes-Côte d'Azur",
      introduction:
        "Nice, élégante ville balnéaire sur la Côte d'Azur, célèbre pour la Promenade des Anglais et son charme méditerranéen.",
    },
    {
      index: 6,
      city: "Nantes",
      region: "Pays de la Loire",
      introduction:
        "Nantes, ville historique sur la Loire, connue pour sa culture vibrante, ses espaces verts et son élégance architecturale.",
    },
    {
      index: 7,
      city: "Strasbourg",
      region: "Grand Est",
      introduction:
        "Strasbourg, centre historique et politique européen, célèbre pour sa cathédrale gothique et sa diversité culturelle.",
    },
    {
      index: 8,
      city: "Montpellier",
      region: "Occitanie",
      introduction:
        "Montpellier, ville dynamique du sud, connue pour son histoire riche, sa vie étudiante vibrante et sa vitalité culturelle.",
    },
    {
      index: 9,
      city: "Bordeaux",
      region: "Nouvelle-Aquitaine",
      introduction:
        "Bordeaux, réputée pour son architecture historique, ses vins prestigieux et son centre-ville inscrit à l'UNESCO.",
    },
    {
      index: 10,
      city: "Lille",
      region: "Hauts-de-France",
      introduction:
        "Lille, centre culturel et économique du nord de la France, connue pour son héritage flamand-français.",
    },
    {
      index: 11,
      city: "Rennes",
      region: "Bretagne",
      introduction:
        "Rennes, ville étudiante dynamique avec une histoire riche, connue pour son architecture, ses parcs et sa vie culturelle.",
    },
    {
      index: 12,
      city: "Reims",
      region: "Grand Est",
      introduction:
        "Reims, ville historique connue pour sa cathédrale gothique, les sacres royaux et les maisons de Champagne mondialement connues.",
    },
    {
      index: 13,
      city: "Le Havre",
      region: "Normandie",
      introduction:
        "Le Havre, ville portuaire à l'architecture moderniste, reconstruite après la Seconde Guerre mondiale, inscrite à l'UNESCO pour son design urbain.",
    },
    {
      index: 14,
      city: "Cergy-Pontoise",
      region: "Île-de-France",
      introduction:
        "Cergy-Pontoise, ville nouvelle près de Paris, connue pour ses espaces verts, ses sites culturels et son développement durable.",
    },
    {
      index: 15,
      city: "Saint-Étienne",
      region: "Auvergne-Rhône-Alpes",
      introduction:
        "Saint-Étienne, ville industrielle avec une histoire riche, connue pour la métallurgie, ses musées et sa diversité architecturale.",
    },
    {
      index: 16,
      city: "Toulon",
      region: "Provence-Alpes-Côte d'Azur",
      introduction:
        "Toulon, ville portuaire méditerranéenne, riche en patrimoine maritime, connue pour sa base navale et sa beauté pittoresque.",
    },
    {
      index: 17,
      city: "Angers",
      region: "Pays de la Loire",
      introduction:
        "Angers, ville de la vallée de la Loire connue pour son château médiéval, ses tapisseries historiques et sa scène culturelle vibrante.",
    },
    {
      index: 18,
      city: "Grenoble",
      region: "Auvergne-Rhône-Alpes",
      introduction:
        "Grenoble, 'Capitale des Alpes', réputée pour ses environs pittoresques, ses institutions de recherche et son patrimoine culturel.",
    },
    {
      index: 19,
      city: "Dijon",
      region: "Bourgogne-Franche-Comté",
      introduction:
        "Dijon, ville historique de Bourgogne, célèbre pour son architecture médiévale, sa moutarde renommée et ses vins prestigieux.",
    },
    {
      index: 20,
      city: "Nîmes",
      region: "Occitanie",
      introduction:
        "Nîmes, la 'Rome française', connue pour ses monuments romains bien préservés comme l'Amphithéâtre et la Maison Carrée.",
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

        <title>Lublio</title>
      </Head>
      <Header />
      <div className={styles.bgDark}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1 className="riseUp_1">République Française</h1>
            <h2 className="riseUp_2">About France</h2>
            <Breadcrumbs />
          </div>
          <StyledSectionFra
            icon="globe"
            description="Immerse yourself in France's rich culture, history, and language through engaging lessons and interactive activities."
          />
          <div className={`${styles.menu} riseUp_3`}>
            {chapters.map((chapter) => (
              <Box
                key={chapter.index}
                path={"/franco/france/" + chapter.index}
                title={chapter.city}
                subtitle={chapter.region}
                description={chapter.introduction}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
