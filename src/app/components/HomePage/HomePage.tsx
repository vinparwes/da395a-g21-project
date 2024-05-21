
import "./HomePage.css";
import NavHeader from "../Containers/NavHeader/NavHeader";
import NavFooter from "../Containers/NavFooter/NavFooter";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Content from "../Content/Content";
import OverlayPicker from "../LandingPage/OverlayPicker";

function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal)
    console.log("IS OPEN MODAL TRUE? ", openModal)
  }
  

  if (!openModal) {
    return (
      <main>
        <OverlayPicker setOpenModal={toggleModal} />
      </main>
    );
  }
  return (
    <>
      <div className="container mx-auto px-20">
        <NavHeader setOpenModal={toggleModal} />
        <Content />
        <NavFooter />
      </div>
    </>
  );
}



export default HomePage;

/* Till stjärnona som glittrar */
/*
<svg id="one" width="100" height="100" viewBox="0 0 100 100">
                  <g id="copy-1" className="group">
                    <g className="large">
                      <path
                        id="large"
                        d="M41.25,40 L42.5,10 L43.75,40 L45,41.25 L75,42.5 L45,43.75 L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z"
                        fill="white"
                      />
                    </g>
                    <g className="large-2" transform="rotate(45)">
                      <use xlinkHref="#large" />
                    </g>
                    <g className="small">
                      <path
                        id="small"
                        d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75 L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z"
                        fill="white"
                      />
                    </g>
                  </g>
                </svg>

*/