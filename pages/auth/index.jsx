"use client";

import Head from "next/head";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaGoogle, FaDiscord } from "react-icons/fa";
import { useRouter } from "next/router";
import styles from "@/styles/Auth.module.css";

export default function Auth() {
  const router = useRouter();

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
      <div className={styles.authWrapper}>
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
        <div className={styles.auth}>
          <Link href="/">
            <h1 className={`${styles.authTitle} fade_1`}>LVBLIO</h1>
          </Link>
          <div className={styles.authButtons}>
            {/* <form className={styles.styledForm}>
              <ul>
                <li>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </li>
              </ul>
            </form> */}
            {/* <button>Sign In</button> */}
            <button onClick={() => signIn("google")}>
              <FaGoogle
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "7px",
                  transform: "translateY(3px)",
                }}
              />
              Sign in with Google
            </button>
            <button onClick={() => signIn("discord")}>
              <FaDiscord
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "7px",
                  transform: "translateY(3px)",
                }}
              />
              Sign in with Discord
            </button>
            {/* <button
              onClick={() => {
                router.push("/auth/signup");
              }}
            >
              Sign up
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
