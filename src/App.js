import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import CustomNavbar from "./components/CustomNavbar";
import HeroSection from "./components/HeroSection";
import FloraSection from "./components/FloraSection";
import FaunaSection from "./components/FaunaSection";
import Footer from "./components/Footer";
import ImgOverlayExample from "./components/ImgOverlay";

const App = () => {
  const [clickedCard, setClickedCard] = useState("");

  const ref = React.useRef();
  const scrollToTopRef = React.useRef();

  const [showBtn, setShowBtn] = useState("myBtn none");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    // document.body.scrollTop = 70;
    // document.documentElement.scrollTop = 70;
    console.log("TOPPP");
    const topElem = scrollToTopRef;
    setTimeout(() => {
      topElem?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }, 200);
  }

  const showSelected = (selected) => {
    setClickedCard(selected);
    const elmnt = ref;
    // if (elmnt && elmnt.current) {
    console.log("HERE IN SHOW", selected);
    setTimeout(() => {
      elmnt?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 200);

    // }
  };

  return (
    <div>
      <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
        {/* Top */}
      </button>

      <CustomNavbar />
      <HeroSection />
      <ImgOverlayExample cbFunc={showSelected} ref={scrollToTopRef} />
      <FloraSection clickedCard={clickedCard} ref={ref} />
      <FaunaSection clickedCard={clickedCard} />
      <Footer />
    </div>
  );
};

export default App;
