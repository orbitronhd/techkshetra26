import type React from "react";
import styles from "./css/Page.module.css";
import { EventCarousel } from "./EventCarousel.tsx";
import type { CarouselEvent } from "./EventCarousel.tsx";

const ACTUAL_EVENTS: CarouselEvent[] = [
  {
    id: "ev-1",
    title: "REVIVE NIGHT",
    category: "Hackathon",
    details: "Organized by IEDC & IIC",
  },
  {
    id: "ev-2",
    title: "Adaptathon",
    category: "Hackathon",
    details: "Organized by iTrax (IT)",
  },
  {
    id: "ev-3",
    title: "Enduro Edge",
    category: "Workshop",
    details: "Organized by Real Mechanica (ME)",
  },
  {
    id: "ev-4",
    title: "ATV: Build & Race - RaceCraft RC",
    category: "Competition",
    details: "Organized by Spartans House",
  },
  {
    id: "ev-5",
    title: "Scenius 4.0",
    category: "Series of Rounds",
    details: "Organized by NIRMANA with BIS (CE)",
  },
  {
    id: "ev-6",
    title: "The Ghost Protocol",
    category: "Series of Rounds",
    details: "Organized by NDLI Club",
  },
  {
    id: "ev-7",
    title: "Traceback",
    category: "Competition",
    details: "Organized by CSI SB",
  },
  {
    id: "ev-8",
    title: "Canva workshop (Pre-event)",
    category: "Workshop",
    details: "Organized by Jesus Youth",
  },
  {
    id: "ev-9",
    title: "BOTFORGE",
    category: "Ideathon",
    details: "Organized by IEEE RAS NSS",
  },
  {
    id: "ev-10",
    title: "Circuit Safari",
    category: "Competition",
    details: "Organized by IEEE SPS SB",
  },
  {
    id: "ev-11",
    title: "Circuit Quest",
    category: "Debugging Event",
    details: "Organized by Apptronics (AEI)",
  },
  {
    id: "ev-12",
    title: "AMONG US 2.0",
    category: "Treasure Hunt",
    details: "Organized by IEEE Computer Society",
  },
  {
    id: "ev-13",
    title: "REXTECH GAMELAB",
    category: "Workshop",
    details: "Organized by Vikings House",
  },
  {
    id: "ev-14",
    title: "Project Shahi Dossier",
    category: "Technical Treasure Hunt",
    details: "Organized by Mughals House",
  },
  {
    id: "ev-15",
    title: "Metro Rethink",
    category: "Problem Solving Challenge",
    details: "Organized by Rajputs House",
  },
  {
    id: "ev-16",
    title: "Lights Lens Action",
    category: "Cinematography Masterclass",
    details: "Organized by Aryans House",
  },
  {
    id: "ev-17",
    title: "CTF",
    category: "CTF",
    details: "Organized by Cyberblitz (CSE)",
  },
  {
    id: "ev-18",
    title: "PAYLOAD",
    category: "Hackathon",
    details: "Organized by Electronauts (ECE)",
  },
  {
    id: "ev-19",
    title: "DroniX",
    category: "Workshop",
    details: "Organized by RAS in association with Eluxtra (EEE)",
  },
  {
    id: "ev-20",
    title: "Hello Friday: Build your own Jarvis",
    category: "Workshop",
    details: "Organized by Articon (AD)",
  },
  {
    id: "ev-21",
    title: "Mercedes Workshop",
    category: "Workshop",
    details: "Organized by SAE & Apptronics (ME & AEI)",
  },
  {
    id: "ev-22",
    title: "Capital clash",
    category: "Business Event",
    details: "Organized by Gensys club (CSBS)",
  },
  {
    id: "ev-23",
    title: "Standards exhibition",
    category: "Exhibition and awareness",
    details: "Organized by BIS Circuit branch",
  },
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
