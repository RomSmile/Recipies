const nav = document.querySelector('.page__nav');
const togglerOpen = document.querySelector('.buttons__toggler-open');
const togglerClose = document.querySelector('.buttons__toggler-close');
const logoCloseNav = document.getElementById('close-nav');

const targetToAboutUs = document.querySelector('a[href="#about-us"]');
const targetToApp = document.querySelector('a[href="#App"]');
const targetToCuisines = document.querySelector('a[href="#cuisines"]')

togglerOpen.onclick = (() => {
  nav.style.cssText = `
    transform: translateX(0);

    transition: 0.3s;
  `;
});



togglerClose.onclick = ('click', () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
});

logoCloseNav.addEventListener('click', () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
})

targetToAboutUs.onclick = () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
};

targetToApp.onclick = () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `;
}

targetToCuisines.onclick = () => {
  nav.style.cssText = `
    transform: translateX(100%);

    transition: 0.3s;
  `
}
