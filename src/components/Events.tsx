import type React from "react";
import { useState, useMemo } from "react";
import styles from "./css/Page.module.css";
import { EventCarousel } from "./EventCarousel.tsx";
import type { CarouselEvent } from "./EventCarousel.tsx";
// import defaultEventImage from "../assets/TK26-logo-color.webp";

// Import event images
import imgAdaptathon from "../assets/events/ADAPTATHON.webp";
import imgATV from "../assets/events/ATV Build&Race.webp";
import imgBotforge from "../assets/events/botforge.webp";
import imgCrushingDepths from "../assets/events/Crushing Depths CTF.webp";
import imgDronix from "../assets/events/DRONIX.webp";
import imgGhostProtocol from "../assets/events/Ghost_Protocol.webp";
import imgHelloFriday from "../assets/events/Hello Friday.webp";
import imgLightsLensAction from "../assets/events/LightLensAction.webp";
import imgMercedesWorkshop from "../assets/events/mercedes workshop.webp";
import imgMetroRethink from "../assets/events/Metro Rethink.webp";
import imgPostItUp from "../assets/events/Post it up poster.webp";
import imgRextech from "../assets/events/Rextech.webp";
import imgScenius from "../assets/events/Scenious 4.0 .webp";
import imgCapitalClash from "../assets/events/Capital_Clash.webp";
import imgCircuitSafari from "../assets/events/Circuit safari.webp";
import imgPayload from "../assets/events/Payload.webp";
import imgReviveNight from "../assets/events/ReviveNight.webp";
import imgTraceback from "../assets/events/Traceback.webp";
import imgCircuitQuest from "../assets/events/circuit_quest.webp";
import imgShahiDossier from "../assets/events/shahi dossier.webp";
import imgAmongUs from "../assets/events/amongus.webp";
import imgEnduro from "../assets/events/enduro.webp";

