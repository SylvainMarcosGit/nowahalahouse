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
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia mollitia sit exercitationem beatae quae!</p>
              <div className="flex items-center mt-4">
                <img src="" alt="client photo" className="w-12 h-12 rounded-full mr-4" />
                <p className="font-bold">Sylvain</p>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="swiper-slide flex justify-center items-center w-full">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia mollitia sit exercitationem beatae quae!</p>
              <div className="flex items-center mt-4">
                <img src="" alt="client photo" className="w-12 h-12 rounded-full mr-4" />
                <p className="font-bold">Sylvain</p>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="swiper-slide flex justify-center items-center w-full">
            <div className="p-6 bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-lg">
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia mollitia sit exercitationem beatae quae!</p>
              <div className="flex items-center mt-4">
                <img src="" alt="client photo" className="w-12 h-12 rounded-full mr-4" />
                <p className="font-bold">Sylvain</p>
              </div>
            </div>
          </div>
          {/* Add more slides here */}
        </div>
        {/* Navigation buttons */}
        <button type="button" className="swiper-button-prev"></button>
        <button type="button" className="swiper-button-next"></button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
