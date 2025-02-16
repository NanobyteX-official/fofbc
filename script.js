//Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e){
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

//Scroll-triggered Animations
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
	sections.forEach(section => {
		const sectionTop = section.getBoundingClientRect().top;
		if(sectionTop < window.innerHeight - 100){
			section.classList.add('in-view');
		}
	});
});

console.log("Website animations are active");

//List of background images
const images = [
	'media/images/bg-image1.jpg',
	'media/images/mummy-n-daddy.jpg',
	'media/images/ps-n-the-kids.jpg',
	'media/images/award1.jpg',
	'media/images/award2.jpg',
	'media/images/mummy-week2.jpg',
	];

//Getting the background element
const background = document.getElementById('background');

//Creating two layers for the background
const bg1 = document.createElement('div');
const bg2 = document.createElement('div');
bg1.classList.add('bg1');
bg2.classList.add('bg2');
background.appendChild(bg1);
background.appendChild(bg2);

//Initializing variables
let currentIndex = 0;
let currentLayer = bg1;
let nextLayer = bg2;

//Function to change background
function changeBackground(){
	nextLayer.style.backgroundImage = `url(${images[currentIndex]})`;

	currentLayer.classList.remove('active');
	nextLayer.classList.add('active');

	const temp = currentLayer;
	currentLayer = nextLayer;
	nextLayer = temp;

	currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, 5000);

//Go to Top button
console.log("Script Loaded");
document.getElementById("DOMContentLoaded", function(){
	const backToTopButton = document.getElementById("backToTop");

	console.log("Scroll event triggered");
	function toggleBackToTopButton(){
		if(window.scrollY > 300){
			backToTopButton.classList.add("show");
			backToTopButton.classList.remove("hide");
		} else{
			backToTopButton.classList.add("hide");
			backToTopButton.classList.remove("show");
		}
	}

	console.log("Button clicked");
	window.addEventListener("scroll", toggleBackToTopButton);

	backToTopButton.addEventListener("click", function(){
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});

document.querySelector('.donate-btn').addEventListener('click', () => {
	alert('Thank you for supporting Family of Faith Bible Church. God richly bless you!');
});

document.querySelector('.pay-now').addEventListener('click', () => {
	alert('Thank you for supporting Family of Faith Bible Church. God richly bless you!');
});