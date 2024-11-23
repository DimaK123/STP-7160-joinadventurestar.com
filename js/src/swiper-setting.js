const hakkımızdaSwiper = new Swiper(".hakkımızda__swiper", {
  slidesPerView: "auto",
  spaceBetween: 15,

  breakpoints: {
    1440: {
      spaceBetween: 0,
      allowTouchMove: false,
    }
  }
});

const sıcakOrtamımızSwiper = new Swiper(".sıcak-ortamımız__swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: false,
      centeredSlides: false,
    }
  }
});

const müşteriYorumlarıSwiper = new Swiper(".müşteri-yorumları__swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1440: {
      centeredSlides: false,
      spaceBetween: 0,
      loop: false,
    }
  }
});


