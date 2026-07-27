import type React from "react";
import styles from "./css/Page.module.css";
import { EventCarousel } from "./EventCarousel.tsx";
import type { CarouselEvent } from "./EventCarousel.tsx";
import defaultEventImage from "../assets/techkshetra_logo.png";

// Import event images
import imgAdaptathon from "../assets/events/ADAPTATHON.png";
import imgEnduro from "../assets/events/ATV Build&Race.png";
import imgBotforge from "../assets/events/botforge.jpg";
import imgCrushingDepths from "../assets/events/Crushing Depths CTF.jpeg";
import imgDronix from "../assets/events/DRONIX.jpg";
import imgGhostProtocol from "../assets/events/Ghost_Protocol.png";
import imgHelloFriday from "../assets/events/Hello Friday.jpg";
import imgLightsLensAction from "../assets/events/LightLensAction.jpg";
import imgMercedesWorkshop from "../assets/events/mercedes workshop.jpeg";
import imgMetroRethink from "../assets/events/Metro Rethink.png";
import imgProjectBlackbox from "../assets/events/Payload_Electronauts.png";
import imgPostItUp from "../assets/events/Post it up poster.jpg";
import imgRextech from "../assets/events/Rextech.png";
import imgScenius from "../assets/events/Scenious 4.0 .png";

