//Swiper Slide
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let swiperReviews = new Swiper(".swiper-container-reviews", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperAvaliacoes = new Swiper(".swiper-container-reviews", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
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


emailjs.init("U4GbLmK5VL34id-52");

const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = inputs[0].value.trim();
    const phone = inputs[1].value.trim();
    const email = inputs[2].value.trim();

    const errors = [];
    
    if (name.length < 3) {
        errors.push('Nome deve ter no mínimo 3 caracteres');
    }

    const formattedPhone = phone.replace(/\D/g, "").replace(/^(\d{2})(\d{4,5})(\d{4})$/, "($1) $2-$3");
    
    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formattedPhone)) {
        errors.push('Telefone deve estar no formato (XX) XXXXX-XXXX');
    } else {
        inputs[1].value = formattedPhone; 
    }

    if (!email.includes('@')) {
        errors.push('Email deve ter um "@"');
    }

    if (errors.length > 0) {
        let errorContainer = document.querySelector('.error-container');
        
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.classList.add('error-container');
            form.appendChild(errorContainer);
        }

        errorContainer.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
    } else {
        const button = form.querySelector('button');
        button.disabled = true;
        button.classList.add('loading');
        button.innerHTML = `<i class="fa fa-spinner fa-spin"></i> Enviando...`;

        emailjs.send("service_8tyd3ne", "template_79kq11b", {
            from_name: name,
            from_email: email,
            from_phone: formattedPhone
        })
        .then(function(response) {
            setTimeout(() => {
                button.disabled = false;
                button.classList.remove('loading');
                button.innerHTML = 'Começar Agora';
                
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Mensagem enviada com sucesso!';
                successMessage.style.color = 'green';
                form.appendChild(successMessage);

                setTimeout(() => {
                    successMessage.remove();
                    button.style.background = '';
                }, 2000);
            }, 3000);
            console.log("SUCCESS!", response.status, response.text);
            form.reset();
        }, function(error) {
            setTimeout(() => {
                button.disabled = false;
                button.classList.remove('loading');
                button.innerHTML = 'Enviar';
            }, 1000);
            console.log("FAILED...", error);
        });
    }
});
  
