const hamburgerMenu = document.querySelector('.hamburger'),
    headerList = document.querySelector('.header__nav-list'),
    headerLinks = document.querySelectorAll('.header__nav-link'),
    body = document.querySelector('body');;


const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
    headerList.classList.toggle('active');
    body.classList.toggle('lock');
};

hamburgerMenu.addEventListener('click', menuIsActive);

const closeNav = () => {
    hamburgerMenu.classList.remove('active');
    headerList.classList.remove('active');
    body.classList.remove('lock');
}
for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', closeNav);
}