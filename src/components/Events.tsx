import type React from "react";
import styles from "./css/Page.module.css";
import { EventCarousel } from "./EventCarousel.tsx";
import type { CarouselEvent } from "./EventCarousel.tsx";

const ACTUAL_EVENTS: CarouselEvent[] = [
  {
    id: "ev-1",
    title: "REVIVE NIGHT",
    category: "Hackathon",
    description: "All teams are given problem statements.",
    prizePool: "15,000",
    organizer: "IEDC",
    time: "15 hrs"
  },
  {
    id: "ev-2",
    title: "Adaptathon",
    category: "Hackathon",
    description: "Teams are given a core prompt to adapt and build upon within unknown constraints.",
    prizePool: "20,000",
    organizer: "ITRAX",
    time: "12 hours"
  },
  {
    id: "ev-3",
    title: "Enduro Edge",
    category: "Workshop",
    description: "A motorsport workshop.",
    prizePool: "TBA",
    organizer: "REAL MECHANICA",
    time: "2 hr"
  },
  {
    id: "ev-4",
    title: "ATV: Build & Race - RaceCraft RC",
    category: "Competition",
    description: "RaceCraft RC is a team-based engineering challenge.",
    prizePool: "16,000",
    organizer: "Spartans House",
    time: "2.5 hours"
  },
  {
    id: "ev-5",
    title: "Scenius 4.0",
    category: "Series of Rounds",
    description: "Scenius 4.0 is a four-round technical challenge.",
    prizePool: "10,000/-",
    organizer: "Nirmana",
    time: "9am-3pm"
  },
  {
    id: "ev-6",
    title: "The Ghost Protocol",
    category: "Series of Rounds",
    description: "The Ghost Protocol is a team-based puzzle event including ciphers and riddles.",
    prizePool: "3000 Rupees",
    organizer: "NDLI RSET",
    time: "2 hours"
  },
  {
    id: "ev-7",
    title: "Traceback",
    category: "Competition",
    description: "TRACEBACK is a narrative-driven digital forensics event.",
    prizePool: "₹3500/-",
    organizer: "CSI-SB RSET",
    time: "4 Hours"
  },
  {
    id: "ev-8",
    title: "Canva workshop (Pre-event)",
    category: "Workshop",
    description: "A 2-hour beginner-friendly Canva workshop (Post it up!).",
    prizePool: "Nil",
    organizer: "Jesus Youth RSET Media",
    time: "2 hours"
  },
  {
    id: "ev-9",
    title: "BOTFORGE",
    category: "Ideathon",
    description: "Botforge kicks off during Techkshetra. Participants will tackle 2 to 3 curated challenges.",
    prizePool: "9,500",
    organizer: "IEEE RAS x NSS",
    time: "4 hrs"
  },
  {
    id: "ev-10",
    title: "Circuit Safari",
    category: "Competition",
    description: "This technical event is a 3-round electronics challenge.",
    prizePool: "₹1600",
    organizer: "IEEE SPS SB RSET",
    time: "2hrs"
  },
  {
    id: "ev-11",
    title: "Circuit Quest",
    category: "Debugging Event",
    description: "Circuit Quest is an exciting technical treasure hunt.",
    prizePool: "2k",
    organizer: "Apptronics",
    time: "2hr"
  },
  {
    id: "ev-12",
    title: "AMONG US 2.0",
    category: "Treasure Hunt",
    description: "Among Us 3.0 is a technology-driven reasoning and cybersecurity experience.",
    prizePool: "3,500",
    organizer: "IEEE CS RSET SBC",
    time: "Half Day"
  },
  {
    id: "ev-13",
    title: "REXTECH GAMELAB",
    category: "Workshop",
    description: "The 4-hour workshop is designed for beginners in game development.",
    prizePool: "Nil",
    organizer: "Vikings",
    time: "4hr"
  },
  {
    id: "ev-14",
    title: "Project Shahi Dossier",
    category: "Technical Treasure Hunt",
    description: "The event opens with a 90-minute investigation in the Mughal court.",
    prizePool: "20,000",
    organizer: "Mughals House",
    time: "4 to 5 hrs"
  },
  {
    id: "ev-15",
    title: "Metro Rethink",
    category: "Problem Solving Challenge",
    description: "This event will be conducted focusing on urban problem solving.",
    prizePool: "6k",
    organizer: "Rajputs House",
    time: "3hrs"
  },
  {
    id: "ev-16",
    title: "Lights Lens Action",
    category: "Cinematography Masterclass",
    description: "Lights • Lens • Action is a 3-hour immersive cinematography masterclass.",
    prizePool: "Nil",
    organizer: "ARYANS",
    time: "2:30-3:00 hrs"
  },
  {
    id: "ev-17",
    title: "CTF",
    category: "CTF",
    description: "Cyberblitz CTF: Crushing Depths is an intense cybersecurity challenge.",
    prizePool: "10,000",
    organizer: "CyberBlitz",
    time: "8 hrs"
  },
  {
    id: "ev-18",
    title: "PAYLOAD",
    category: "Hackathon",
    description: "Project BlackBox: A closed-book, no-internet hardware challenge.",
    prizePool: "15k",
    organizer: "Electronauts",
    time: "12 - 14Hrs"
  },
  {
    id: "ev-19",
    title: "DroniX",
    category: "Workshop",
    description: "DRONIX is a drone workshop covering basics to advanced drone concepts.",
    prizePool: "NA",
    organizer: "Eluxtra X IEEE RAS",
    time: "3 to 4 hours"
  },
  {
    id: "ev-20",
    title: "Hello Friday: Build your own Jarvis",
    category: "Workshop",
    description: "3 hour hands on Conversational AI workshop.",
    prizePool: "Nil",
    organizer: "Articon",
    time: "3 hrs"
  },
  {
    id: "ev-21",
    title: "Mercedes Workshop",
    category: "Workshop",
    description: "A 3 hour interactive session exploring Mercedes engineering.",
    prizePool: "Nil",
    organizer: "Apptronics in association with SAE",
    time: "3hrs max"
  },
  {
    id: "ev-22",
    title: "Capital clash",
    category: "Business Event",
    description: "Capital Clash is a fast-paced business event.",
    prizePool: "6000",
    organizer: "GenSys",
    time: "4 hrs"
  },
  {
    id: "ev-23",
    title: "Standards exhibition",
    category: "Exhibition and awareness",
    description: "Technical exhibition on Standards.",
    prizePool: "Nil",
    organizer: "BIS CIRCUIT BRANCH",
    time: "3hr"
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
