import type React from "react";
import { useState } from "react";
import styles from "./css/Page.module.css";
import cardStyles from "./css/Tshirts.module.css";
import tshirtImage from "../assets/tshirt.png";

export function Tshirts(): React.JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  return (
    <section
      id="tshirts"
      className={styles.contentBody}
      style={{ padding: "4rem 2rem" }}
    >
      <h2 className={styles.heading}>Tshirts</h2>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}>
          <div className={cardStyles.cardContainer}>
            <div
              className={`${cardStyles.cardInner} ${isFlipped ? cardStyles.isFlipped : ""}`}
              onClick={() => setIsFlipped(!isFlipped)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setIsFlipped(!isFlipped);
              }}
            >
              <div className={`${cardStyles.cardFace} ${cardStyles.cardFront}`}>
                <div className={cardStyles.imageContainer}>
                  <img src={tshirtImage} alt="Techkshetra '26 T-Shirt" className={cardStyles.image} />
                  <span className={cardStyles.detailsLabel}>Click for details</span>
                </div>
              </div>

              <div className={`${cardStyles.cardFace} ${cardStyles.cardBack}`}>
                <h3 className={cardStyles.backTitle}>Official Merchandise</h3>
                <p className={cardStyles.backDetails}>
                  Grab your official Techkshetra '26 T-Shirts and show your spirit!
                  <br /><br />
                  Sizes Available: S, M, L, XL, XXL
                </p>
                
                <button 
                  type="button" 
                  className={cardStyles.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWidget(true);
                  }}
                >
                  Pre-order Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: "1 1 300px" }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
            Official Merchandise
          </h3>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            Grab your official Techkshetra '26 T-Shirts and show your spirit!
            Stay tuned for the unveiling of our exclusive designs. Available for
            pre-order soon.
          </p>
        </div>
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
