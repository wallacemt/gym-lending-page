const header = document.querySelector('header');
const msgContainer = document.getElementsByClassName('.msg-container');
window.addEventListener('scroll', () => {
    
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); 
    } else {
        header.classList.remove('scrolled'); 
    }
});
