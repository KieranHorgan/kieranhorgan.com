<!DOCTYPE html>
<!-- Doctype first because IE (?)

If you are reading this, feel free to hit me up if you have any questions or even if only
to say hi! You can contact me at info@kieranhorgan.com or through the contact form at
the end of the page.

Now, onto the code...

-->

<html lang="en">
	<head>

		<meta charset="UTF-8">

	    <link rel="icon" type="image/png" href="images/favicon.png" sizes="32x32">

		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet"> 

		<!-- Main CSS stylesheet -->
		<link rel="stylesheet" href="css/style.css">

		<title>Kieran Horgan</title>

	    <!-- Make sure the page scales properly on Mobile devices -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>

	<!-- This #scrollWrap div is simply to make the page scroll inside the div, meaning the
		 body itself doesn't actually scroll. The main reason for this is to stop mobile
		 browsers (Chrome in particular) from changing the size of the window, instead keeping
		 the url bar shown on mobile -->
	<body><div id="scrollWrap">
<!--
================================================================================================================================
||                                                                                                                            ||
||                                                  N A V I G A T I O N                                                       ||
||                                                                                                                            ||
================================================================================================================================
-->     <nav> <!-- Links call a javascript ofunction instead of a normal hyperlink -->
			<a onclick="scrollToSection('#greetingHideTrigger')">About Me</a>
			<a onclick="scrollToSection('#work')">My Work</a>
			<a onclick="scrollToSection('#achievements')">Achievements</a>
			<a onclick="scrollToSection('#contact')">Contact</a>
		</nav>

		<!-- (Currently) 2 links at tge side of the page -->
		<section id="social">

			<a href="https://twitter.com/KieranJHorgan">

				<!-- Scocial Icons using SVG. This one is the Twitter Bird logo -->
				<svg width="612px" height="612px" viewBox="0 0 612 612">
					<path d="M0 0 H 612 V 612 H 0 L 0 10 M141.233,414.741c5.286,0.668,10.682,1.029,16.135,1.029   c31.685,0.056,60.838-11.378,83.955-30.572c-29.599-0.695-54.551-21.614-63.147-50.323c4.117,0.862,8.374,1.363,12.713,1.392   c6.176,0.027,12.129-0.808,17.804-2.421c-30.934-6.843-54.245-36.191-54.245-71.159c0-0.306,0-0.612,0-0.918   c9.124,5.508,19.528,8.846,30.627,9.347c-18.109-13.103-30.043-35.357-30.043-60.394c0-13.241,3.338-25.593,9.152-36.164   c33.354,44.092,83.176,73.356,139.341,77c-1.168-5.257-1.753-10.738-1.753-16.329c0-39.53,30.267-71.075,67.599-70.463   c19.444,0.334,37.025,9.263,49.35,23.284c15.411-2.949,29.876-8.624,42.923-16.552c-5.035,16.496-15.772,30.238-29.737,38.834   c13.687-1.53,26.705-5.146,38.834-10.626c-9.068,14.104-20.53,26.427-33.743,36.275c0.139,3.06,0.194,6.12,0.194,9.18   c0,93.859-68.016,202.099-192.363,202.043C206.689,447.232,171.138,435.271,141.233,414.741z" style="fill: #fff; fill-rule: evenodd;"/>
				</svg>
			</a>

			<a href="mailto:info@kieranhorgan.com">
				<!-- And this one is an email logo -->
				<svg width="612px" height="612px" viewBox="0 0 612 612">
					<path d="M 0, 0 H 612 V 612 H 0 L 0 10 M 306.017,323.436 100.847,153.407 H 511.751 L 306.017,323.436 z M 305.983,378.898 100,208.244 V 458.593 H 512 V 208.653 L 305.983,378.898 z" style="fill:#fff; fill-rule:evenodd"/>
				</svg>
			</a>

		</section>
	


<!--
================================================================================================================================
||                                                                                                                            ||
||                                                    G R E E T I N G                                                         ||
||                                                                                                                            ||
================================================================================================================================
-->     <section id="greeting">

			<!-- Welcome text that bounces down. Spans are used to seperate the words for the
				 bouncing effect -->
			<h1>
				<span>Hello</span 
				><span>,</span> <!-- Sneaky angle bracket to stop space between "Hello" and the comma -->
				<span>I'm</span>
				<span>Kieran</span>
				<span>Horgan</span>
			</h1>

			<!-- Scroll down to the trigger that hides the Greeting section, i.e. go to the About section-->
			<img src="images/Down Arrow.svg" alt="" onclick="scrollToSection('#greetingHideTrigger')">

		</section>



