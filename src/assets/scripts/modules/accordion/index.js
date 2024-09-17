import { gsap } from 'gsap/all';

const accordion = (triggerSelectors, textSelector, labelSelector, iconSelector) => {
    function createTimeline(accordion) {
        const timeline = gsap.timeline({
            paused: true,
            onStart: timelineStart,
            onStartParams: [accordion],
            onReverseCompleteParams: [accordion],
        });
        timeline
            .fromTo(
                accordion.querySelector(textSelector),
                {
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                },
                {
                    marginBottom: '2vw',
                    opacity: 1,
                    height: 'auto',
                    duration: 0.35,
                    ease: 'power4.inOut',
                },
            )
            .fromTo(
                accordion.querySelector(iconSelector),
                { rotate: 0 },
                { rotate: -180, duration: 0.35, ease: 'power4.inOut' },
                '<',
            );
        timeline.reverse();
        accordion.querySelector(labelSelector).accordionTimeline = timeline;
    }
    function timelineStart(accordion) {
        accordion.querySelector(textSelector).style.display = 'block';
    }
    function attachEvents(accordion) {
        const trigger = accordion.querySelector(labelSelector);
        trigger.addEventListener('click', () => {
            trigger.accordionTimeline.reversed()
                ? trigger.accordionTimeline.play()
                : trigger.accordionTimeline.reverse();
        });
    }
    document.querySelectorAll(triggerSelectors).forEach(item => {
        createTimeline(item);
        attachEvents(item);
    });
};

export default accordion;
