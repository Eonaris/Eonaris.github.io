const bootScreen = document.getElementById("boot-screen");
const mainSite = document.getElementById("main-site");

const bootLines = [

"Booting system...",
"Loading modules...",
"Initializing interface...",
"Authenticating user...",
"",
"Access granted.",
"",
"Welcome, Eonaris."

];

let lineIndex = 0;

function typeLine(text, i = 0){

if(i < text.length){

bootScreen.lastChild.textContent += text.charAt(i);

setTimeout(() => typeLine(text, i + 1), 30);

}else{

setTimeout(nextLine, 400);

}

}

function nextLine(){

if(lineIndex < bootLines.length){

const line = document.createElement("div");

bootScreen.appendChild(line);

typeLine(bootLines[lineIndex]);

lineIndex++;

}else{

setTimeout(() => {

bootScreen.style.display = "none";

mainSite.classList.remove("hidden");

}, 800);

}

}

nextLine();
