import gsap from 'gsap/all';

export default function menu() {
    const closeMenuTl = gsap
        .timeline({
            paused: true,
        })
        .fromTo(
            '.menu__item-inner>*',
            {
                y: 0,
                autoAlpha: 1,
            },
            {
                autoAlpha: 0,
                y: '50%',
                ease: 'Quart.easeInOut',
                duration: 0.35,
                stagger: 0.1,
            },
            '<',
        )
        .set('.menu', {
            pointerEvents: 'none',
            visibility: 'hidden',
        })
        .set(
            '.header',
            {
                autoAlpha: 1,
            },
            '<',
        );

    const openMenuTl = gsap
        .timeline({
            paused: true,
        })
        .set('.menu', {
            pointerEvents: 'all',
            visibility: 'visible',
        })
        .fromTo(
            '.menu__item-inner',
            {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            },
            {
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
                ease: 'Expo.easeOut',
                duration: 1.25,
            },
        )
        .fromTo(
            '.menu__item-inner>*',
            {
                autoAlpha: 0,
                y: '50%',
            },
            {
                y: 0,
                autoAlpha: 1,
                ease: 'Quart.easeInOut',
                duration: 0.5,
                stagger: 0.1,
            },
            '<',
        );
    document.body.addEventListener('click', function(evt) {
        const $menuButton = document.querySelector('[data-menu-call]');
        const target =
            evt.target.closest('[data-menu-item]') || evt.target.closest('[data-menu-call]');

        if (!target) return;

        const isOpen = $menuButton.dataset.menuOpen === 'true';
        isOpen ? closeMenu($menuButton, closeMenuTl) : openMenu($menuButton, openMenuTl);
    });
}

/** Mobile callback popup */
function openMenu(menuBtn, animation) {
    menuBtn.dataset.menuOpen = 'true';

    document.body.style.overflow = 'hidden';
    animation.progress(0).play();
    document.querySelector('.header').classList.add('header-important--pin');

    toggleButtonIcon();
}

function closeMenu(menuBtn, animation) {
    setTimeout(() => {
        toggleButtonIcon();
        document.body.style.overflow = 'visible';
        document.querySelector('.header').classList.remove('header-important--pin');
    }, 500);
    menuBtn.dataset.menuOpen = 'false';

    animation
        .timeScale(1.5)
        .progress(0)
        .play();
}

function toggleButtonIcon(btnIconContainer = '.header-menu-button__icon') {
    if (window.innerWidth <= 768) {
        btnIconContainer = '.header-not-desktop__button';
    }

    const $iconBtnOpen = document.querySelector(
        `${btnIconContainer} .header-menu-button__icon-open`,
    );

    const $iconBtnClose = document.querySelector(
        `${btnIconContainer} .header-menu-button__icon-close`,
    );

    $iconBtnOpen.classList.toggle('none');
    $iconBtnClose.classList.toggle('none');
}

// function mobPopupHandler() {
//     function close(el) {
//         gsap.to(el, { autoAlpha: 0, zIndex: 10 });
//     }
//     function open(el) {
//         gsap.to(el, { autoAlpha: 1, zIndex: 50 });
//     }
//     const popup = document.querySelector('[data-mobile-callback-popup]');
//     const call = document.querySelectorAll('[data-call-mobile-callback-popup]');
//     const closeEl = document.querySelectorAll('[data-mobile-callback-close]');
//     closeEl.forEach(el => {
//         el.addEventListener('click', () => close(popup));
//     });

//     // popup.addEventListener('click', ({target}) => {
//     //   target === popup ? close(popup) : null;
//     // })
//     call.forEach(el => el.addEventListener('click', () => open(popup)));
//     // call.forEach(el => el.addEventListener('touchstart', () => open(popup)));
// }

// mobPopupHandler();
