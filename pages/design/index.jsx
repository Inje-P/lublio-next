import Head from "next/head";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableHorizontal from "@/components/TableHorizontal";
import TableVertical from "@/components/TableVertical";
import Header from "@/components/Header";
import BBSList from "@/components/BBSList";
import Box2 from "@/components/Box2";
import { CubeFra, CubeDeu, CubeRus } from "@/components/Cube";

// Example
import data from "@/assets/json/post/post_ex.json";

export default function DesignPage() {
  const [section, setSection] = useState(3);

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
        <button onClick={() => setSection(1)}>Section 1</button>
        <button onClick={() => setSection(2)}>Section 2</button>
        <button onClick={() => setSection(3)}>Section 3</button>
      </div>

      {section == 1 ? (
        <div className="wrapper" style={{ marginTop: "0px" }}>
          <h1>Section 1</h1>
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
            <h2>Text Box</h2>

            <div className="text-box">
              <p>
                Lublio isn't just about learning a language; it's about
                embracing the freedom to explore the world with confidence. Our
                app is tailored for the modern wanderer, offering:
              </p>
              <ul className="styled-list">
                <li>
                  Quick, practical lessons focused on real-world travel
                  scenarios
                </li>
                <li>
                  Cultural insights that help you blend in and avoid faux pas
                </li>
                <li>
                  Location-based content that adapts to your travel destination
                </li>
                <li>
                  Offline mode for learning on-the-go, even in remote areas
                </li>
                <li>
                  Interactive challenges that make learning fun and addictive
                </li>
              </ul>
            </div>

            <div className="text-box">
              <ul className="styled-list-with-flags">
                <li>
                  <span className="fi fi-gb"></span>
                  <p>Can you help me?</p>
                </li>
                <li>
                  <span className="fi fi-gb"></span>
                  <p>Where is the nearest bus stop?</p>
                </li>
                <li>
                  <span className="fi fi-gb"></span>
                  <p>How do I get to the train station?</p>
                </li>
                <li>
                  <span className="fi fi-gb"></span>
                  <p>How long does it take to get there?</p>
                </li>
                <li>
                  <span className="fi fi-gb"></span>
                  <p>Where is the nearest subway station?</p>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h2>Buttons</h2>
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
            <h2>Table</h2>
            <h3>Horizontal</h3>
            <TableHorizontal
              numberOfColumns="4"
              data={{
                sein: ["bin", "bist", "ist", "sind", "seid", "sind"],
                haben: ["habe", "hast", "hat", "haben", "habt", "haben"],
                werden: [
                  "werde",
                  "wirst",
                  "wird",
                  "werden",
                  "werdet",
                  "werden",
                ],
                machen: [
                  "mache",
                  "machst",
                  "macht",
                  "machen",
                  "macht",
                  "machen",
                ],
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
      ) : null}

      {section == 2 ? (
        <div className="wrapper" style={{ marginTop: "0px" }}>
          <h1>Section 2</h1>
          <Box2
            path="/russian/a1"
            title="Personalpronomen in der Nominativform"
            subtitle="Beginner"
          />
          <h2>BBS List</h2>
          <BBSList props={data} />
        </div>
      ) : null}

      {section == 3 ? (
        <div
          className="wrapper"
          style={{ marginTop: "0px", paddingLeft: "200px" }}
        >
          <CubeFra />
          <div style={{ width: "100%", height: "200px" }}></div>
          <CubeDeu />
          <div style={{ width: "100%", height: "200px" }}></div>
          <CubeRus />
          <div style={{ width: "100%", height: "200px" }}></div>
        </div>
      ) : null}
    </>
  );
}
