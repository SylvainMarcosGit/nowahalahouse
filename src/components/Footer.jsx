import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo2 from "../assets/images/about/logo2.jpg";

import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-500 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo2} alt="Logo Footer" className="w-32 h-auto" />
        </div>

        {/* Valeurs */}
        <div className="mt-4 sm:mt-0">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
            Nos valeurs : E.D.I.F.I.E.R
          </h2>
          <p className="mb-4 text-2xl flex flex-wrap">
            <span className="font-bold mr-1">E</span>mpathie,
            <span className="font-bold mr-1">D</span>iligence,
            <span className="font-bold mr-1">I</span>ntégrité,
            <span className="font-bold mr-1">F</span>idélité,
            <span className="font-bold mr-1">I</span>nnovation,
            <span className="font-bold mr-1">E</span>xcellence,
            <span className="font-bold mr-1">R</span>esponsabilité
          </p>
          <br />{" "}
          <p className="mt-4 ">
            &copy; {new Date().getFullYear()} NO WAHALA HOUSE. Réalisé par
            Sylvain ZOSSOU.
          </p>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center sm:justify-end mt-4 sm:mt-0">
          <a
            href="https://www.facebook.com/entreprise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-2"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://fr.linkedin.com/posts/coth-hode-23b0a4241_nowahalahouse-activity-7214538425033465856-i-m9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/entreprise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-2"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFIIt0SF5p-fLzmdHLkFqGQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
