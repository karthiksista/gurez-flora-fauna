import React, { useState, useRef } from "react";
// import PPTXCompose from "pptx-compose";
// import pptt from "./assets/mtp.pptx";
import CustomNavbar from "./components/CustomNavbar";
import HeroSection from "./components/HeroSection";
import FloraSection from "./components/FloraSection";
import FaunaSection from "./components/FaunaSection";
import Footer from "./components/Footer";
import ImgOverlayExample from "./components/ImgOverlay";
// const PPTtoJSON = require("ppt-to-json");
const App = () => {
  // const composer = new PPTXCompose();
  // const PPTXCompose = require("pptx-compose").default;
  // useEffect(async () => {
  //   const pptx = await PPTXCompose.toJSON(pptt);
  // 22 , 39,

  // }, []);
  const scrollToRef = useRef(null);
  const [clickedCard, setClickedCard] = useState("");

  const showSelected = (selected) => {
    console.log("HERE IN SHOW", selected);
    setClickedCard(selected);
    window.scrollTo({
      top: scrollToRef.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  //   scrollToRef?.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      <ImgOverlayExample cbFunc={showSelected} scrollToRef={scrollToRef} />
      <FloraSection scrollToRef={scrollToRef} clickedCard={clickedCard} />
      <FaunaSection clickedCard={clickedCard} scrollToRef={scrollToRef} />
      <Footer />
    </div>
  );
};

export default App;
