/* ---------------------------------
GANESH FESTIVAL WEBSITE SCRIPT
SRI GOWRI GANESHA GELEYARA BALAGA
---------------------------------- */

document.addEventListener("DOMContentLoaded", function(){

initializeCountdown();
initializeGalleryLightbox();
startFireworks();


});


/* ---------------------------------
COUNTDOWN TIMER
---------------------------------- */

function initializeCountdown(){

const festivalDate = new Date("September 14, 2026 11:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();
const distance = festivalDate - now;

if(distance <= 0){

document.getElementById("days").innerText = "0";
document.getElementById("hours").innerText = "0";
document.getElementById("minutes").innerText = "0";
document.getElementById("seconds").innerText = "0";

return;

}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

if(d && h && m && s){

d.innerText = days;
h.innerText = hours;
m.innerText = minutes;
s.innerText = seconds;

}

}

updateCountdown();
setInterval(updateCountdown,1000);

}


/* ---------------------------------
GALLERY LIGHTBOX
---------------------------------- */

function initializeGalleryLightbox(){

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.classList.add("lightbox-overlay");

const lightboxImg = document.createElement("img");

lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

galleryImages.forEach(img => {

img.addEventListener("click", function(){

lightbox.style.display = "flex";
lightboxImg.src = this.src;

});

});

lightbox.addEventListener("click", function(){

lightbox.style.display = "none";

});

document.addEventListener("keydown", function(e){

if(e.key === "Escape"){
lightbox.style.display = "none";
}

});

}


/* ---------------------------------
FIREWORK PARTICLES
---------------------------------- */

function startFireworks(){

const canvas = document.createElement("canvas");

canvas.id = "fireworksCanvas";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});

function drawFirework(){

const x = Math.random()*canvas.width;
const y = Math.random()*canvas.height;
const radius = Math.random()*3 + 2;

ctx.beginPath();
ctx.arc(x,y,radius,0,Math.PI*2);

ctx.fillStyle = "gold";
ctx.fill();

}

setInterval(drawFirework,1200);

}


/* ---------------------------------
AARTI BELL SOUND
---------------------------------- */

function initializeAartiBell(){

const bellButton = document.getElementById("aartiBell");
const bellSound = document.getElementById("bellSound");

if(!bellButton || !bellSound) return;

bellButton.addEventListener("click", function(){

bellSound.currentTime = 0;
bellSound.play();

});

}
function toggleMenu(){

const menu = document.getElementById("navMenu");

menu.classList.toggle("show");

}