<!--
================================================================================================================================
||                                                                                                                            ||
||                                                       A B O U T                                                            ||
||                                                                                                                            ||
================================================================================================================================
--> 	<section id="about">

			<!-- 5 Roatated squares (diamonds), styled using CSS for the fancy parallax effect -->
			<!-- See https://dixonandmoe.com/rellax/ for more info on this Javascript Plugin -->
			<span class="aboutRellax" data-rellax-speed="-8"></span>
			<span class="aboutRellax" data-rellax-speed="-5"></span>
			<span class="aboutRellax" data-rellax-speed="-3"></span>
			<span class="aboutRellax" data-rellax-speed="1"></span>
			<span class="aboutRellax" data-rellax-speed="9"></span>

			<!-- Container of content, mainly here for responsive reasons -->
			<div class="container">
				<h2><span>Who Am I?</span></h2> <!-- Span is for the blue underline -->

				<p>
				I am a 16 year old programmer, web developer and problem solver. Currently a 4th Year student at Davis College, Mallow, I have been programming for about 6 years.
				<br>
				I started coding when my local CoderDojo first opened and from there I started teaching myself to code. I now mentor at that dojo, and I also have a passion for "Competitive Programming".
				</p>

				<!-- div containing the image is so that the image can be centered in the remaining space -->
				<div>
					<img src="images/DTS image.jpg" alt="Picture of me, Kieran Horgan, at the 2017 Dublin Tech Summit">
				</div>
			</div>

				<!-- 2 more scroll effect triggers -->
			<div id="workShowTrigger"></div>
			<div id="workPinTrigger"></div>
		</section>
	


<!--
================================================================================================================================
||                                                                                                                            ||
||                                                        W O R K                                                             ||
||                                                                                                                            ||
================================================================================================================================
-->     <section id="work">

			<h2 class="container">Some of My Work</h2>
			
			<!-- Coloured progress bar -->
			<div id="workProgress"></div>

			<!-- Section containing all the slides of my work -->
			<!-- The individual slides are in reverse orderin orfer to have the slides scrolling in from right of the page -->
			<section id="slidesContainer">

				<!-- id's are needed for Hammer, to allow touchscreen users to wipe through slides -->
				<!-- Scroll InTo slide section -->
				<section id="slide3" class="slide">
					<div class="container">
						<h3>Scroll InTo</h3>
						<span class="line"></span>
						<a href="http://scrollinto.kieranhorgan.com" class="button">View Site</a>
					</div>

					<div id="background"></div>
				</section>


				<!-- Ultimate Tic-Tac-Toe slide section -->
				<section id="slide2" class="slide">
					<div class="container">
						<h3>Ultimate Tic-Tac-Toe</h3>
						<span class="line"></span>
						<a href="http://utictactoe.com" class="button">View Site</a>
					</div>

					<div id="background"></div>
				</section>
				
				<!-- CoderDojo Mallow slide section -->
				<section id="slide1" class="slide">
					<!-- eir(com) Junior Spiders awards badges -->
					<div id="CDMAwards">
						<div><img src="images/junior_spiders/GP.png" alt=""></div>
						<div><img src="images/junior_spiders/BWD.png" alt=""></div>
						<div><img src="images/junior_spiders/BIP.png" alt=""></div>
						<div><img src="images/junior_spiders/CWC.png" alt=""></div>
					</div>

					<div class="container">
						<h3>CoderDojo Mallow</h3>
						<span class="line"></span>
						<a href="http://coderdojomallow.com" class="button">View Site</a>
					</div>

					<div id="background"></div>
				</section>

			</section>

		</section>

	

