import { gsap, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export default function upArrow() {
    document.body.addEventListener('click', function(evt) {
        const target = evt.target.closest('[scroll-up-arrow]');
        if (!target) return;
        const targetId = evt.target.dataset.id;
        console.log(targetId);
        gsap.to(window, { duration: 2, ease: 'power2', scrollTo: targetId });
    });
}
