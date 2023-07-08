import React, { forwardRef } from "react";

import Section from "./Section";
import IMG9 from "../assets/Picture9.jpg";
import IMG34 from "../assets/Picture34.jpg";
import IMG47 from "../assets/Picture47.jpg";
import IMG82 from "../assets/Picture82.jpg";
import IMG89 from "../assets/Picture89.jpg";

import {
  mountainTrees,
  mountainGrassesAndSedges,
  mountainShrubs,
  medicinalHerbs,
  wildOrnamentals,
} from "../data/FloraData";

const FloraSection = forwardRef((props, ref) => {
  const { clickedCard } = props;
  return (
    <>
      {clickedCard === "trees" ? (
        <Section
          sectionImage={IMG9}
          sectionHeading={"Mountain Trees"}
          sectionData={mountainTrees}
          sectionId="mountain-trees"
          sectionClassName="flora-section"
          ref={ref}
        />
      ) : (
        ""
      )}

      {clickedCard === "shrubs" ? (
        <Section
          sectionImage={IMG34}
          sectionHeading={"Mountain Shrubs"}
          sectionData={mountainShrubs}
          sectionId="mountain-shrubs"
          sectionClassName="flora-section"
          ref={ref}
        />
      ) : (
        ""
      )}

      {clickedCard === "herbs" ? (
        <Section
          sectionImage={IMG47}
          sectionHeading={"Medicinal Herbs"}
          sectionData={medicinalHerbs}
          sectionId="medicinal-herbs"
          sectionClassName="flora-section"
          ref={ref}
        />
      ) : (
        ""
      )}

      {clickedCard === "ornamentals" ? (
        <Section
          sectionImage={IMG82}
          sectionHeading={"Wild Ornamentals"}
          sectionData={wildOrnamentals}
          sectionId="wild-ornamentals"
          sectionClassName="flora-section"
          ref={ref}
        />
      ) : (
        ""
      )}
      {clickedCard === "grass" ? (
        <Section
          sectionImage={IMG89}
          sectionHeading={"Mountain Grasses and Sedges"}
          sectionData={mountainGrassesAndSedges}
          sectionId="grasses"
          sectionClassName="flora-section"
          ref={ref}
        />
      ) : (
        ""
      )}
    </>
  );
});

export default FloraSection;