const ACTUAL_EVENTS: CarouselEvent[] = [
  {
    id: "ev-1",
    title: "REVIVE NIGHT",
    category: "Hackathon",
    description: "Teams analyze a given failed startup case, diagnose why it failed, and build an MVP (Minimum Viable Product) addressing that failure",
    prizePool: "₹15000/-",
    organizer: "IEDC",
    time: "TBD",
    registrationFee: "₹249/-",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-2",
    title: "Adaptathon",
    category: "Hackathon",
    description: "Teams get handed a live codebase every 2 hours and must rapidly decode, adapt, and push it forward before passing it on. It's a 12-hour test of collaboration, adaptability, and code comprehension — not just building, but building together.",
    prizePool: "₹10000/-",
    organizer: "ITRAX",
    time: "TBD",
    registrationFee: "₹150/-",
    imageUrl: imgAdaptathon
  },
  {
    id: "ev-3",
    title: "ENDURO EDGE",
    category: "Workshop",
    description: "A motorsport workshop",
    prizePool: "Nil",
    organizer: "REAL MECHANICA",
    time: "TBD",
    registrationFee: "₹400/-",
    imageUrl: imgEnduro
  },
  {
    id: "ev-4",
    title: "RaceCraft RC",
    category: "Competition",
    description: "Team-based engineering competition where 4-member teams design and build RC race cars per given specs, then compete on a multi-terrain obstacle track testing speed, stability, and durability",
    prizePool: "₹8000/-",
    organizer: "Spartans",
    time: "TBD",
    registrationFee: "₹500/- (Per Team of 4)",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-5",
    title: "Scenius 4.0",
    category: "Series of Rounds",
    description: "Four-round technical competition held in association with the Bureau of Indian Standards (BIS), featuring a standards quiz, standard creation challenge, technical treasure hunt, and bridge-building competition.",
    prizePool: "10,000/-",
    organizer: "Nirmana",
    time: "TBD",
    registrationFee: "₹100/-",
    imageUrl: imgScenius
  },
  {
    id: "ev-6",
    title: "The Ghost Protocol",
    category: "Series of Rounds",
    description: "Team-based, story-driven puzzle event where participants solve a sequence of interconnected clues to progress through a mission narrative toward a final challenge. Puzzles span cryptography (Atbash, Caesar cipher, and similar techniques), C programming tasks, and logic circuit-based challenges",
    prizePool: "₹3000/-",
    organizer: "NDLI RSET",
    time: "TBD",
    registrationFee: "₹150/-",
    imageUrl: imgGhostProtocol
  },
  {
    id: "ev-7",
    title: "Traceback",
    category: "Competition",
    description: "TRACEBACK is a narrative-driven technical escape room by the CSI Student Branch where 2-member teams act as digital forensic analysts, using OSINT, cipher decoding, steganography, and API-based challenges to solve a campus-wide mystery — no coding experience required.",
    prizePool: "₹3500/-",
    organizer: "CSI-SB RSET",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-8",
    title: "POST IT UP!",
    category: "Workshop",
    description: "TBD",
    prizePool: "Nil",
    organizer: "Jesus Youth RSET",
    time: "TBD",
    registrationFee: "NIL",
    imageUrl: imgPostItUp
  },
  {
    id: "ev-9",
    title: "BOTFORGE",
    category: "Ideathon",
    description: "BotForge is a ideathon focused on technology-driven social impact, where teams tackle curated problem statements and pitch conceptual solutions to a judging panel.",
    prizePool: "₹5000/-",
    organizer: "IEEE RAS x NSS",
    time: "TBD",
    registrationFee: "₹150/-",
    imageUrl: imgBotforge
  },
  {
    id: "ev-10",
    title: "Circuit Safari",
    category: "Competition",
    description: "This is a 3-round elimination technical competition for teams of 3, testing Electronics and Engineering knowledge through a technical crossword, K-map problem solving and a final circuit-building round using Boolean laws.",
    prizePool: "₹1600/-",
    organizer: "IEEE SPS SB RSET",
    time: "TBD",
    registrationFee: "₹180/-",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-11",
    title: "Circuit Quest",
    category: "Debugging Event",
    description: "Technical treasure hunt for teams of 2-4 members, testing electronics and instrumentation knowledge through challenge stations covering circuit debugging, component identification, logic puzzles, sensor recognition, and binary/hex decoding.",
    prizePool: "₹2000/-",
    organizer: "Apptronics",
    time: "TBD",
    registrationFee: "₹300/-",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-12",
    title: "AMONG US 3.0",
    category: "Treasure Hunt",
    description: "Among Us-inspired campus challenge combining coding, cybersecurity, debugging, and QR-based missions, where teams earn Crew Points while secret Impostor Teams mislead others until an Emergency Meeting vote reveals them.",
    prizePool: "₹3,500/-",
    organizer: "IEEE CS RSET SBC",
    time: "TBD",
    registrationFee: "₹120/-",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-13",
    title: "REXTECH GAMELAB",
    category: "Workshop",
    description: "4-hour beginner-friendly workshop in collaboration with Rextech Studios, Infopark Kochi, covering the game development industry, career paths, and a hands-on Unity session where participants build a simple 2D game using C# scripting, physics, and collision detection.",
    prizePool: "Nil",
    organizer: "Vikings",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgRextech
  },
  {
    id: "ev-14",
    title: "Project Shahi Dossier",
    category: "Technical Treasure Hunt",
    description: "TBD",
    prizePool: "₹10,000/-",
    organizer: "Mughals",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-15",
    title: "Metro Rethink",
    category: "Problem Solving Challenge",
    description: "TBD",
    prizePool: "₹6000/-",
    organizer: "Rajputs",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgMetroRethink
  },
  {
    id: "ev-16",
    title: "Lights Lens Action",
    category: "Cinematography Masterclass",
    description: "TBD",
    prizePool: "Nil",
    organizer: "ARYANS",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgLightsLensAction
  },
  {
    id: "ev-17",
    title: "CRUSHING DEPTHS",
    category: "CTF",
    description: "TBD",
    prizePool: "₹10,000/-",
    organizer: "CyberBlitz",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgCrushingDepths
  },
  {
    id: "ev-18",
    title: "PROJECT BLACKBOX",
    category: "Hackathon",
    description: "TBD",
    prizePool: "₹15000/-",
    organizer: "Electronauts",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgProjectBlackbox
  },
  {
    id: "ev-19",
    title: "DRONIX",
    category: "Workshop",
    description: "TBD",
    prizePool: "NA",
    organizer: "Eluxtra x IEEE RAS",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgDronix
  },
  {
    id: "ev-20",
    title: "Hello Friday: Build your own Jarvis",
    category: "Workshop",
    description: "TBD",
    prizePool: "Nil",
    organizer: "Articon",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgHelloFriday
  },
  {
    id: "ev-21",
    title: "Mercedes Workshop",
    category: "Workshop",
    description: "TBD",
    prizePool: "Nil",
    organizer: "Apptronics x SAE",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: imgMercedesWorkshop
  },
  {
    id: "ev-22",
    title: "CAPITAL CLASH",
    category: "Business Event",
    description: "TBD",
    prizePool: "₹3000/-",
    organizer: "GenSys",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: defaultEventImage
  },
  {
    id: "ev-23",
    title: "Standards exhibition",
    category: "Exhibition and awareness",
    description: "TBD",
    prizePool: "Nil",
    organizer: "BIS CIRCUIT BRANCH",
    time: "TBD",
    registrationFee: "TBD",
    imageUrl: defaultEventImage
  }
];

export function Events(): React.JSX.Element {
  return (
    <section id="events" style={{ padding: "4rem 0", contentVisibility: "auto", containIntrinsicSize: "800px" }}>
      <div className={styles.contentBody} style={{ padding: "0 2rem" }}>
        <h2 className={styles.heading}>Events</h2>
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
        <EventCarousel events={ACTUAL_EVENTS} />
      </div>
    </section>
  );
}

export default Events;
