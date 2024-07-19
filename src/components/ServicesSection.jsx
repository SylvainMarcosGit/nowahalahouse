import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import materiel from "../assets/images/about/materiel.jpg";
import maison from "../assets/images/about/maison.jpg";
import cloture from "../assets/images/about/cloture.jpg";
import parcelle from "../assets/images/about/parcelle.jpg";

const services = [
  { id: 1, image: cloture, title: "NO WAHALA CLOTURE", description: "Obtenez facilement un devis pour la clôture de votre parcelle avec notre service efficace et professionnel." },
  { id: 2, image: materiel, title: "NO WAHALA APPRO", description: "Simplifiez vos projets de construction en achetant des matériaux de qualité supérieure à des prix compétitifs." },
  { id: 3, image: parcelle, title: "NO WAHALA PARCELLES", description: "Besoin d'une parcelle pour votre projet ? Nous vous aidons à trouver le terrain idéal qui correspond à vos besoins." },
  { id: 4, image: maison, title: "BENIN-NOWAHALAHOUSE", description: "Vous possédez déjà une parcelle ? Laissez-nous vous aider à concrétiser votre rêve de construction avec notre expertise et notre soutien dédié." }
];

const ServicesSection = () => {
  const [visible, setVisible] = useState(new Array(services.length).fill(false));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisible((prevVisible) => {
              const newVisible = [...prevVisible];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current.querySelectorAll('.service');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="w-full mt-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mt-8 mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="services">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              data-index={index}
              className="service bg-white rounded-lg shadow-md p-6 flex flex-col items-center cursor-pointer transform transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: visible[index] ? 1 : 0, y: visible[index] ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#f0f9ff"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={service.image}
                alt={`Service ${service.id}`}
                className="w-32 h-32 object-cover rounded-full mb-4 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
