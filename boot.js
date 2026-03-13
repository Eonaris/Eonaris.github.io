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

let index = 0;

function showNextLine(){

if(index < bootLines.length){

const line = document.createElement("div");
line.textContent = bootLines[index];

bootScreen.appendChild(line);

index++;

setTimeout(showNextLine, 500);

}else{

setTimeout(() => {

bootScreen.style.display = "none";
mainSite.classList.remove("hidden");

}, 800);

}

}

showNextLine();
