const addAnimationToMap = selector => {
    const badges = document.querySelectorAll(selector);

    badges.forEach((badge, i) => {
        const firstCircleInBadge = badge.querySelector('circle:first-of-type');

        i === 0
            ? (addAnimationToCircle(firstCircleInBadge, i, 60), openMapInNewTab(badge))
            : addAnimationToCircle(firstCircleInBadge, i);
    });

    function addAnimationToCircle(circle, index, circleRadius = 30) {
        const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

        const circlePositionY = circle.getAttribute('cy');
        const circlePositionX = circle.getAttribute('cx');
        const circlePositionFill = circle.getAttribute('fill');

        circleElement.setAttributeNS(null, 'cy', circlePositionY);
        circleElement.setAttributeNS(null, 'cx', circlePositionX);
        circleElement.setAttributeNS(null, 'r', 0);
        circleElement.setAttributeNS(null, 'fill', circlePositionFill);

        circleElement.animate(
            [
                { opacity: 1, r: 10 },
                { opacity: 0, r: circleRadius },
            ],
            {
                duration: 2000,
                iterations: Infinity,
            },
        );
        function startAnimation(isTrue) {
            const animation = circleElement.animate(
                [
                    { opacity: 1, r: 0 },
                    { opacity: 0, r: circleRadius },
                ],
                {
                    duration: 2000,
                    iterations: 1,
                },
            );
            animation.onfinish = () => {
                setTimeout(startAnimation, isTrue ? 2000 : 3000);
            };
        }

        startAnimation(index % 2 === 0);
        circle.insertAdjacentElement('beforebegin', circleElement);
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
