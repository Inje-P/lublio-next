import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import StyledSectionRus from "@/components/StyledSectionRus";
import Box from "@/components/Box";
import { useEffect } from "react";
import styles from "@/styles/Russo.module.css";

export default function AboutRussia() {
  const chapters = [
    {
      index: 1,
      city: "Москва",
      region: "Москва",
      introduction:
        "Москва, столица России, является одним из крупнейших и самых динамично развивающихся городов мира.",
    },
    {
      index: 2,
      city: "Санкт-Петербург",
      region: "Санкт-Петербург",
      introduction:
        "Санкт-Петербург — второй по величине город России и культурная столица страны.",
    },
    {
      index: 3,
      city: "Новосибирск",
      region: "Новосибирская область",
      introduction:
        "Новосибирск — крупнейший город Сибири и третий по величине город России после Москвы и Санкт-Петербурга.",
    },
    {
      index: 4,
      city: "Екатеринбург",
      region: "Свердловская область",
      introduction:
        "Екатеринбург — третий по величине город России, административный центр Свердловской области.",
    },
    {
      index: 5,
      city: "Казань",
      region: "Республика Татарстан",
      introduction:
        "Казань, столица Республики Татарстан в России, является одним из самых культурно и исторически насыщенных городов на Урале.",
    },
    {
      index: 6,
      city: "Нижний Новгород",
      region: "Нижегородская область",
      introduction:
        "Нижний Новгород — один из старейших и крупнейших городов России, расположенный на Волге.",
    },
    {
      index: 7,
      city: "Челябинск",
      region: "Челябинская область",
      introduction:
        "Челябинск — крупнейший город в Уральском федеральном округе России, административный центр Челябинской области.",
    },
    {
      index: 8,
      city: "Красноярск",
      region: "Красноярский край",
      introduction:
        "Красноярск — крупный город на северо-востоке России, административный центр Красноярского края.",
    },
    {
      index: 9,
      city: "Самара",
      region: "Самарская область",
      introduction:
        "Самара — крупный город на юго-востоке России, административный центр Самарской области.",
    },
    {
      index: 10,
      city: "Уфа",
      region: "Башкортостан",
      introduction:
        "Уфа — столица и крупнейший город Республики Башкортостан, расположенный на реке Белая.",
    },
    {
      index: 11,
      city: "Ростов-на-Дону",
      region: "Ростовская область",
      introduction:
        "Ростов-на-Дону — крупнейший город Южного Федерального округа России, расположенный на берегах реки Дон.",
    },
    {
      index: 12,
      city: "Омск",
      region: "Омская область",
      introduction:
        "Омск — крупный город на западе Сибири, расположенный на реке Иртыш.",
    },
    {
      index: 13,
      city: "Краснодар",
      region: "Краснодарский край",
      introduction:
        "Краснодар — один из крупнейших городов Юга России и административный центр Краснодарского края.",
    },
    {
      index: 14,
      city: "Воронеж",
      region: "Воронежская область",
      introduction:
        "Воронеж — один из старейших и крупнейших городов Центральной России, расположенный на реке Воронеж в Воронежской области.",
    },
    {
      index: 15,
      city: "Пермь",
      region: "Пермский край",
      introduction:
        "Пермь — крупнейший город на Урале и административный центр Пермского края.",
    },
    {
      index: 16,
      city: "Волгоград",
      region: "Волгоградская область",
      introduction:
        "Город Волгоград расположен на западном берегу Волги и является одним из крупнейших и исторически значимых городов России.",
    },
    {
      index: 17,
      city: "Саратов",
      region: "Саратовская область",
      introduction:
        "Город Саратов, расположенный на берегу Волги, является одним из крупнейших городов Приволжского федерального округа России.",
    },
    {
      index: 18,
      city: "Тюмень",
      region: "Тюменская область",
      introduction:
        "Город Тюмень, расположенный на западе Сибири на реке Тура, является административным центром Тюменской области и одним из старейших городов России.",
    },
    {
      index: 19,
      city: "Тольятти",
      region: "Самарская область",
      introduction:
        "Тольятти — город на юго-востоке России, расположенный на берегу Волги в Самарской области.",
    },
    {
      index: 20,
      city: "Барнаул",
      region: "Алтайский край",
      introduction:
        "Барнаул — административный центр Алтайского края и один из крупнейших городов Сибири.",
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
            <h1 className="riseUp_1">Российская Федерация</h1>
            <h2 className="riseUp_2">About Russia</h2>
            <Breadcrumbs />
          </div>
          <StyledSectionRus
            icon="globe"
            description="Discover Russia's vibrant culture, history, and language through interactive lessons designed to enhance your learning experience."
          />
          <div className={`${styles.menu} riseUp_3`}>
            {chapters.map((chapter) => (
              <Box
                key={chapter.index}
                path={"/russo/russia/" + chapter.index}
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
