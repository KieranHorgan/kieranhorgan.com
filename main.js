var wWidth = $(window).innerWidth();
var wHeight = $(window).innerHeight();

// GSAP Tweens that make the greeting fall down from above
//                                
//											  Length of the fall          Ending position                      Delay
//                  Select each part of the greeting   ↓   Starting position     ↓        Boucing effect          ↓     This makes the effect run smoother
TweenLite.fromTo($("#greeting>h1 span:nth-child(1)"), 1.75, {bottom:'75vh'}, {bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
TweenLite.fromTo($("#greeting>h1 span:nth-child(2)"), 1.65, {bottom:'75vh'}, {bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
TweenLite.fromTo($("#greeting>h1 span:nth-child(3)"), 1.85, {bottom:'75vh'}, {bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
TweenLite.fromTo($("#greeting>h1 span:nth-child(4)"), 1.5,  {bottom:'75vh'}, {bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
TweenLite.fromTo($("#greeting>h1 span:nth-child(5)"), 2,    {bottom:'75vh'}, {bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});

// Show the scroll down button on the greeting section (Similar to above)
//                           								<			         Start as not shown                    >  <                     End as full size                     >    Ealstic effect  repeat infintely                            Once it's fully shown start the popping effect using CSS    Start checking if the page has been resized
TweenLite.fromTo($("#greeting img"),				  2.25, {x:'-50%', scale: 0, boxShadow: "0 0px 0px rgba(0,0,0,0.4)"}, {x:'-50%', scale:1, boxShadow: "0 5px 10px rgba(0,0,0,0.4)", ease: Elastic.easeOut, repeat: 0, delay: 2.2, force3D:true, onComplete: function(){$("#greeting img").addClass('popping'); startResizeCheck()}});

function startResizeCheck() {
	// Make sure everything is the right size and position
	resetPage();

	// Loop 3 times a second
	window.setInterval( function() {

			// If the size of the window has changed recalculate the sizes and positions
			if(wWidth != $(window).innerWidth() || wHeight != $(window).innerHeight()) {
				resetPage();
				wWidth = $(window).innerWidth();
				wHeight = $(window).innerHeight();
			}

	}, 333);
}


// Function to resize the nav to make it responsive i.e. look decent on smaller screens
function resizeNavText() {

	// Get the current size of the text
	size = parseInt($("nav a").css("font-size"), 10);

	// First see if making the font smaller is needed
	// Try decreasing the font size until it fits properly
	while($("nav").outerHeight()>$("nav a:nth-child(1)").outerHeight()+1) {
		$("nav a").css("font-size", (--size) + "px");
	}

	// Next see if it needs to be made bigger
	// Increase the font size until it is 1 pixel too big
	while(!($("nav").outerHeight()>$("nav a:nth-child(1)").outerHeight()+1)) {
		$("nav a").css("font-size", (++size) + "px");
	}

	// Now set the font-size to 1 less than that
	$("nav a").css("font-size", (size-1) + "px");

}


// Function to ensure everything is the right size and in the right position
function resetPage() {

	// Center the nav in the middle of the screen
	$("nav").css({
		"left": $("#greeting").outerWidth()/2 - $("nav").outerWidth()/2,
		"transform": "none"
	});

	// Change the look of the nav when on a small screen
	if($(window).width() < 600) {
		resizeNavText();
	} else {
		$("nav a").css("font-size", 1.2 + "rem");
	}

	// Position the social icons on the right edge of the window
	$("#social").css("left", $("#greeting").width()-$("#social svg").width());

	// Use the quickfit plugin to resize the work section heading and keep it on a single line
	$("#work h2").quickfit({ max: Math.min($("#work").height()*0.1, 60), min: 8, truncate: false });
	$("#work h3").css("font-size", Math.min($("#work").height()*0.1, 60));

	// Responsiveley set the size of the greeting section's image
	$("#greeting>img").css({
		"height": "calc(3.5rem + " + ($(window).innerWidth()*.02) + "px)",
		"width": $("#greeting>img").outerHeight()
	});

	// Set the height of the slides to the height of the window minus the top of the work section
	$('#slidesContainer').css({
		maxHeight: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
		height: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
	})
	$('#work .slide').css({
		maxHeight: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
		height: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
	})

	// Position the Junior Spider awards images
	$("#CDMAwards>div").css("max-height", Math.min($("#work").width()*.15, 416)+Math.random()/10 + "px");
	$("#CDMAwards img").css("max-width", Math.min($("#work").width()*.15, 416)+Math.random()/10 + "px");
	
}


// Little function to scroll the page down smoothly to any target
function scrollToSection(target) {
	$('#scrollWrap').stop().animate({
		scrollTop: $(target).offset().top + $("#scrollWrap").scrollTop() + 1
	}, Math.max($(target).offset().top, -$(target).offset().top)/2);
	// The amount of time it takes depends on the distance it must travel
}


// Function that runs when the page loads
$(document).ready(function() {
	wWidth = $(window).innerWidth();
	wHeight = $(window).innerHeight();

	resetPage();


	// Controller handles all the following ScrollMagic events
	var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 0
			},
			container: "#scrollWrap"
	});

	// This works it's way down the page from top to bottom
	// Pin the greeting section
	new ScrollMagic.Scene({duration: "60%"})
		.setPin("#about")
		.on('end', function () {
			$("#workShowTrigger").toggleClass("positioned");
		})
//		.addIndicators({name: "Pin"}) // add indicators (requires plugin)
		.addTo(controller)

	// Hide the greeting section, change colour of the nav and the social icons
	new ScrollMagic.Scene({triggerElement: "#greetingHideTrigger", offset: -1})
		.on('start', function () {
			$("#greeting").toggleClass("scrolledUp");
			$("nav").toggleClass("lightBackground");
			$("#social").toggleClass("colors");
		})
//		.addIndicators({name: "Hide #greeting"}) // add indicators (requires plugin)
		.addTo(controller)

	// Start the parallax effect in the backfround of the greeting section
	new Rellax('.aboutRellax', {
		wrapper: "#scrollWrap"
	});


	// Show the work section
	new ScrollMagic.Scene({triggerElement: "#workShowTrigger", offset: -1})
		.on('start', function () {
			$("#work").toggleClass("show")
		})
//		.addIndicators({name: "Show My Work"}) // add indicators (requires plugin)
		.addTo(controller)

	// Pin the work section, hide the parallax background, start the progress bar
	new ScrollMagic.Scene({triggerElement: "#workPinTrigger", duration: "225%", offset: "1"})
		.setPin("#work")
		.on('start', function () {
			$(".aboutRellax").toggleClass("hidden");
			$("#social").toggleClass("work");
		})
		.on('end', function () {
			$("#social").toggleClass("work");
		})
		.setTween("#workProgress", {width: "100%", ease: SteppedEase.config(10000)})
//		.addIndicators({name: "Pin #work"}) // add indicators (requires plugin)
		.addTo(controller)


	// Add the triggers for the work slides
	$("#about").append('<div id="work1pin"></div><div id="work2pin"></div><div id="work3pin"></div><div id="workEnd"></div>');
	$("#work1pin").css({ position: "absolute", bottom: "25vh"  })
	$("#work2pin").css({ position: "absolute", bottom: "-75vh" })
	$("#work3pin").css({ position: "absolute", bottom: "-150vh"})
	$("#workEnd").css({  position: "absolute", bottom: "-325vh"})

	// Object to detect if the slide gets swiped
	var swipe1 = new Hammer(document.getElementById("slide1"));
	// Bring the first slide into view, change it if swiped
	new ScrollMagic.Scene({triggerElement: "#work1pin"})
		.on('start', function () {
			$("#slidesContainer").toggleClass("work1");
			$("#workProgress").toggleClass("stage1");

			swipe1.on('swipeleft', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#work2pin").parent().position().top + $("#work2pin").position().top + $(window).innerHeight()/8*3
				}, 250);
			});
			swipe1.on('swiperight', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#about").position().top
				}, 750);
			});
		})
//		.addIndicators({name: "Work 1"}) // add indicators (requires plugin)
		.addTo(controller)

	// Also change the first slide slide if swiped however this if the user is scrolling up
	new ScrollMagic.Scene({triggerElement: "#work2pin", offset: -1})
		.on('start', function () {
			swipe1.on('swipeleft', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#work2pin").parent().position().top + $("#work2pin").position().top + $(window).innerHeight()/8*3
				}, 250);
			});
			swipe1.on('swiperight', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#about").position().top
				}, 750);
			});
		})
