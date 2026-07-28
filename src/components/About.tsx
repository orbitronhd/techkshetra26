import type React from "react";
import styles from "./css/About.module.css";
import logoImage from "../assets/TK26-icon.webp";
import collegeImage from "../assets/RSET-photo.webp";

export function About(): React.JSX.Element {
  return (
    <section id="about" className={styles.aboutSection}>
      { }
      <div className={styles.contentBlock}>
        <div className={styles.imageWrapper}>
          <img
            src={logoImage}
            alt="Techkshetra'26 Logo"
            className={`${styles.image} ${styles.tkLogo}`}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>About Techkshetra</h2>
          <p className={styles.textContent}>
            The biennial technical festival of Rajagiri School of Engineering
            and Technology, Kakkanad. Kerala is a treasure trove of a wide range
            of events that ring together students of all fields for a day like
            no other. With a wide variety of events that encompass every
            wavelength and aspect of a student, participants get a chance to
            witness and be part of something extraordinary. Not to mention, the
            cultural programs that make up a large part of the event.
          </p>
        </div>
      </div>

      { }
      <div className={styles.contentBlock}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Our College</h2>
          <p className={styles.textContent}>
            Rajagiri School of Engineering & Technology (RSET), located in the
            vibrant city of Kochi, is an institution dedicated to excellence in
            technical education and research. We are committed to fostering a
            new generation of engineers and innovators equipped with the skills
            and ethical values to make a significant impact on the world.
          </p>
        </div>
        <div className={styles.collegeImageWrapper}>
          <img
            src={collegeImage}
            alt="Our College"
            className={`${styles.image} ${styles.collegeImage}`}
          />
        </div>
      </div>
    </section>
  );
}
