import React from "react";
import contactImage from "../assets/images/about/contact1.jpg";
import logo from "../assets/images/about/logo.jpg";
import HeaderContact from "./HeaderContact";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <HeaderContact />
      <div className="container mx-auto flex flex-wrap py-6">
        {/* Image de contact */}
        <img
          className="w-full mb-6"
          src={contactImage}
          alt="Image de contact"
        />

        {/* Formulaire de contact */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Nous Contacter
          </h2>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nom complet
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Votre nom complet"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Adresse Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Votre adresse email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                id="message"
                placeholder="Votre message"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>

        {/* Carte d'information */}
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Informations de Contact
            </h2>
            <div className="flex items-center mb-4">
              <img
                className="h-16 w-16 rounded-full object-cover"
                src={logo}
                alt="Image de contact"
              />
              <div className="ml-4">
                <p className="text-lg font-semibold">NO WAHALA HOUSE</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Adresse :Akpakpa,Rue 1500, Cotonou <br />
              Téléphone : +229 52 46 03 03 <br />
              Email : hodecoth@gmail.com
            </p>
            <div className="flex justify-center">
              <a
                href="https://maps.app.goo.gl/NLR4HVvo9gkNUr1M6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Localisation
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <footer className="w-full bg-blue-500 text-white text-center py-4 w-full">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Contact;
