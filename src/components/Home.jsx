import React from "react";
import Diasporama from "./Diasporama";
import { Link } from "react-router-dom";
import ContactSection from "./ContactSection";
import TestimonialsSection from "./TestimonialsSection";
import ServicesSection from "./ServicesSection";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <Diasporama />
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          NO WAHALA HOUSE, Construire Chic et sans tracas
        </h2>
        <p className="text-lg text-gray-700">
          Nous sommes ravis de vous accueillir.
        </p>
        <Link
          to="#services"
          className="mt-4 m-6 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
        >
          Découvrez nos services
        </Link>
      </div>
      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <section id="about" className="w-full bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="mt-8 text-3xl font-bold mb-8">Qui sommes-nous ?</h2>
          <p className="text-gray-700">
            Notre entreprise offre une gamme complète de services pour faciliter
            vos projets immobiliers. Obtenez rapidement des devis précis pour la
            clôture de votre parcelle, achetez des matériaux de construction de
            qualité à des prix compétitifs, et trouvez facilement la parcelle
            idéale pour votre projet. Si vous possédez déjà un terrain, nous
            vous accompagnons de la conception à la construction de votre
            maison, vous permettant ainsi de concrétiser votre rêve immobilier
            en toute tranquillité.
          </p>
          <Link
            to="/about"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
          >
            En savoir plus sur nous
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="w-full bg-blue-500 text-white text-center py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
