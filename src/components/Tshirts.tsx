import type React from "react";
import { useState } from "react";
import styles from "./css/Page.module.css";
import cardStyles from "./css/Tshirts.module.css";
import tshirtImage from "../assets/TK26-shirt.png";

export function Tshirts(): React.JSX.Element {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <section
      id="tshirts"
      className={styles.contentBody}
      style={{ padding: "4rem 2rem" }}
    >
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <h2 className={cardStyles.tshirtHeading}>OFFICIAL MERCHANDISE</h2>
        </div>

        <img
          src={tshirtImage}
          alt="Techkshetra '26 T-Shirt"
          className={cardStyles.hoveringImage}
          style={{ marginTop: "-3rem", marginBottom: "-4rem" }}
        />
        
        <button 
          type="button" 
          className={cardStyles.actionButton}
          disabled
          style={{ marginTop: "0" }}
        >
          PRE-ORDER SOON
        </button>
      </div>

      {showWidget && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.8)",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            position: "relative",
            width: "90%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}>
            <button 
              onClick={() => setShowWidget(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#000",
                zIndex: 10
              }}
              aria-label="Close widget"
            >
              &times;
            </button>
            <iframe 
              src="https://konfhub.com/widget/techkshetra-0f9d3997?desc=false&secondaryBg=ffffff&ticketBg=ffffff&borderCl=ffffff&bg=ffffff&fontColor=000000&ticketCl=000000&btnColor=7ed321&fontFamily=Hind&borderRadius=20&widget_type=quick&screen=2&tickets=114042&ticketId=114042%7C0" 
              id="konfhub-widget" 
              title="Register for Techkshetra" 
              width="100%" 
              height="500" 
              allow="payment"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
