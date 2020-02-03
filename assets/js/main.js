// Navigation Menu Toggle
const navToggleBtn = document.querySelector('.navigation__toggler');
const navOverlay = document.querySelector('.navigation__overlay');
const navMenu = document.querySelector('.navigation__menu');

navToggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle('show');
    navOverlay.classList.toggle('show');
});

navOverlay.addEventListener("click", () => {
    navMenu.classList.toggle('show');
    navOverlay.classList.toggle('show');
});