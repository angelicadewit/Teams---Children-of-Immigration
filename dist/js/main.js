'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
            TweenMax.to(".airplane", 2, { opacity: 1, x: -500 });
            TweenMax.to(".airplane-dust", 2, { opacity: 0 });
            TweenMax.to(".michigan", 1, { opacity: 0 });
        }
    }
});

// sad josé

TweenMax.set(".jose-new", {
    y: 50,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('.jose-new'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".jose-new", 1.2, {
                y: 0,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".jose-new", 1, {
                y: 50,
                opacity: 0
            });
        }
    }
});

// sad josé

TweenMax.set(".jose-new", {
    y: 50,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('.jose-new'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".jose-new", 1.2, {
                y: 0,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".jose-new", 1, {
                y: 50,
                opacity: 0
            });
        }
    }
});

//quote


TweenMax.set(".quote", {
    y: -50,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('#desktop-trigger'),
    offset: "100%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED quote');
            TweenMax.to(".waypoint-quote", .3, {
                y: 0,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".waypoint-quote", .3, {
                y: -50,
                opacity: 0
            });
        }
    }
});

//clock


TweenMax.set(".clock", {
    y: -75,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('.clock'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".clock", .3, {
                y: 0,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".clock", .3, {
                y: -75,
                opacity: 0
            });
        }
    }
});

//chairs

TweenMax.set(".chair-left", {
    y: -75,
    rotation: -90,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('.chair-left'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".chair-left", 1, {
                y: 0,
                rotation: 0,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".chair-left", 1, {
                y: -75,
                rotation: -90,
                opacity: 0
            });
        }
    }
});

TweenMax.set(".chair-right", {
    y: -75,
    rotation: 90,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('.chair-right'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".chair-right", 1, {
                y: 0,
                rotation: 0,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".chair-right", 1, {
                y: -75,
                rotation: 90,
                opacity: 0
            });
        }
    }
});

//sweat stuff

TweenMax.set(".sweatpants", {
    x: -5,
    scale: 0,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('#sweats-trigger'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".sweatpants", .8, {
                x: 0,
                scale: 1,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".sweatpants", .8, {
                x: -5,
                scale: 0,
                opacity: 0
            });
        }
    }
});

TweenMax.set(".sweatshirt", {
    x: 5,
    scale: 0,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('#sweats-trigger'),
    offset: "50%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".sweatshirt", .5, {
                x: 0,
                scale: 1,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".sweatshirt", .5, {
                x: 5,
                scale: 0,
                opacity: 0
            });
        }
    }
});

//photo

TweenMax.set(".photo", {
    x: 5,
    opacity: 0
});

new Waypoint({
    element: document.querySelector('#photo-trigger'),
    offset: "100%",
    handler: function handler(direction) {
        if (direction === "down") {
            console.log('TRIGGERED');
            TweenMax.to(".photo", 2, {
                x: 0,
                opacity: 1
            });
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".photo", .5, {
                x: 5,
                opacity: 0
            });
        }
    }
});

// random shapes

var spotsAll = document.querySelectorAll(".sixth-scene");

spotsAll.forEach(function (spot) {
    TweenMax.set(".pre-fifth", {
        x: -500,
        opacity: 0
    });
});

new Waypoint({
    element: document.querySelector('.fifth-part'),
    offset: "120%",
    handler: function handler(direction) {
        if (direction === "down") {
            var spotsIn = function spotsIn() {

                var child = new TimelineLite();
                child.staggerTo(spotsAll, 3, { autoAlpha: 1, ease: Back.easeOut.config(1.8),
                    cycle: {
                        delay: function delay() {
                            return Math.random() * 4;
                        }
                    },
                    repeat: -1
                });
                return child;
            };

            console.log('spots');
            var tl = new TimelineMax();
            tl.set(spotsAll, { autoAlpha: 0 }).add(spotsIn());
        } else if (direction === "up") {
            console.log('QQ');
            TweenMax.to(".photo", .5, {
                x: 5,
                opacity: 0
            });
        }
    }
});

// tear drops

TweenMax.set('.total-tear-cluster .tear', {
    y: random(-50, -25),
    opacity: 0
});

var tears = document.querySelectorAll('.total-tear-cluster .tear');
tears = [].concat(_toConsumableArray(tears));
tears = shuffle(tears);

tears.forEach(function (tear) {
    console.log('animate tear', tear);
    var tl = new TimelineMax({ repeat: -1 });
    tl.to({}, Math.random() * 7, {});
    tl.to(tear, 3, {
        y: random(0, 20),
        ease: Linear.easeNone
    }, "start");
    console.log('animate tear', tear);
    tl.to(tear, 0.5, {
        alpha: random(0.7, 1)
    }, "start");
    tl.to(tear, 0.5, {
        alpha: 0
    }, "start+=2.5");
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// utilities
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//# sourceMappingURL=main.js.map
