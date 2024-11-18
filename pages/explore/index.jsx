import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/Explore.module.css";
import Header from "@/components/Header";

export default function Explore() {
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
      <div className={styles.exploreWrapper}>
        <div className={styles.stars}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.ripple}>
          <div className={styles.rippleBox}>
            <span style={{ animationDelay: "calc(0.2s * 1)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 2)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 3)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 4)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 5)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 6)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 7)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 8)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 9)" }}></span>
            <span style={{ animationDelay: "calc(0.2s * 10)" }}></span>
          </div>
        </div>
        <div className={styles.main}>
          <Link href="/french" className="fade_2">
            <div className={styles.btnFrench}>
              <h2 className={styles.btnFrenchTitle}>Français</h2>
            </div>
          </Link>
          <Link href="/german" className="fade_3">
            <div className={styles.btnGerman}>
              <h2 className={styles.btnGermanTitle}>Deutsch</h2>
            </div>
          </Link>
          <Link href="/russian" className="fade_4">
            <div className={styles.btnRussian}>
              <h2 className={styles.btnRussianTitle}>Русский</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
