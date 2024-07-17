import React from "react";
import { motion } from "framer-motion";
import materiel from "../assets/images/about/materiel.jpg";
import maison from "../assets/images/about/maison.jpg";
import cloture from "../assets/images/about/cloture.jpg";
import parcelle from "../assets/images/about/parcelle.jpg";





const ServicesSection = () => {
  return (
    <section id="services" className="w-full mt-6 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mt-8 mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={cloture}
              alt="Service 1"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">NO WAHALA CLOTURE</h3>
            <p className="text-gray-700">
            Obtenez facilement un devis pour la clôture de votre parcelle avec notre service efficace et professionnel.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={materiel}
              alt="service 2"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">NO WAHALA APPRO</h3>
            <p className="text-gray-700">
            Simplifiez vos projets de construction en achetant des matériaux de qualité supérieure à des prix compétitifs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={parcelle}
              alt="Service 3"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">NO WAHALA PARCELLES</h3>
            <p className="text-gray-700">
            Besoin d'une parcelle pour votre projet ? Nous vous aidons à trouver le terrain idéal qui correspond à vos besoins.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <img
              src={maison}
              alt="services 4"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">BENIN-NOWAHALAHOUSE </h3>
            <p className="text-gray-700">
            Vous possédez déjà une parcelle ? Laissez-nous vous aider à concrétiser votre rêve de construction avec notre expertise et notre soutien dédié.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
