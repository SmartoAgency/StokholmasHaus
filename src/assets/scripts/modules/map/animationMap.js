const addAnimationToMap = selector => {
    const badges = document.querySelectorAll(selector);
    console.log(badges);
    badges[0].style.cssText = 'cursor: pointer';

    badges.forEach((badge, index) => {
        const firstCircleInBadge = badge.querySelector('circle:first-of-type');
        index === 0
            ? (addAnimationToCircle(firstCircleInBadge, 50), openMapInNewTab(badge))
            : addAnimationToCircle(firstCircleInBadge);
    });
    function addAnimationToCircle(circle, strokeWidthInEndAnimation = 30) {
        circle.animate(
            [
                {
                    r: 0,
                    stroke: 'rgba(0, 0, 0, 0.1)',
                    opacity: 1,
                },
                {
                    r: strokeWidthInEndAnimation,
                    stroke: 'rgba(0, 0, 0, 0.1)',
                    opacity: 0,
                },
            ],
            {
                duration: 2000,
                iterations: Infinity,
            },
        );
    }

    function openMapInNewTab(trigger) {
        trigger.addEventListener('click', e => {
            window.open(
                'https://www.google.com/maps/dir//Stokholmas+iela+26,+Zieme%C4%BCu+rajons,+R%C4%ABga,+LV-1014',
                '_blank',
            );
        });
    }
};

export default addAnimationToMap;
