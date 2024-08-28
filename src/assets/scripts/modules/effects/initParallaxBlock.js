import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);


export function initParallaxBlock() {
    ScrollTrigger.refresh();
    const parallaxImages = document.querySelectorAll('.main-image-decor img');
    parallaxImages.forEach(block => {
      const scale = block.dataset.scale || 1; // Default scale is 1.1 if not provided
      gsap.set(block, { willChange: 'transform'});
      const speed = block.dataset.speed;
      const yPercent = block.dataset.percent || 0;
      const time = block.dataset.time || 1;
      gsap
        .timeline({
          ease: 'none',
          scrollTrigger: {
            trigger: block,
            scrub: 2,
            markers: false,
            start: top-=${time} bottom,
            end: 'bottom top',
          },
        })
        .fromTo(
          block,
          {
            y: () => ${yPercent}%,
          },
          {
            y: () => ${10 * (1 - speed)}%,
            ease: 'sine.inOut',
  scale: scale,
          },
        );
    });
  }

  const imageParallaxHeroBack = document.querySelectorAll('.screen-home');

  if (imageParallaxHeroBack) {
    initParallaxBlock();
  }
