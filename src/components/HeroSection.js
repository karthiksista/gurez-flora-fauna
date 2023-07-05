import React from "react";

import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <Container
          style={{
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            display: "flex",
            height: "100%",
          }}
        >
          <h3
            style={{
              color: "#cba265ff",
              width: "40%",
              marginTop: "40px",
              lineHeight: "1.95em",
              display: "flex",
              alignItems: "center",
            }}
            data-aos="fade-right"
          >
            Gurez flora is a captivating symphony of nature's beauty, inviting
            visitors to immerse themselves in its enchanting botanical wonders.
            Nestled in the Himalayas, boasts a diverse and enchanting flora &
            fauna
          </h3>
          {/* <div class="scroll-down">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div> */}

          {/* <div
            className="dem"
            style={{
              width: "2em",
              height: "2em",
              backgroundColor: "transparent",
              zIndex: "80",
              bottom: "25px",
              position: "absolute",
              borderWidth: "0 0.25em 0.25em 0",
              borderColor: "antiquewhite",
              animation: "scrolldown 1.2s ease-in-out infinite 0.15s",
              borderStyle: "solid",
            }}
          ></div>
          <div
            className="dem"
            style={{
              width: "2em",
              height: "2em",
              backgroundColor: "transparent",
              zIndex: "80",
              bottom: "25px",
              position: "absolute",
              borderWidth: "0 0.25em 0.25em 0",
              borderColor: "antiquewhite",
              animation: "scrolldown 1.2s ease-in-out infinite 0.15s",
              borderStyle: "solid",
            }}
          ></div> */}

          {/* Add your content here */}
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
