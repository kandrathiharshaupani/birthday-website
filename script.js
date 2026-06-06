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