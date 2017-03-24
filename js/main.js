var wWidth = $(window).innerWidth();
var wHeight = $(window).innerHeight();

var controller;

var tweenA = TweenLite.fromTo($("#greeting>h1 span:nth-child(1)"), 1.75, {bottom:'75vh'}, {bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
var tweenB = TweenLite.fromTo($("#greeting>h1 span:nth-child(2)"), 1.65, {bottom:'75vh'},{bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
var tweenC = TweenLite.fromTo($("#greeting>h1 span:nth-child(3)"), 1.85, {bottom:'75vh'},{bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
var tweenD = TweenLite.fromTo($("#greeting>h1 span:nth-child(4)"), 1.5, {bottom:'75vh'},{bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
var tweenE = TweenLite.fromTo($("#greeting>h1 span:nth-child(5)"), 2, {bottom:'75vh'},{bottom:0, ease: Bounce.easeOut, delay: .2, force3D:true});
function startResizeCheck() {
	console.log("GSAP Finished")
	resetPage();
	window.setInterval(
		function() {
			if(wWidth != $(window).innerWidth() || wHeight != $(window).innerHeight()) {
				resetPage();
				wWidth = $(window).innerWidth();
				wHeight = $(window).innerHeight();
			}
		}, 333);
}
var tweenLink = TweenLite.fromTo($("#greeting img"), 2.25, {x:'-50%', scale: 0,boxShadow: "0 0px 0px rgba(0,0,0,0.4)"}, {x:'-50%', scale:1, boxShadow: "0 5px 10px rgba(0,0,0,0.4)", ease: Elastic.easeOut, repeat: 0, delay: 2.2, force3D:true, onComplete: function(){$("#greeting img").addClass('popping'); startResizeCheck()}});

function resizeNavText() {
	size = parseInt($("nav a").css("font-size"), 10);
	while($("nav").outerHeight()>$("nav a:nth-child(1)").outerHeight()+1) {
		$("nav a").css("font-size", (size-1) + "px");
		size--;
	}
	while(!($("nav").outerHeight()>$("nav a:nth-child(1)").outerHeight()+1)) {
		$("nav a").css("font-size", (size+1) + "px");
		size++;
	}
	$("nav a").css("font-size", (size-1) + "px");

}

function resetPage() {
	console.log("Reset");

	$("nav").css({
		"left": $("#greeting").outerWidth()/2 - $("nav").outerWidth()/2,
		"transform": "none"
	});
	if($(window).width() < 600)
		resizeNavText();
	else
		$("nav a").css("font-size", 1.2 + "rem");

	$("#social").css("left", $("#greeting").width()-$("#social svg").width());

	$("#work h2").quickfit({ max: Math.min($("#work").height()*0.1, 60), min: 8, truncate: false });
	$("#work h3").css("font-size", Math.min($("#work").height()*0.1, 60));

	$("#greeting>img").css({
		"height": "calc(3.5rem + " + ($(window).innerWidth()*.02) + "px)",
		"width": $("#greeting>img").outerHeight()
	});

	$('#slidesContainer').css({
		maxHeight: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
		height: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
	})
	$('#work .slide').css({
		maxHeight: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
		height: $(window).innerHeight() - (30 + $('#work h2').outerHeight() + 30),
	})

	$("#CDMAwards>div").css("max-height", Math.min($("#work").width()*.15, 416)+Math.random()/10 + "px");
	$("#CDMAwards img").css("max-width", Math.min($("#work").width()*.15, 416)+Math.random()/10 + "px");
	
}

function scrollToSection(target) {
	console.log(Math.max($(target).offset().top, -$(target).offset().top));
	$('#scrollWrap').stop().animate({
		scrollTop: $(target).offset().top + $("#scrollWrap").scrollTop() + 1
	}, Math.max($(target).offset().top, -$(target).offset().top)/2);
}
	
$(document).ready(function() {
	wWidth = $(window).innerWidth();
	wHeight = $(window).innerHeight();

	controller = new ScrollMagic.Controller({

			globalSceneOptions: {
				triggerHook: 0
			},
			container: "#scrollWrap"
	});

	$(window).trigger('resize');

	resetPage();

	// Start Rellax
	var rellax = new Rellax('.aboutRellax', {
		wrapper: "#scrollWrap"
	});

	var scene1 = new ScrollMagic.Scene({duration: "60%"})
		.setPin("#about")
		.on('end', function () {
			$("#workShowTrigger").toggleClass("positioned");
		})
		//.addIndicators({name: "Pin"}) // add indicators (requires plugin)
		.addTo(controller)

	var scene = new ScrollMagic.Scene({triggerElement: "#greetingHideTrigger", offset: -1})
		.on('start', function () {
			$("#greeting").toggleClass("scrolledUp");
			$("nav").toggleClass("lightBackground");
			$("#social").toggleClass("colors");
		})
		//.addIndicators({name: "Hide #greeting"}) // add indicators (requires plugin)
		.addTo(controller)

	var scene = new ScrollMagic.Scene({triggerElement: "#workShowTrigger", offset: -1})
		.on('start', function () {
			$("#work").toggleClass("show")
		})
		//.addIndicators({name: "Show My Work"}) // add indicators (requires plugin)
		.addTo(controller)

	var scene1 = new ScrollMagic.Scene({triggerElement: "#workPinTrigger", duration: "225%", offset: "1"})
		.setPin("#work")
		.on('start', function () {
			$(".aboutRellax").toggleClass("hidden");
			$("#social").toggleClass("work");
		})
		.on('end', function () {
			$("#social").toggleClass("work");
		})
		.setTween("#workProgress", {width: "100%", ease: SteppedEase.config(10000)})
		//.addIndicators({name: "Pin #work"}) // add indicators (requires plugin)
		.addTo(controller)

	$("#about").append('<div id="work1pin"></div><div id="work2pin"></div><div id="work3pin"></div><div id="workEnd"></div>');
	$("#work1pin").css({
		position: "absolute",
		bottom: "25vh"
	})
	$("#work2pin").css({
		position: "absolute",
		bottom: "-75vh"
	})
	$("#work3pin").css({
		position: "absolute",
		bottom: "-150vh"
	})
	$("#workEnd").css({
		position: "absolute",
		bottom: "-325vh"
	})


	var swipe1 = new Hammer(document.getElementById("slide1"));
	var scene1 = new ScrollMagic.Scene({triggerElement: "#work1pin"})
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
		//.addIndicators({name: "Work 1"}) // add indicators (requires plugin)
		.addTo(controller)
	var scene1 = new ScrollMagic.Scene({triggerElement: "#work2pin", offset: -1})
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
		//.addIndicators({name: "End Work 1"}) // add indicators (requires plugin)
		.addTo(controller)


	var swipe2 = new Hammer(document.getElementById("slide2"));
	var scene1 = new ScrollMagic.Scene({triggerElement: "#work2pin"})
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
		//.addIndicators({name: "Work 2"}) // add indicators (requires plugin)
		.addTo(controller)
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
		//.addIndicators({name: "End Work 2"}) // add indicators (requires plugin)
		.addTo(controller)


	var swipe3 = new Hammer(document.getElementById("slide3"));
	var scene1 = new ScrollMagic.Scene({triggerElement: "#work3pin"})
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
		//.addIndicators({name: "Work 2"}) // add indicators (requires plugin)
		.addTo(controller)


    if(window.location.hash.length > 0) {
        scrollToSection(window.location.hash);
    }

	$(".slide:nth-child(1) #background").css({
		"background-image": "url('../images/work/sit.png')"
	})
	$(".slide:nth-child(2) #background").css({
		"background-image": "url('../images/work/uttt.png')"
	})
	$(".slide:nth-child(3) #background").css({
		"background-image": "url('../images/work/cdm.png')"
	})
});

$(window).resize(function() {
	resetPage();
}).resize();