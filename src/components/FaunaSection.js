import React, { forwardRef } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import faunaimg from "../assets/high-tea-with-elephants-nkjtRIMCcTE-unsplash.jpg";
import IMG120 from "../assets/Picture120.jpg";
import IMG145 from "../assets/Picture145.jpg";

import { faunaBirds, faunaMammals } from "../data/FaunaData";
import Section from "./Section";
const FaunaSection = forwardRef((props, ref) => {
  const { clickedCard } = props;

  return (
    <>
      {clickedCard === "birds" ? (
        <Section
          sectionImage={IMG120}
          sectionHeading={"Fauna: Birds"}
          sectionData={faunaBirds}
          sectionId="birds"
          sectionClassName="fauna-section"
          ref={ref}
        />
      ) : (
        ""
      )}
      {clickedCard === "mammals" ? (
        <Section
          sectionImage={IMG145}
          sectionHeading={"Fauna: Mammals"}
          sectionData={faunaMammals}
          sectionId="mammals"
          sectionClassName="fauna-section"
          ref={ref}
        />
      ) : (
        ""
      )}
    </>
  );
});

export default FaunaSection;
