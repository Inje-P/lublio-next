import Head from "next/head";
import { useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableHorizontal from "@/components/TableHorizontal";
import TableVertical from "@/components/TableVertical";
import Header from "@/components/Header";

export default function DesignPage() {
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
      <div className="wrapper">
        <h1>Design</h1>
        <h2>Design</h2>
        <h3>Design</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          rem blanditiis corrupti alias cumque suscipit molestias modi soluta
          odio magni voluptatem vitae veritatis quos voluptas sit asperiores,
          temporibus, ipsam facere.
        </p>
        <Breadcrumbs />

        <div style={{ marginBottom: "20px" }}>
          <h1>Text Box</h1>

          <div class="text-box">
            <p>
              Lublio isn't just about learning a language; it's about embracing
              the freedom to explore the world with confidence. Our app is
              tailored for the modern wanderer, offering:
            </p>
            <ul class="styled-list">
              <li>
                Quick, practical lessons focused on real-world travel scenarios
              </li>
              <li>
                Cultural insights that help you blend in and avoid faux pas
              </li>
              <li>
                Location-based content that adapts to your travel destination
              </li>
              <li>Offline mode for learning on-the-go, even in remote areas</li>
              <li>
                Interactive challenges that make learning fun and addictive
              </li>
            </ul>
          </div>

          <div class="text-box">
            <ul class="styled-list-with-flags">
              <li>
                <span class="fi fi-gb"></span>
                <p>Can you help me?</p>
              </li>
              <li>
                <span class="fi fi-gb"></span>
                <p>Where is the nearest bus stop?</p>
              </li>
              <li>
                <span class="fi fi-gb"></span>
                <p>How do I get to the train station?</p>
              </li>
              <li>
                <span class="fi fi-gb"></span>
                <p>How long does it take to get there?</p>
              </li>
              <li>
                <span class="fi fi-gb"></span>
                <p>Where is the nearest subway station?</p>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h1>Buttons</h1>
          <ul style={{ listStyle: "none" }}>
            <button>
              Welche Art von Visum benötige ich für die Einreise ins Land?
            </button>
            <button>Какой тип визы мне нужен для въезда в страну?</button>
            <button>
              Quel type de visa ai-je besoin pour entrer dans le pays?
            </button>
            <button>What type of visa do I need to enter the country?</button>
          </ul>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h1>Table</h1>
          <h3>Horizontal</h3>
          <TableHorizontal
            numberOfColumns="4"
            data={{
              sein: ["bin", "bist", "ist", "sind", "seid", "sind"],
              haben: ["habe", "hast", "hat", "haben", "habt", "haben"],
              werden: ["werde", "wirst", "wird", "werden", "werdet", "werden"],
              machen: ["mache", "machst", "macht", "machen", "macht", "machen"],
            }}
          />
        </div>
        <h3>Vertical</h3>
        <TableVertical
          numberOfRows="6"
          data={{
            N1: ["der", "die", "das", "die"],
            N2: ["des", "der", "des", "der"],
            N3: ["dem", "der", "dem", "den"],
            N4: ["des", "der", "des", "der"],
            N5: ["dem", "der", "dem", "den"],
            N6: ["den", "die", "das", "die"],
          }}
        />
      </div>
    </>
  );
}
