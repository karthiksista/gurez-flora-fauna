import React from "react";
// import PPTXCompose from "pptx-compose";
// import pptt from "./assets/mtp.pptx";
import CustomNavbar from "./components/CustomNavbar";
import HeroSection from "./components/HeroSection";
import FloraSection from "./components/FloraSection";
import FaunaSection from "./components/FaunaSection";
import Footer from "./components/Footer";
// const PPTtoJSON = require("ppt-to-json");
const App = () => {
  // const composer = new PPTXCompose();
  // const PPTXCompose = require("pptx-compose").default;
  // useEffect(async () => {
  //   const pptx = await PPTXCompose.toJSON(pptt);
  // }, []);

  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      <FloraSection />
      <FaunaSection />
      <Footer />
    </div>
  );
};

export default App;