//		.addIndicators({name: "End Work 1"}) // add indicators (requires plugin)
		.addTo(controller)


	var swipe2 = new Hammer(document.getElementById("slide2"));
	// Bring the second slide into view, change it if swiped
	new ScrollMagic.Scene({triggerElement: "#work2pin"})
		.on('start', function () {
			$("#slidesContainer").toggleClass("work2");
			$("#workProgress").toggleClass("stage2");

			swipe2.on('swipeleft', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#work3pin").parent().position().top + $("#work3pin").position().top + $(window).innerHeight()/8*3
				}, 250);
			});
			swipe2.on('swiperight', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#workPinTrigger").parent().position().top + $("#workPinTrigger").position().top + $(window).innerHeight()/8*3
				}, 250);
			});
		})
//		.addIndicators({name: "Work 2"}) // add indicators (requires plugin)
		.addTo(controller)

	// Also change the second slide slide if swiped however this if the user is scrolling up
	var scene1 = new ScrollMagic.Scene({triggerElement: "#work3pin"})
		.on('start', function () {
			swipe2.on('swipeleft', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#work3pin").parent().position().top + $("#work3pin").position().top + $(window).innerHeight()/8*3
				}, 250);
			});
			swipe2.on('swiperight', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#workPinTrigger").parent().position().top + $("#workPinTrigger").position().top + $(window).innerHeight()/8*3
				}, 250);
			});
		})
//		.addIndicators({name: "End Work 2"}) // add indicators (requires plugin)
		.addTo(controller)


	var swipe3 = new Hammer(document.getElementById("slide3"));
	// Bring the third slide into view, change it if swiped
	new ScrollMagic.Scene({triggerElement: "#work3pin"})
		.on('start', function () {
			$("#slidesContainer").toggleClass("work3");
			$("#workProgress").toggleClass("stage3");

			swipe3.on('swipeleft', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#workEnd").parent().position().top + $("#workEnd").position().top + 5
				}, 750);
			});
			swipe3.on('swiperight', function(ev) {
				$('#scrollWrap').stop().animate({
					scrollTop: $("#work2pin").parent().position().top + $("#work2pin").position().top + $(window).innerHeight()/8*3
				}, 250);
			});
		})
//		.addIndicators({name: "Work 2"}) // add indicators (requires plugin)
		.addTo(controller)



	// If the url has a # in it then go to wherever it's pointing to
    if(window.location.hash.length > 0) {
        scrollToSection(window.location.hash);
    }

    // Set the images for the slides
    // This is done with javascript instead of css so that these only load once everything else is done
	$(".slide:nth-child(1) #background").css("background-image", "url('../images/work/sit.png')")
	$(".slide:nth-child(2) #background").css("background-image", "url('../images/work/uttt.png')")
	$(".slide:nth-child(3) #background").css("background-image", "url('../images/work/cdm.png')")
});

// Reset stuff
$(window).resize(function() {
	resetPage();
}).resize();