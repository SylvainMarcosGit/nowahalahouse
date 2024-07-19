document.addEventListener("DOMContentLoaded", function () {
    let scrollLeftBtn = document.getElementById("scrollLeftBtn");
    let scrollRightBtn = document.getElementById("scrollRightBtn");
    let carousel = document.getElementById("carousel");
  
    console.log("scrollLeftBtn:", scrollLeftBtn); // Debugging
    console.log("scrollRightBtn:", scrollRightBtn); // Debugging
    console.log("carousel:", carousel); // Debugging
  
    if (scrollLeftBtn && scrollRightBtn && carousel) {
      scrollLeftBtn.addEventListener("click", function () {
        carousel.scrollBy({
          left: -300, // Ajustez la valeur si nécessaire
          behavior: "smooth",
        });
      });
  
      scrollRightBtn.addEventListener("click", function () {
        carousel.scrollBy({
          left: 300, // Ajustez la valeur si nécessaire
          behavior: "smooth",
        });
      });
    } else {
      console.error("Un ou plusieurs éléments sont manquants.");
    }
  });
  