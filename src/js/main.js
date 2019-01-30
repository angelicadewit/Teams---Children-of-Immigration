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
    handler: function(direction) {
        if (direction === "down") {
            console.log(`TRIGGERED`)
            TweenMax.to(".airplane", 5, {rotation: "720deg", x:1000});
            TweenMax.to(".airplane-dust", 2, {opacity: 1, delay: 1.5});
            TweenMax.to(".michigan", 1, {opacity: 1, delay: 4});
        } else if (direction === "up"){
            console.log(`QQ`)
            TweenMax.to(".airplane", 5, {x:-1000});
            TweenMax.to(".airplane-dust", 2, {opacity: 0});
            TweenMax.to(".michigan", 1, {opacity: 0});
        }
    }
})


