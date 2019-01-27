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

var waypoint = new Waypoint({
    element: document.getElementById('first-trigger'),
    handler: function handler(direction) {
        console.log('TRIGGERED');
        TweenMax.to(".airplane-stuff", 5, { x: 1000 });
        TweenMax.to(".airplane-dust", 2, { opacity: 1, delay: 1.5 });
        TweenMax.to(".michigan", 1, { opacity: 1, delay: 4 });
    }
});

var waypoint = new Waypoint({
    element: document.getElementById('first-trigger-hide'),
    handler: function handler(direction) {

        if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".airplane-stuff", 5, { x: -1000 });
            TweenMax.to(".airplane-dust", 2, { opacity: 0 });
            TweenMax.to(".michigan", 1, { opacity: 0 });
        }
    }
});
//# sourceMappingURL=main.js.map
