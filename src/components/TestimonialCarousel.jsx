import React, { useEffect } from "react";


const TestimonialCarousel = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20, // Ajoutez de l'espace entre les slides
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <section className="relative w-full px-6 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Témoignages</h2>
      <div className="swiper-container" style={{ overflow: 'hidden' }}>
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide flex justify-center items-center w-full">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mb-4">Le service a été exceptionnel ! Grâce à l'équipe, j'ai pu obtenir un devis rapide et précis pour la clôture de ma propriété. Le processus était simple et efficace. Je recommande vivement.</p>
              <div className="flex items-center mt-4">
                <p className="font-bold">Anne Dubois</p>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="swiper-slide flex justify-center items-center w-full">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mb-4">Une expérience remarquable ! Les matériaux de construction fournis étaient de haute qualité et à des prix compétitifs. J'ai particulièrement apprécié le service client professionnel.</p>
              <div className="flex items-center mt-4">
                <p className="font-bold">Sophie Martin</p>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="swiper-slide flex justify-center items-center w-full">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mb-4">J'ai trouvé la parcelle parfaite pour mon projet grâce à cette plateforme. L'équipe a été très réactive et m'a aidé à chaque étape du processus. Je suis très satisfait des résultats.</p>
              <div className="flex items-center mt-4">
                <p className="font-bold">Julien Dubois</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide flex justify-center items-center w-full">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mb-4">Service rapide et efficace pour l'achat de matériaux de construction. Le processus était fluide et les prix étaient très compétitifs. Je suis très satisfait de l'expérience globale.</p>
              <div className="flex items-center mt-4">
                <p className="font-bold">Laura Petit</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide flex justify-center items-center w-full">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mb-4">Une excellente expérience du début à la fin. L'équipe était très professionnelle et m'a aidé à concrétiser mon rêve de construction sans aucun souci. Je les recommande vivement.</p>
              <div className="flex items-center mt-4">
                <p className="font-bold">Pauline Caron</p>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation buttons */}
        <button type="button" className="swiper-button-prev"></button>
        <button type="button" className="swiper-button-next"></button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
