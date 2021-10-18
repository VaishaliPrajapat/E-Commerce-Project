import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import HangedClothes from "../static/HangedClothes.jpeg";
import Jacket from "../static/Jacket.jpg";
import "../scss/about.scss";

const About = () => {
  return (
    <div className="about_main_container">
      <div className="about_container_1">
        <img src={HangedClothes} alt="Hanged clothes" />
        <LoremIpsum className="description" avgSentencesPerParagraph={20} />
      </div>

      <div className="about_container_2">
        <img src={Jacket} alt="Hanged clothes" />
        <LoremIpsum className="description" avgSentencesPerParagraph={20} />
      </div>
    </div>
  );
};

export default About;
