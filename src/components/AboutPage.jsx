import React from "react";
import Carousel from "./Carousel"; // Composant du carrousel
import logo from "../assets/images/about/logo.jpg";
import regle1 from "../assets/images/regle1.jpg";
import regle2 from "../assets/images/regle2.png";
import regle3 from "../assets/images/regle3.png";
import chantier from "../assets/images/construction.png";
import villa2 from "../assets/images/villa2.jpg";
import villa1 from "../assets/images/villa1.jpg";
import HeaderAbout from "./HeaderAbout";

import Footer from "./Footer";

const AboutPage = () => {
  return (
    <div>
      <HeaderAbout />
      <Carousel />
      {/* Section Mission et Vision */}
      <section id="about" className="py-16">
        <h2 className="text-4xl font-bold mb-8 mt-4 text-center">
          A propos de nous
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={logo}
              alt="Image Gauche"
              className="w-medium h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">Mission et Vision</h2>
            <div className="animate-fade-in">
              <p className="text-gray-700 mb-4">
                Notre mission est de simplifier et d'optimiser chaque étape de
                votre projet immobilier. Nous nous engageons à fournir des
                solutions complètes et efficaces, allant de l'obtention de devis
                précis pour la clôture de votre parcelle, à l'achat de matériaux
                de construction de qualité, à la recherche de la parcelle
                idéale, et à la concrétisation de votre projet de construction
                sur votre propre terrain. Nous visons à être votre partenaire de
                confiance, vous offrant des services personnalisés et
                professionnels pour répondre à vos besoins spécifiques.
              </p>
              <p className="text-gray-700 mb-4">
                Notre vision est de devenir le leader reconnu dans le domaine
                des services immobiliers, en offrant une plateforme intégrée qui
                simplifie l'accès aux services de clôture, d'approvisionnement
                en matériaux de construction, de recherche de parcelles et de
                construction. En favorisant l'innovation et l'excellence dans
                nos services, nous visons à élever les standards de l'industrie
                et à être le choix numéro un pour les particuliers et les
                professionnels cherchant à concrétiser leurs projets immobiliers
                en toute confiance et facilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Autres Entreprises */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nos Images
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cadre d'une autre entreprise */}
            <div className="">
              <img
                src={regle1}
                alt="règle1"
                className=""
              />
            </div>
            <div className="">
              <img
                src={regle2}
                alt="règle2"
                className=""
              />
            </div><div className="">
              <img
                src={regle3}
                alt="règle3"
                className=""
              />
            </div><div className="">
              <img
                src={chantier}
                alt="image de chantier"
                className=""
              />
            </div><div className="">
              <img
                src={villa1}
                alt="image villa"
                className=""
              />
            </div><div className="">
              <img
                src={villa2}
                alt="image villa"
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-blue-500 text-white text-center py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
