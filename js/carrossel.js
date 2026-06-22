const carrosselClinica = new Swiper(".carrossel-clinica", {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// =======================
// ACCORDION CURRÍCULO
// =======================

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((btn) => {
  btn.addEventListener("click", function () {
    const painel = this.nextElementSibling;

    if (painel.style.maxHeight) {
      painel.style.maxHeight = null;
      this.innerText = "Ver currículo";
    } else {
      painel.style.maxHeight = painel.scrollHeight + "px";
      this.innerText = "Ocultar currículo";
    }
  });
});