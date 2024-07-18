import React from "react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Témoignages de Nos Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <blockquote className="text-lg text-gray-700 mb-4">
              Tu as bâti ton entreprise sur des fondations faites avec les
              meilleurs matériaux possibles: l’honnêteté, la sincérité, le
              professionnalisme. C’est donc tout naturel que nous tes clients te
              renouvelons la confiance à toi qui a conduit avec succès nos
              projets. Tu as fondé ton entreprise sur des valeurs spirituelles
              et non sur l’argent. Tu ne sers pas l’argent donc c’est plutôt
              l’argent qui te servira et entretiendra la santé et le bien-être
              de ta famille. Restes comme tu es Coth
            </blockquote>
            <cite className="block font-semibold">Maxime LOKOSSI</cite>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <blockquote className="text-lg text-gray-700 mb-4">
              M. Coth, Votre discipline et sincérité sont votre Marketing selon
              moi. C’est un honneur pour moi de travailler avec votre équipe.
              merci beaucoup 🙏🙏🙏
            </blockquote>
            <cite className="block font-semibold">Didier AGONVONON</cite>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <blockquote className="text-lg text-gray-700 mb-4">
            Vous avez construit votre vie sur des fondations solides : foi, amour, et persévérance. Naturellement, nous vous faisons confiance, car vous nous guidez avec succès. Ancré dans des valeurs spirituelles, vous servez de modèle de dévouement et de sagesse. Que Dieu continue de vous bénir et de vous guider.🙏🙏🙏
            </blockquote>
            <cite className="block font-semibold">MJI </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
