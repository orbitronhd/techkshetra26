import emailjs from "@emailjs/browser";
import type React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import rsetJubileeLogo from "../assets/RSET-jubilee-bw.webp";
import tk26LogoWhite from "../assets/TK26-logo-white.webp";
import styles from "./css/Footer.module.css";

const SERVICE_ID = "service_7amjm59";
const TEMPLATE_ID = "template_8s91pe2";
const PUBLIC_KEY = "Vumn6JFviRmxd_J_M";

export function Footer(): React.JSX.Element {
  const form = useRef<HTMLFormElement>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatusMessage("Sending...");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );
      setStatusMessage("Feedback sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage("Failed to send feedback. Please try again.");
    } finally {
      setTimeout(() => setStatusMessage(""), 3000);
    }
  };

  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Left Column: Logos, Address & Map */}
        <div className={styles.columnLeft}>
          <div className={styles.logoGroup}>
            <div className={styles.mainLogoWrapper}>
              <img
                src={tk26LogoWhite}
                alt="Techkshetra '26 Logo"
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
                  display: "block",
                  margin: "0 auto 1rem 0",
                }}
              />
            </div>

            <div className={styles.subLogos}>
              <img
                src={rsetJubileeLogo}
                alt="RSET Jubilee Logo"
                className={styles.subLogo}
              />
            </div>
          </div>

          <p className={styles.addressText}>
            Rajagiri School of Engineering &amp; Technology
            <br />
            Kochi, Kerala 682039
          </p>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.590214224168!2d76.32759901524383!3d10.05286029281742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c30932828b1%3A0x454817a3ec45b44!2sRajagiri%20School%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1672661555181!5m2!1sen!2sin"
              className={styles.mapIframe}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RSET Location"
            ></iframe>
          </div>
        </div>

        { }
        <div className={styles.columnMiddle}>
          <h3 className={styles.columnHeading}>Quick Links</h3>
          <nav className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/#events" className={styles.navLink}>
              Events
            </Link>
            <Link to="/#gallery" className={styles.navLink}>
              Gallery
            </Link>
            <Link to="/#about" className={styles.navLink}>
              About
            </Link>
          </nav>
        </div>

        { }
        <div className={styles.columnRight}>
          <h3 className={styles.columnHeading}>Contact</h3>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className={styles.inputField}
              />
              <div className={styles.inputGlow}></div>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className={styles.inputField}
              />
              <div className={styles.inputGlow}></div>
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Feedback"
                required
                rows={4}
                className={styles.textAreaField}
              ></textarea>
              <div className={styles.inputGlow}></div>
            </div>

            <button type="submit" className={styles.submitButton}>
              <span className={styles.buttonText}>Send Feedback</span>
              <div className={styles.buttonGlow}></div>
            </button>
            {statusMessage && (
              <p className={styles.statusMessage}>{statusMessage}</p>
            )}
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.creditsText}>
          Developed with ❤️ and tokens by the TK'26 website team
        </p>
        <p className={styles.copyrightText}>© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}
