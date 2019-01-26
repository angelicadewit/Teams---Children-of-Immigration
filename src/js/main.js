var rellax = new Rellax('.rellax', {
    speed: 2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

TweenMax.to(".airplane-stuff", 6, {x:1000});
TweenMax.to(".airplane-dust", 2, {opacity: 1, delay: 1.5});
TweenMax.to(".michigan", 1, {opacity: 1, delay: 4});