const ACTUAL_EVENTS: CarouselEvent[] = [
  {
    id: "ev-1",
    title: "REVIVE NIGHT",
    category: "Hackathon",
    description: "All teams are given problem statements, which consists of failed startups.Participants have to find out why it failed and make an MVP within 12 hours",
    prizePool: "₹15,000/-",
    organizer: "IEDC",
    time: "5:00PM-10:00AM",
    venue: "Gallery Hall",
    registrationFee: "₹249/-",
    imageUrl: imgReviveNight,
    date: "2026-08-05"
  },
  {
    id: "ev-2",
    title: "Adaptathon",
    category: "Hackathon",
    description: "Welcome to the ultimate relay-style hackathon, where teams of 3 to 4 race to develop projects from core prompts, but with a massive twist: every two hours, they must hand off their codebase and inherit a completely unfamiliar project from another team. Their challenge is to quickly decipher the previous group's work, seamlessly add new features, and push their code before the two-hour clock strikes zero again. Instead of evaluating just the final product, dedicated panels continuously score teams based on the actual progress and value they added to the specific code they received. The team that adapts the fastest, collaborates the best, and builds the most effectively across these relentless sprints will claim the ultimate victory!",
    prizePool: "₹10,000/-",
    organizer: "ITRAX",
    time: "5:00PM-9:00AM",
    venue: "Kleinrock Lab,Turing Lab,CODD Lab,Shannon Lab",
    registrationFee: "₹150/-",
    imageUrl: imgAdaptathon,
    date: "2026-08-05"
  },
  {
    id: "ev-3",
    title: "ENDURO EDGE",
    category: "Workshop",
    description: "A motorsport workshop",
    prizePool: "NA",
    organizer: "REAL MECHANICA",
    time: "11:30 AM-1:30 PM",
    venue: "Chavara Hall",
    registrationFee: "₹400/-",
    imageUrl: imgEnduro,
    date: "2026-07-31",
    registrationLink: "https://konfhub.com/enduro-edge"
  },
  {
    id: "ev-4",
    title: "ATV:Build & Race-RaceCraft RC",
    category: "Competition",
    description: "RaceCraft RC is a team-based engineering competition where each team of four members designs and builds a Radio Controlled (RC) race car before the event, following the technical specifications provided by the organizers. On the event day, participants will first attend a technical session conducted by experts, covering RC vehicle design, race rules, safety guidelines, and performance optimization. Following the session and technical inspection, teams will compete in multiple challenge rounds on a specially designed track featuring different terrains and obstacles that test the vehicle's speed, stability, maneuverability, and durability. The event aims to provide hands-on experience in engineering design, problem-solving, and teamwork while fostering innovation through competitive racing.",
    prizePool: "₹8,000/-",
    organizer: "Spartans",
    time: "1:00PM-3:00PM",
    venue: "PG Tutorial Hall 3",
    registrationFee: "₹500/-",
    imageUrl: imgATV,
    date: "2026-08-05",
    registrationLink: "https://konfhub.com/atvbuild-race-racecraft-rc"
  },
  {
    id: "ev-5",
    title: "Scenius 4.0",
    category: "Series of Rounds",
    description: "Scenius 4.0 is a four-round technical competition organized in association with the Bureau of Indian Standards (BIS) to promote engineering knowledge, standardization, teamwork, and problem-solving skills. Through a combination of a BIS standards quiz, a standard creation challenge, a technical treasure hunt, and a bridge-building competition, participants are tested on their analytical thinking, creativity, and practical engineering abilities. The event aims to bridge the gap between theoretical learning and real-world engineering applications while fostering awareness of the importance of standards in everyday life and the engineering profession.",
    prizePool: "10,000/-",
    organizer: "Nirmana",
    time: "9:00AM-3:00PM",
    venue: "KE Seminar Hall,LH20,LH21 4TH FLOOR KE Building,Survey Lab",
    registrationFee: "₹100/-",
    imageUrl: imgScenius,
    date: "2026-08-05"
  },
  {
    id: "ev-6",
    title: "The Ghost Protocol",
    category: "Series of Rounds",
    description: "The Ghost Protocol is a team-based puzzle-solving event in which participants work through a sequence of interconnected challenges. The event is designed around a story-based investigation, with each puzzle revealing a clue that leads to the next stage of the mission. Teams must solve the puzzles in succession in order to progress through the storyline and reach the final challenge. The puzzles will include a variety of encryption and decoding techniques such as Atbash cipher, Caesar cipher, and similar cryptographic formats, along with selected coding-based tasks in C along with a logic circuit based puzzles.",
    prizePool: "₹3,000/-",
    organizer: "NDLI RSET",
    time: "5/8/26",
    registrationFee: "₹150/-",
    imageUrl: imgGhostProtocol,
    date: "2026-08-05"
  },
  {
    id: "ev-7",
    title: "Traceback",
    category: "Competition",
    description: "TRACEBACK is a narrative-driven technical escape room organized by the CSI Student Branch where teams act as digital forensic analysts to solve a campus-wide mystery. The event requires zero prior coding knowledge, making it fully accessible to all engineering branches while introducing real-world technology concepts.",
    prizePool: "₹3,500/-",
    organizer: "CSI-SB RSET",
    time: "5/8/26",
    registrationFee: "TBD",
    imageUrl: imgTraceback,
    date: "2026-08-05"
  },
  {
    id: "ev-8",
    title: "POST IT UP!",
    category: "Workshop",
    description: "A 2-hour beginner-friendly Canva workshop by the Jesus Youth RSET Media Team, part of Techkshtra, covering design basics and a hands-on poster-making activity.",
    prizePool: "NA",
    organizer: "Jesus Youth RSET",
    time: "4:30 PM-6:30 PM",
    venue: "Zuse Lab",
    registrationFee: "Free",
    imageUrl: imgPostItUp,
    date: "2026-08-03",
    registrationLink: "https://konfhub.com/post-it-up"
  },
  {
    id: "ev-9",
    title: "BOTFORGE",
    category: "Ideathon",
    description: "An intensive Ideathon focusing on technology-driven social impact.",
    prizePool: "₹5000/-",
    organizer: "IEEE RAS x NSS",
    time: "5/8/26",
    registrationFee: "₹150/-",
    imageUrl: imgBotforge,
    date: "2026-08-05"
  },
  {
    id: "ev-10",
    title: "Circuit Safari",
    category: "Competition",
    description: "Test your engineering skills in this fast-paced, three-round elimination tournament for 15 teams. The competition begins with a 20-minute electronics crossword puzzle, narrowing the field to 10 teams. In the 30-minute second round, competitors tackle complex K-maps, with only the top five advancing. The 30-minute final challenges these elite teams to solve problems using Boolean laws and construct a live working circuit, where the fastest functional build claims the championship.",
    prizePool: "₹1,600/-",
    organizer: "IEEE SPS SB RSET",
    time: "4:30 PM-6:00 PM",
    venue: "LCD Lab ",
    registrationFee: "₹150/-",
    imageUrl: imgCircuitSafari,
    date: "2026-08-04",
    registrationLink: "https://konfhub.com/circuit-safari"
  },
  {
    id: "ev-11",
    title: "Circuit Quest",
    category: "Debugging Event",
    description: "Circuit Quest is an exciting technical treasure hunt designed to test participants' electronics knowledge, problem-solving abilities, and teamwork.",
    prizePool: "₹2,000/-",
    organizer: "Apptronics",
    time: "4:30 PM-6:00 PM",
    venue: "VI Lab ",
    registrationFee: "₹300/-",
    imageUrl: imgCircuitQuest,
    date: "2026-08-04",
    registrationLink: "https://konfhub.com/circuit-quest"
  },
  {
    id: "ev-12",
    title: "AMONG US 3.0",
    category: "Treasure Hunt",
    description: "Among Us 3.0 is a technology-driven campus challenge that combines coding, logical reasoning, cybersecurity, debugging, and QR-based interactive missions into an immersive competitive experience inspired by the popular multiplayer game Among Us.",
    prizePool: "₹4,500/-",
    organizer: "IEEE CS RSET SBC",
    time: "5/8/26",
    registrationFee: "₹120/-",
    imageUrl: imgAmongUs,
    date: "2026-08-05"
  },
  {
    id: "ev-13",
    title: "REXTECH GAMELAB",
    category: "Workshop",
    description: "\"Introduction to Game Development with Hands-on Unity Session\" in collaboration with Rextech Studios, Infopark Kochi.The 4-hour workshop is designed to introduce students to the fundamentals of game development through a combination of industry insights and practical learning. The session will be conducted by Aravind Parakkat, Game Developer at Rextech Studios, and will provide participants with an overview of the game development industry, career opportunities, and the complete game development lifecycle. The workshop will also include a hands-on session using the Unity Game Engine, where participants will build a simple 2D game while learning concepts such as game objects, physics, collision detection, basic C# scripting, user interface design, and core game mechanics. Designed for beginners, the workshop requires no prior experience and focuses on developing creativity, logical thinking, and problem-solving skills. By the end of the session, participants will have created and tested their own playable game using industry-standard tools.",
    prizePool: "Nil",
    organizer: "Vikings",
    time: "10:00AM-2:00PM",
    venue: "Signal Processing Lab",
    registrationFee: "₹150/-",
    imageUrl: imgRextech,
    date: "2026-08-05",
    registrationLink: "https://konfhub.com/rextech-gamelab"
  },
  {
    id: "ev-14",
    title: "Project Shahi Dossier",
    category: "Technical Treasure Hunt",
    description: "Project shahi dossier opens with a 90-minute cybersecurity talk by TCS, followed by a live, story-driven treasure hunt across 13 connected investigation stages, and closes with a courtroom finale where teams present their case for a ₹10,000 prize pool. It is open to all departments and no prior cybersecurity knowledge required.",
    prizePool: "₹10,000/-",
    organizer: "Mughals",
    time: "9:30AM-2:30PM",
    venue: "Multimedia Hall",
    registrationFee: "₹149/head",
    imageUrl: imgShahiDossier,
    date: "2026-08-05",
    registrationLink: "https://konfhub.com/project-shahi-dossier"
  },
  {
    id: "ev-15",
    title: "Metro Rethink",
    category: "Problem Solving Challenge",
    description: "Teams come up with a problem statement after field study and work on it for the solution. The judges panel will filter out and bring out 3-5 teams for the finale for which the teams will be asked to assemble at an assembly point and a KMRL feeder bus will pick them up and bring them to RSET campus where the bus will be parked and using the bus as background the team will present their presentation of their problems and solutions in front of the judges.",
    prizePool: "₹10,000/-",
    organizer: "Rajputs",
    time: "11:00AM-3:00PM",
    venue: "PG Porch",
    registrationFee: "₹600/-",
    imageUrl: imgMetroRethink,
    date: "2026-08-05",
    registrationLink: "https://konfhub.com/metro-rethink"
  },
  {
    id: "ev-16",
    title: "Lights Lens Action",
    category: "Cinematography Masterclass",
    description: "Lights • Lens • Action is a 3-hour interactive cinematography workshop designed to introduce students to the art and technology of visual storytelling. Led by Mr. Naveen Najose, an RSET alumnus and professional cinematographer, the workshop begins with a 2-hour interactive session covering the fundamentals of cinematography, camera techniques, lens selection, composition, shot design, and the filmmaking process through real-world industry insights. This is followed by a hands-on practical session, where participants can apply the concepts they have learned, and concludes with an engaging Q&A session, providing students with the opportunity to interact directly with the speaker, clarify their doubts, and gain valuable insights into careers and opportunities in the film industry.",
    prizePool: "Nil",
    organizer: "ARYANS",
    time: "11:00AM-2:00PM",
    venue: "Multimedia Hall",
    registrationFee: "₹150/-",
    imageUrl: imgLightsLensAction,
    date: "2026-08-05",
    registrationLink: "https://konfhub.com/lights-lens-action"
  },
  {
    id: "ev-17",
    title: "CRUSHING DEPTHS:CTF",
    category: "CTF",
    description: "Cyberblitz CTF: Crushing Depths is a progressive cybersecurity competition where teams dive through layered challenges in cryptography, web exploitation, reverse engineering, and forensics , each solve unlocking the next, all the way to the final flag.",
    prizePool: "₹10,000/-",
    organizer: "CyberBlitz",
    time: "5/8/26",
    registrationFee: "₹150/head",
    imageUrl: imgCrushingDepths,
    date: "2026-08-05"
  },

  {
    id: "ev-19",
    title: "DRONIX",
    category: "Workshop",
    description: "'DRONIX' is a drone workshop conducted by Airpix with the objective of providing participants with a foundational understanding of unmanned aerial vehicles (UAVs). The workshop covers the basic principles of drone operation, major hardware components, flight control systems, assembly, safety practices, and the applications of drones across various industries.",
    prizePool: "NA",
    organizer: "Eluxtra x IEEE RAS",
    time: "5/8/26",
    registrationFee: "₹150/head",
    imageUrl: imgDronix,
    date: "2026-08-05"
  },
  {
    id: "ev-20",
    title: "Hello Friday: Build your own Jarvis",
    category: "Workshop",
    description: "3 hour hands on Conversational AI assistant workshop",
    prizePool: "Nil",
    organizer: "Articon",
    time: "5/8/26",
    registrationFee: "₹200/-",
    imageUrl: imgHelloFriday,
    date: "2026-08-05"
  },
  {
    id: "ev-21",
    title: "Mercedes Workshop",
    category: "Workshop",
    description: "A 3 hour interactive session where the experienced industry people from Mercedes talk about the latest and greatest tech",
    prizePool: "Nil",
    organizer: "Apptronics x SAE",
    time: "5/8/26",
    registrationFee: "₹200/-",
    imageUrl: imgMercedesWorkshop,
    date: "2026-08-05"
  },
  {
    id: "ev-22",
    title: "CAPITAL CLASH",
    category: "Business Event",
    description: "Capital Clash is a fast-paced business strategy event where teams compete to build the strongest business empire by acquiring assets, tackling business challenges, negotiating deals, and adapting to unexpected market twists. Success depends on strategic thinking, teamwork, and smart financial decisions.",
    prizePool: "₹3000/-",
    organizer: "GenSys",
    time: "5/8/26",
    registrationFee: "₹150/team",
    imageUrl: imgCapitalClash,
    date: "2026-08-05"
  },
  {
    id: "ev-24",
    title: "Payload",
    category: "Competition",
    description: "A closed-book, no-internet hardware hackathon. Participants design, build, and digitize a fundamental analog circuit using only the provided textbooks, raw components, and their engineering fundamentals.",
    prizePool: "₹15,000/-",
    organizer: "Electronauts",
    time: "4/8/26-5/8/26",
    registrationFee: "₹350/head",
    imageUrl: imgPayload,
    date: "2026-08-05"
  }
];

