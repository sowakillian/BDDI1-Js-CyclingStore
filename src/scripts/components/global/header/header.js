
/* -------------------
Header
------------------- */
const Header = {
    preloader: document.querySelector('.preloader'),

    preload() {
        setTimeout(() => {
            this.preloader.classList.add('preloader_hidden');
        }, 1000);
    }
};

export default Header;
