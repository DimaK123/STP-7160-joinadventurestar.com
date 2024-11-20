const hakkımızdaSwiper = new Swiper(".hakkımızda__swiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
});

const sıcakOrtamımızSwiper = new Swiper(".sıcak-ortamımız__swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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
});


