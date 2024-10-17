const nav = document.querySelector('nav');
const navBar = document.querySelector('.nav_bar');
const hButton = document.querySelector('.start-btn');

const toggleMenu = () => {
    const isResponsive = nav.classList.toggle('responsive');
    nav.appendChild(hButton)
    hButton.style.display = isResponsive ? 'block' : 'none';
    navBar.style.zIndex = 10;
};

const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
        nav.classList.remove('responsive');
        hButton.style.display = 'inline-block';
        document.querySelector('header').appendChild(hButton);
        if (!document.querySelector('header').contains(hButton)) {
            document.querySelector('header').appendChild(hButton);
        }

    } else {
        hButton.style.display = 'none';
    }
};


navBar.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
