import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const phoneNumber = "+22952460303";
  const whatsappNumber = "+22952460303";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const email = "hodecoth@gmail.com";

  return (
    <section id="contact" className="w-full py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nous Contacter</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-2xl mr-2" />
            <p className="text-gray-700">Akpakpa,Rue 1500, Cotonou</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-2xl mr-2" />
            <p className="text-gray-700">{phoneNumber}</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-2xl mr-2" />
            <p className="text-gray-700">{email}</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-2xl mr-2" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-500">
              {whatsappNumber}
            </a>
          </div>
          <div className="flex items-center">
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Laissez-nous un message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
