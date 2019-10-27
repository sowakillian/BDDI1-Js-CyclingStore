
/* -------------------
Header
------------------- */
const Header = {
    preloader: document.querySelector('.preloader'),
    hamburgerButton: document.querySelector('.header-nav-mob__button'),
    hamburgerCross: document.querySelector('.header-menu-mob__cross'),
    hamburgerMenu: document.querySelector('.header-menu-mob'),
    body: document.body,

    preload() {
        setTimeout(() => {
            this.preloader.classList.add('preloader_hidden');
        }, 1000);
    },

    menuMob() {
        this.hamburgerButton.addEventListener("click", () => {
            this.hamburgerMenu.classList.add('header-menu-mob_active');
        });

        this.hamburgerCross.addEventListener("click", () => {
            this.hamburgerMenu.classList.remove('header-menu-mob_active');
        });
    }
};

export default Header;
