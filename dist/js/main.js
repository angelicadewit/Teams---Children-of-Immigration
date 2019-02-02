'use strict';

var rellax = new Rellax('.rellax', {
    speed: 2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

// let xTo = .2*document.querySelector('.first-part').offsetWidth - document.querySelector(".airplane-stuff").offsetWidth;

new Waypoint({
    element: document.getElementById('first-trigger'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            var tl = new TimelineMax();
            tl.to(".airplane", 1, { y: -170, ease: Power2.easeOut });
            tl.to(".airplane", 4, { y: 0, ease: Power2.easeInOut });
            TweenMax.from(".airplane", 5, { rotation: "-50deg", ease: Power1.easeInOut });
            TweenMax.to(".airplane", 5, { x: 450 });
            TweenMax.to(".airplane-dust", 2, { opacity: 1, delay: 1.5 });
            TweenMax.to(".michigan", 1, { opacity: 1, delay: 4 });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".airplane", 5, { x: -1000 });
            TweenMax.to(".airplane-dust", 2, { opacity: 0 });
            TweenMax.to(".michigan", 1, { opacity: 0 });
        }
    }
});
//# sourceMappingURL=main.js.map
