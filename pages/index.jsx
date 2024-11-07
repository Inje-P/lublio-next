import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BoxHero from "@/components/BoxHero";
import Typewriter from "typewriter-effect";
import MainImage from "@/public/images/hero.png";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

export default function Home() {
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
      <div className="wrapper">
        <div className={styles.main}>
          <div className={styles.mainLeft}>
            <h1>Embark on a journey where</h1>
            <h1 style={{ color: "var(--hero)" }}>
              every word opens new horizons.
            </h1>
          </div>
          <div className={styles.mainRight}>
            <div className={styles.mainRightTop}>
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Embark on your language learning journey.",
                      "Lancez-vous dans l'apprentissage d'une langue.",
                      "Beginnen Sie Ihre Reise zum Sprachenlernen.",
                      "Iniziate il vostro viaggio nell'apprendimento delle lingue.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 25,
                  }}
                />
              </h1>
            </div>
            <div className={styles.mainRightBottom}>
              <ul>
                <li>
                  <Link href="/french" className={styles.heroLink}>
                    <p>FR</p>
                  </Link>
                </li>
                <li>
                  <Link href="/german" className={styles.heroLink}>
                    <p>DE</p>
                  </Link>
                </li>
                <li>
                  <Link href="/italian" className={styles.heroLink}>
                    <p>IT</p>
                  </Link>
                </li>
              </ul>
              {/* <BoxHero
                path="/french"
                title="Français"
                subtitle="French"
                description="Lublio, ce n'est pas seulement l'apprentissage d'une langue, c'est aussi la liberté d'explorer le monde en toute confiance."
              />
              <BoxHero
                path="/german"
                title="Deutsch"
                subtitle="German"
                description="Lublio ist nicht nur das Erlernen einer Sprache, sondern auch die Freiheit, die Welt selbstbewusst zu erkunden."
              />
              <BoxHero
                path="/russian"
                title="Русский"
                subtitle="Russian"
                description="Лублио - это не только изучение языка, но и свобода уверенно познавать мир."
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <Image
          src={MainImage}
          alt="Main Image"
          className={styles.mainImage}
          priority="true"
        />
      </div>
    </>
  );
}