export function Events(): React.JSX.Element {
  const [uiFilterType, setUiFilterType] = useState<"Featured" | "Pre Event" | "Main Event">("Featured");
  const [activeFilter, setActiveFilter] = useState<"Featured" | "Pre Event" | "Main Event">("Featured");
  const [isShuffling, setIsShuffling] = useState(false);

  const handleFilterClick = (newFilter: "Featured" | "Pre Event" | "Main Event") => {
    if (newFilter === uiFilterType) return;

    // Start exit animation (shuffle cards into a deck)
    setIsShuffling(true);
    setUiFilterType(newFilter);

    // Wait for exit animation, swap content, then animate in
    setTimeout(() => {
      setActiveFilter(newFilter);
      setTimeout(() => {
        setIsShuffling(false);
      }, 50); // slight delay to ensure React renders the new state first
    }, 400); // 400ms shuffle out duration
  };

  const filteredEvents = useMemo(() => ACTUAL_EVENTS.filter(event => {
    if (activeFilter === "Featured") {
      const featuredTitles = [
        "ATV:Build & Race-RaceCraft RC",
        "REXTECH GAMELAB",
        "Project Shahi Dossier",
        "Metro Rethink",
        "Lights Lens Action"
      ];
      return featuredTitles.includes(event.title);
    }

    let type = event.eventType;
    if (event.date) {
      const eventDate = new Date(event.date);
      const splitDate = new Date("2026-08-05");
      type = eventDate < splitDate ? "Pre Event" : "Main Event";
    }

    return (type || "Main Event") === activeFilter;
  }), [activeFilter]);

  return (
    <section id="events" className={styles.sectionContainer}>
      <div className={styles.contentBody} style={{ padding: "0 2rem" }}>
        <h2 className={styles.heading}>Events</h2>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <div className={styles.pillContainer}>
          <button
            onClick={() => handleFilterClick("Featured")}
            className={`${styles.pillButton} ${uiFilterType === "Featured" ? styles.pillButtonActive : ""}`}
          >
            Featured
          </button>
          <button
            onClick={() => handleFilterClick("Pre Event")}
            className={`${styles.pillButton} ${uiFilterType === "Pre Event" ? styles.pillButtonActive : ""}`}
          >
            Pre Events
          </button>
          <button
            onClick={() => handleFilterClick("Main Event")}
            className={`${styles.pillButton} ${uiFilterType === "Main Event" ? styles.pillButtonActive : ""}`}
          >
            Events
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "3rem",
          width: "100%",
          padding: "0 1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <EventCarousel events={filteredEvents} isShuffling={isShuffling} activeFilter={activeFilter} />
      </div>
    </section>
  );
}

export default Events;