<!--
================================================================================================================================
||                                                                                                                            ||
||                                                A C H I E V E M E N T S                                                     ||
||                                                                                                                            ||
================================================================================================================================
--> 	<section id="achievements">
			<div class="container">
				<h2>
					<span>My Achievements &amp; Experience</span>
				</h2>

				<ul>
					<li>
						Placed 2<sup>nd</sup> in the 2017 All-Ireland Programming Olympiad
					</li>
					<li>
						Will represent Ireland at IOI 2017 in Tehran, Iran
					</li>
					<li>
						Team Ireland member at IOI 2016 in Kazan, Russia
					</li>
					<li>
						Came 1<sup>st</sup> in the 2017 Irish Collegiate Programming Competition (IrlCPC) out of the secondary school teams and 4<sup>th</sup> overall, including 3<sup>rd</sup> level teams
					</li>
					<li>
						Represented Ireland with my school at the 2016 Vex Robotics World Championships
					</li>
					<li>
						Winner of 4 <a href="//juniorspiders.ie">eir Junior Spider awards</a> in 2015 <i>(Best Web Design, Best Individual Project, Creative Web Coding, Grand Prix Award)</i>
					</li>
					<li>
						Irish Vex Robotics Tournament Champions 2015
					</li>
					<li>
						Worked at <a href="http://wallwebdesign.ie/">Wall Web Design</a> for a week as part of my TY work experience
					</li>
					<li>
						Mentor at <a href="http://coderdojomallow.com">CoderDojo Mallow</a> for about 4 years, teaching HTML, CSS, JavaScript and Python to young people aged from 7 to 17 
					</li>
				</ul>

				<img src="images/AIPO.jpg">

			</div>
		</section>
	


<!--
================================================================================================================================
||                                                                                                                            ||
||                                                     C O N T A C T                                                          ||
||                                                                                                                            ||
================================================================================================================================
-->     <section id="contact">
			<div class="container">

				<h2>Contact Me</h2>

				<p>Twitter - <a href="https://twitter.com/KieranJHorgan">@KieranJHorgan</a></p>
				<p>Email - <a href="mailto:info@kieranhorgan.com">info@kieranhorgan.com</a></p>

				<!-- Form sent using server-side PHP -->
				<p>Or fill out this short form</p>
				<form action="/#contact" method="post">
					<div>
						<input type="text" name="name" placeholder="Name">
						<input type="email" name="email" placeholder="Email address">
						<input type="text" name="subject" placeholder="Subject">
					</div>
					<div>
						<textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
					</div>  
					<input type="submit" name="submit" value="Submit" id="input-submit">
				</form>
				
				<?php
// if submit is clicked
if (isset($_POST['submit'])) {

	// Set variables to form input
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    // Email body
    $body .= "Name: ".clean_string($name)."\n"; 
    $body .= "Email: ".clean_string($email)."\n";
    $body .= "Comments: ".clean_string($message)."\n";

	// Create email headers
	$headers = 'From: '.$email."\r\n".
		       'Reply-To: '.$email."\r\n" . 
			   'X-Mailer: PHP/' . phpversion();

	// Success
    if (mail('info@kieranhorgan.com', $subject, $body, $headers) and mail('kieranhorgancom@gmail.com', $subject, $body, $headers)) { 
        echo("<p>Message sent successfully</p>");

    // Failed
    } else {
		echo("<p>Something went wrong and your message did not send. Please try again</p>");
    }
}
			?>

			</div>
		</section>
		
		
		<!-- 2 triggers for javascript scroll effect (see js/main.js), both positioned with CSS-->
		<div id="greetingHideTrigger"></div>

		<!-- JQuery for easier DOM access -->
		<script src="js/jquery.min.js"></script>
		<!-- quickfit.js for resizing text later -->
		<script src="js/jquery.quickfit.js"></script>

		<script src="js/rellax.js"></script>

		<script src="js/GSAP/TweenLite.min.js"></script>
		<script src="js/GSAP/EasePack.min.js"></script>
		<script src="js/GSAP/CSSPlugin.min.js"></script>

		<script src="js/ScrollMagic.js"></script>
		<script src="js/animation.gsap.js"></script>

		<script src="js/hammer.min.js"></script>
		
		<!-- Debugging tool for ScrollMagic to show the position of the scroll effect triggers
		<script src="js/debug.addIndicators.min.js"></script>
		-->

	<script src="js/main.js?<?php echo date('l jS \of F Y h:i:s A'); ?>"></script>
	
	</div>
	</body>
</html>