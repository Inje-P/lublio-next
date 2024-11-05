import Head from "next/head";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import StyledSectionFra from "@/components/StyledSectionFra";
import BoxFra from "@/components/BoxFra";
import { useEffect } from "react";

export default function FrenchPhrasebook() {
  const chapters = [
    {
      id: 1,
      title: "Basic Greetings and Introductions",
      description:
        "Learn essential greetings, introduce yourself, ask for someone's information, and use simple pleasantries. Perfect for making a great first impression.",
    },
    {
      id: 2,
      title: "Travel and Transportation",
      description:
        "Navigate travel easily by learning how to ask for directions, buy tickets, inquire about schedules, use public transport, rent vehicles, and get a taxi.",
    },
    {
      id: 3,
      title: "Accommodation",
      description:
        "Master the essentials of checking in and out, asking about amenities, requesting services, and dealing with common issues at hotels.",
    },
    {
      id: 4,
      title: "Food and Dining",
      description:
        "From making reservations to ordering food and drinks, handling dietary restrictions, paying the bill, and expressing your opinion about the meal.",
    },
    {
      id: 5,
      title: "Shopping",
      description:
        "Discover how to ask for prices, bargain, describe items, pay, and manage returns or exchanges while shopping.",
    },
    {
      id: 6,
      title: "Health and Emergencies",
      description:
        "Find a doctor or pharmacy, describe symptoms, ask for medication, know emergency contacts, and learn first aid phrases.",
    },
    {
      id: 7,
      title: "Work and Digital Connectivity",
      description:
        "Find co-working spaces, ask about Wi-Fi, set up meetings, get tech support, and discuss work schedules.",
    },
    {
      id: 8,
      title: "Socializing and Networking",
      description:
        "Use common social phrases, talk about hobbies, network at events, and exchange contact information to build connections.",
    },
    {
      id: 9,
      title: "Leisure and Activities",
      description:
        "Learn to ask about local attractions, book tours, inquire about cultural events, and explore sports and recreational activities.",
    },
    {
      id: 10,
      title: "Banking and Finance",
      description:
        "Exchange money, use ATMs, open a bank account, and discuss bank fees and services for smooth financial transactions.",
    },
    {
      id: 11,
      title: "Utilities and Housing",
      description:
        "Set up utilities, report issues, understand rental agreements, and communicate effectively with landlords.",
    },
    {
      id: 12,
      title: "Legal and Administrative",
      description:
        "Navigate visa and immigration requirements, report lost or stolen items, deal with local authorities, and know your rights and responsibilities.",
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

        <title>Phrasebook | Lublio</title>
      </Head>
      <Header />
      <div className="wrapper">
        <h1>Phrasebook</h1>
        <Breadcrumbs />

        <StyledSectionFra
          icon="record_voice_over"
          description="Access essential phrases for various scenarios. From everyday interactions to travel emergencies, this section equips you with practical expressions for effective communication."
        />

        {chapters.map((chapter) => (
          <BoxFra
            key={chapter.id}
            path={"/french/phrasebook/" + chapter.id}
            title={chapter.title}
            subtitle=""
            description={chapter.description}
          />
        ))}
      </div>
    </>
  );
}
