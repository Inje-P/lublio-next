import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import StyledSectionDeu from "@/components/StyledSectionDeu";
import Box from "@/components/Box";
import { useEffect } from "react";
import styles from "@/styles/German.module.css";

export default function AboutGermany() {
  const chapters = [
    {
      index: 1,
      city: "Berlin",
      bundesland: "Berlin (BE)",
      introduction:
        "Berlin, Deutschlands Hauptstadt, bekannt für reiche Geschichte, kulturelle Vielfalt und lebendige Kunstszene.",
    },
    {
      index: 2,
      city: "Hamburg",
      bundesland: "Hamburg (HH)",
      introduction:
        "Hamburg, zweitgrößte Stadt, bedeutender Hafen, bekannt für Speicherstadt, Elbphilharmonie und lebendige Musikszene.",
    },
    {
      index: 3,
      city: "München",
      bundesland: "Bayern (BY)",
      introduction:
        "München, Hauptstadt Bayerns, berühmt für Oktoberfest, Kultur, historische Architektur und hohe Lebensqualität.",
    },
    {
      index: 4,
      city: "Köln",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Köln, am Rhein, bekannt für gotischen Dom, lebendige Altstadt und berühmten Karneval.",
    },
    {
      index: 5,
      city: "Frankfurt am Main",
      bundesland: "Hessen (HE)",
      introduction:
        "Frankfurt, Finanzzentrum Europas, bekannt für Skyline, kulturelle Vielfalt und historische Altstadt.",
    },
    {
      index: 6,
      city: "Stuttgart",
      bundesland: "Baden-Württemberg (BW)",
      introduction:
        "Stuttgart, Zentrum der Automobilindustrie, bekannt für kulturelle Vielfalt, Neue Schloss und Staatsoper.",
    },
    {
      index: 7,
      city: "Düsseldorf",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Düsseldorf, Rheinmetropole, bekannt für Rheinuferpromenade, Kunstsammlung und internationale Messen.",
    },
    {
      index: 8,
      city: "Leipzig",
      bundesland: "Sachsen (SN)",
      introduction:
        "Leipzig, kulturelle Hochburg, bekannt für musikalisches Erbe, Buchmesse und lebendige Kunstszene.",
    },
    {
      index: 9,
      city: "Dortmund",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Dortmund, Ruhrgebietsstadt, bekannt für industrielle Geschichte, Fußballkultur und grünen Westfalenpark.",
    },
    {
      index: 10,
      city: "Essen",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Essen, im Ruhrgebiet, bekannt für Zeche Zollverein, kulturelle Vielfalt und grüne Erholungsgebiete.",
    },
    {
      index: 11,
      city: "Bremen",
      bundesland: "Bremen (HB)",
      introduction:
        "Bremen, historische Hafenstadt, bekannt für UNESCO-Welterbe, Rolandstatue und Bremer Stadtmusikanten.",
    },
    {
      index: 12,
      city: "Dresden",
      bundesland: "Sachsen (SN)",
      introduction:
        'Dresden, "Elbflorenz," bekannt für barocke Architektur, Frauenkirche und bedeutende Kunstsammlungen.',
    },
    {
      index: 13,
      city: "Hannover",
      bundesland: "Niedersachsen (NI)",
      introduction:
        "Hannover, Messestadt, bekannt für Herrenhäuser Gärten, Neues Rathaus und vielfältige Kulturszene.",
    },
    {
      index: 14,
      city: "Nürnberg",
      bundesland: "Bayern (BY)",
      introduction:
        "Nürnberg, historische Stadt, bekannt für Kaiserburg, Altstadt und bedeutende Rolle im Nationalsozialismus.",
    },
    {
      index: 15,
      city: "Duisburg",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Duisburg, Ruhrgebietsstadt, bekannt für Binnenhafen, industrielle Geschichte und kulturelle Transformation.",
    },
    {
      index: 16,
      city: "Bochum",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Bochum, im Ruhrgebiet, bekannt für Bergbaugeschichte, Deutsches Bergbau-Museum und lebendige Kulturszene.",
    },
    {
      index: 17,
      city: "Wuppertal",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Wuppertal, bekannt für Schwebebahn, kulturelle Vielfalt und grüne Erholungsgebiete.",
    },
    {
      index: 18,
      city: "Bielefeld",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Bielefeld, Industriestadt, bekannt für Mittelaltergeschichte, blühende Wirtschaft und Universität.",
    },
    {
      index: 19,
      city: "Bonn",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Bonn, ehemalige Hauptstadt, bekannt für Beethoven-Haus, Museumsmeile und Universität.",
    },
    {
      index: 20,
      city: "Münster",
      bundesland: "Nordrhein-Westfalen (NW)",
      introduction:
        "Münster, Universitätsstadt, bekannt für Westfälischen Frieden, reiche Kultur und Fahrradfreundlichkeit.",
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
            <h1 className="riseUp_1">Bundesrepublik Deutschland</h1>
            <h2 className="riseUp_2">About Germany</h2>
            <Breadcrumbs />
          </div>
          <StyledSectionDeu
            icon="globe"
            description="Discover Germany's vibrant culture, history, and language through interactive lessons designed to enhance your learning experience."
          />
          <div className={`${styles.menu} riseUp_3`}>
            {chapters.map((chapter) => (
              <Box
                key={chapter.index}
                path={"/german/germany/" + chapter.index}
                title={chapter.city}
                subtitle={chapter.bundesland}
                description={chapter.introduction}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
