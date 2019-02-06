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
			let tl = new TimelineMax();
			tl.to(".airplane",1, {y: -170, ease: Power2.easeOut})
			tl.to(".airplane", 4, {y: 0, ease: Power2.easeInOut})
			TweenMax.from(".airplane", 5, {rotation: "-50deg", ease: Power1.easeInOut});
			TweenMax.to(".airplane", 5, {x:450});
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



// sad josé

TweenMax.set(".jose-new", {
	y:50,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('.jose-new'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".jose-new", 1.2, {
				y:0,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".jose-new", 1, {
				y: 50,
				opacity: 0
			});
		}
	}
})


// sad josé

TweenMax.set(".jose-new", {
	y:50,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('.jose-new'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".jose-new", 1.2, {
				y:0,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".jose-new", 1, {
				y: 50,
				opacity: 0
			});
		}
	}
})

//quote


TweenMax.set(".quote", {
	y:-50,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('#desktop-trigger'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED quote`)
			TweenMax.to(".waypoint-quote", .3, {
				y:0,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".waypoint-quote", .3, {
				y: -50,
				opacity: 0
			});
		}
	}
})

//clock


TweenMax.set(".clock", {
	y:-75,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('.clock'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".clock", .3, {
				y:0,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".clock", .3, {
				y: -75,
				opacity: 0
			});
		}
	}
})

//chairs

TweenMax.set(".chair-left", {
	y:-75,
	rotation: -90,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('.chair-left'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".chair-left", 1, {
				y:0,
				rotation: 0,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".chair-left", 1, {
				y: -75,
				rotation: -90,
				opacity: 0
			});
		}
	}
})

TweenMax.set(".chair-right", {
	y:-75,
	rotation: 90,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('.chair-right'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".chair-right", 1, {
				y:0,
				rotation: 0,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".chair-right", 1, {
				y: -75,
				rotation: 90,
				opacity: 0
			});
		}
	}
})

//sweat stuff

TweenMax.set(".sweatpants", {
	x:-5,
	scale: 0,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('#sweats-trigger'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".sweatpants", .8, {
				x:0,
				scale: 1,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".sweatpants", .8, {
				x: -5,
				scale: 0,
				opacity: 0
			});
		}
	}
})

TweenMax.set(".sweatshirt", {
	x:5,
	scale: 0,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('#sweats-trigger'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".sweatshirt", .5, {
				x:0,
				scale: 1,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".sweatshirt", .5, {
				x: 5,
				scale: 0,
				opacity: 0
			});
		}
	}
})

//photo

TweenMax.set(".photo", {
	x:5,
	opacity: 0
});

new Waypoint({
	element: document.querySelector('#photo-trigger'),
	offset: "50%",
	handler: function(direction) {
		if (direction === "down") {
			console.log(`TRIGGERED`)
			TweenMax.to(".photo", 2, {
				x:0,
				opacity: 1
			});

		} else if (direction === "up"){
			console.log(`QQ`)
			TweenMax.to(".photo", .5, {
				x: 5,
				opacity: 0
			});
		}
	}
})

// random shapes

var spotsAll = document.querySelectorAll(".sixth-scene");

spotsAll.forEach(function(spot){
    TweenMax.set(".photo", {
        x:-100,
        opacity: 0
    });
}



new Waypoint({
    element: document.querySelector('.fifth-part'),
    offset: "50%",
    handler: function(direction) {
        if (direction === "down") {
            console.log(`spots`)
            var tl = new TimelineMax(); 
            tl
                .set(spotsAll, {autoAlpha:0})
                .add(spotsIn());

            function spotsIn(){

                var child = new TimelineLite();
                    child.staggerTo(spotsAll, 0.5, {autoAlpha:1, ease: Back.easeOut.config(1.8), 
                        cycle:{
                        delay:function() {
                            return Math.random() * 1;
                            }
                        }
                    });	
                return child;
                }
        } else if (direction === "up"){
            console.log(`QQ`)
            TweenMax.to(".photo", .5, {
                x: 5,
                opacity: 0
            });
        }
    }
})






// tear drops

TweenMax.set('.total-tear-cluster .tear', {
	y: -100,
	opacity: 0
})

let tears = document.querySelector('.total-tear-cluster .tear');
tears = [...tears]
tears = shuffle(tears);

TweenMax.staggerTo('.total-tear-cluster .tear', 1, {
	y: 0,
	opacity: 1
}, 0.1)








// utilities
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  
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