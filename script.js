// Typing Animation

let text =
"Happy Birthday! May your day be filled with love, joy, success and beautiful memories.";

let index = 0;

function typeWriter(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeWriter,50);
}
}

typeWriter();


// Countdown Timer

let count = 10;

let timer = setInterval(function(){

document.getElementById("countdown").innerHTML =
"🎁 Surprise opens in " + count + " seconds";

count--;

if(count < 0){

clearInterval(timer);

document.getElementById("countdown").innerHTML =
"🎉 Surprise Ready! Click the Gift Button 🎉";
}

},1000);


// Gift Function

function openGift(){

document.getElementById("giftMessage")
.style.display = "block";

document.getElementById("letter")
.style.display = "block";

document.getElementById("fireworks")
.style.display = "block";
}


// Slideshow

let images = [
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg"

];
let i = 0;

setInterval(function(){

i++;

if(i >= images.length){
i = 0;
}

document.getElementById("slide").src =
images[i];

},3000);


// Confetti

for(let c=0;c<50;c++){

let confetti =
document.createElement("div");

confetti.innerHTML = "🎊";

confetti.classList.add("confetti");

confetti.style.left =
Math.random()*100 + "vw";

document.body.appendChild(confetti);

let pos = -50;

setInterval(function(){

pos += 2;

if(pos > window.innerHeight){

pos = -50;
}

confetti.style.top = pos + "px";

},20);
}

// Effects: cloudy, rainy, rainbow, colorful
const body = document.body;
const rainCanvas = document.getElementById('rainCanvas');
let rainCtx = null;
let drops = [];
let rainAnimationId = null;

function resizeRain(){
	if(!rainCanvas) return;
	rainCanvas.width = window.innerWidth;
	rainCanvas.height = window.innerHeight;
}

function startRain(){
	if(!rainCanvas) return;
	cancelAnimationFrame(rainAnimationId);
	resizeRain();
	rainCtx = rainCanvas.getContext('2d');
	drops = [];
	for(let i=0;i<300;i++){
		drops.push({
			x: Math.random()*rainCanvas.width,
			y: Math.random()*rainCanvas.height,
			len: 10+Math.random()*20,
			vel: 4+Math.random()*10,
			opacity: 0.2+Math.random()*0.6
		});
	}
	function loop(){
		rainCtx.clearRect(0,0,rainCanvas.width,rainCanvas.height);
		rainCtx.strokeStyle = 'rgba(174,194,224,0.6)';
		rainCtx.lineWidth = 1;
		rainCtx.lineCap = 'round';
		for(let d of drops){
			rainCtx.beginPath();
			rainCtx.moveTo(d.x, d.y);
			rainCtx.lineTo(d.x - d.vel*0.3, d.y + d.len);
			rainCtx.strokeStyle = 'rgba(174,194,224,'+d.opacity+')';
			rainCtx.stroke();
			d.x += -1 - Math.random()*1.5;
			d.y += d.vel;
			if(d.y > rainCanvas.height){
				d.x = Math.random()*rainCanvas.width;
				d.y = -20;
			}
		}
		rainAnimationId = requestAnimationFrame(loop);
	}
	loop();
}

function stopRain(){
	if(rainAnimationId) cancelAnimationFrame(rainAnimationId);
	rainAnimationId = null;
	if(rainCtx) rainCtx.clearRect(0,0,window.innerWidth,window.innerHeight);
}

window.addEventListener('resize', resizeRain);

function setEffect(effect){
	body.classList.remove('cloudy','rainy','rainbow','colorful');
	stopRain();
	if(!effect || effect === 'none') return;
	body.classList.add(effect);
	if(effect === 'rainy') startRain();
}

// default: no effect
setEffect('none');


// Sparkles
const sparklesEl = document.getElementById('sparkles');
function makeSparkles(count=14){
	if(!sparklesEl) return;
	sparklesEl.innerHTML = '';
	for(let i=0;i<count;i++){
		const s = document.createElement('span');
		s.className = 'sparkle';
		s.innerText = '✨';
		s.style.left = Math.random()*100 + 'vw';
		s.style.top = Math.random()*100 + 'vh';
		s.style.animationDelay = (Math.random()*3)+'s';
		s.style.fontSize = (10 + Math.random()*18) + 'px';
		sparklesEl.appendChild(s);
	}
}

makeSparkles(18);
// Generate stars for night effect
function makeStars(count=80){
	const starsEl = document.getElementById('stars');
	if(!starsEl) return;
	starsEl.innerHTML = '';
	for(let i=0;i<count;i++){
		const s = document.createElement('div');
		s.className = 'star';
		s.style.left = Math.random()*100 + 'vw';
		s.style.top = Math.random()*100 + 'vh';
		s.style.width = (1+Math.random()*2) + 'px';
		s.style.height = s.style.width;
		s.style.opacity = 0.5 + Math.random()*0.9;
		starsEl.appendChild(s);
	}
}

makeStars(120);

// Autoplay attempt on load
// autoplay removed per user request

// Exit helper (used on thankyou page)
function exitSite(){
	try{
		// Try to close the window (works if opened by script)
		window.open('','_self');
		window.close();
	}catch(e){
		// ignore and continue to fallback UI
	}

	// If the browser blocked window.close(), show an overlay with instructions
	setTimeout(function(){
		if(!window.closed){
			if(document.getElementById('exitOverlay')) return;
			var overlay = document.createElement('div');
			overlay.id = 'exitOverlay';
			overlay.style.position = 'fixed';
			overlay.style.left = '0';
			overlay.style.top = '0';
			overlay.style.width = '100vw';
			overlay.style.height = '100vh';
			overlay.style.display = 'flex';
			overlay.style.alignItems = 'center';
			overlay.style.justifyContent = 'center';
			overlay.style.background = 'rgba(0,0,0,0.85)';
			overlay.style.color = '#fff';
			overlay.style.zIndex = '99999';
			overlay.innerHTML = `
			<div style="text-align:center; max-width:520px; padding:24px;">
				<h2 style="margin-bottom:12px">Thank you — you may close this tab</h2>
				<p style="margin-bottom:18px">Your session has ended. Click the button below to attempt to close the tab, or close the tab/window manually.</p>
				<button id="exitCloseBtn" style="padding:12px 18px; border-radius:8px; border:none; cursor:pointer; background:#fff; color:#000; font-weight:600;">Close Tab</button>
			</div>`;
			document.body.appendChild(overlay);
			document.getElementById('exitCloseBtn').addEventListener('click', function(){
				try{ window.open('','_self'); window.close(); }catch(e){ /* ignore */ }
			});
		}
	}, 400);
}

// Update slideshow image class when effect changes
const slideImg = document.getElementById('slide');
const originalSetEffect = setEffect;
setEffect = function(effect){
	body.classList.remove('cloudy','rainy','rainbow','colorful');
	stopRain();
	if(slideImg){ slideImg.className = ''; }
	if(!effect || effect === 'none') return;
	body.classList.add(effect);
	if(slideImg) slideImg.classList.add(effect);
	if(effect === 'rainy') startRain();
}