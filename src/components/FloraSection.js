import React from "react";

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

const FloraSection = () => {
  return (
    <>
      <Section
        sectionImage={IMG9}
        sectionHeading={"Mountain Trees"}
        sectionData={mountainTrees}
        sectionId="mountain-trees"
        sectionClassName="flora-section"
      />
      <Section
        sectionImage={IMG34}
        sectionHeading={"Mountain Shrubs"}
        sectionData={mountainShrubs}
        sectionId="mountain-shrubs"
        sectionClassName="flora-section"
      />
      <Section
        sectionImage={IMG47}
        sectionHeading={"Medicinal Herbs"}
        sectionData={medicinalHerbs}
        sectionId="medicinal-herbs"
        sectionClassName="flora-section"
      />
      <Section
        sectionImage={IMG82}
        sectionHeading={"Wild Ornamentals"}
        sectionData={wildOrnamentals}
        sectionId="wild-ornamentals"
        sectionClassName="flora-section"
      />
      <Section
        sectionImage={IMG89}
        sectionHeading={"Mountain Grasses and Sedges"}
        sectionData={mountainGrassesAndSedges}
        sectionId="grasses"
        sectionClassName="flora-section"
      />
    </>
  );
};

export default FloraSection;
