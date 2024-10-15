//Swiper Slide
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let  swiperReviews = new Swiper('.swiper-container-reviews', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperAvaliacoes = new Swiper('.swiper-container-reviews', {
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
    autoplay: {
        delay: 2000,
    },
});

AOS.init();
AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
});
