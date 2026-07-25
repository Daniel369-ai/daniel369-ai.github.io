// ================================
// Daniel Portfolio JavaScript
// ================================

// Typing Animation

const typing = document.getElementById("typing");

const words = [
"Cybersecurity Enthusiast",
"AI Developer",
"Python Programmer",
"Linux User",
"Computer Science Graduate",
"Ethical Hacking Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(type,deleting ? 45 : 110);

}

type();


// Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

document.querySelectorAll("section,.project,.skill-card,.card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="all .8s ease";

observer.observe(el);

});


// Navbar Background

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.92)";

header.style.boxShadow="0 5px 25px rgba(0,212,255,.2)";

}else{

header.style.background="rgba(5,10,20,.65)";

header.style.boxShadow="none";

}

});


// Mouse Glow Effect

document.addEventListener("mousemove",e=>{

document.body.style.backgroundPosition=
`${e.clientX/40}px ${e.clientY/40}px`;

});


// Skill Hover Sound (Optional)

document.querySelectorAll(".skill-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 35px rgba(0,212,255,.6)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


// Current Year

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=`© ${new Date().getFullYear()} Daniel Ochai Inalegwu. All Rights Reserved.`;

}


// Welcome Message

setTimeout(()=>{

console.log("Welcome to Daniel's Portfolio");

},1000);
