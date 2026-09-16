const header = document.querySelector("header");
const coaster = document.querySelector(".roller-coaster");
const coasterTrack = document.querySelector(".coaster-track");
const coasterCart = document.querySelector(".coaster-cart");
let cartDistance = 0;
let cartVelocity = 260;
let previousTimestamp = 0;
const gravity = 480;
const rollingResistance = 0.08;

function animateCoaster(timestamp) {
    if (coaster && coasterTrack && coasterCart) {
        const trackLength = coasterTrack.getTotalLength();
        const deltaTime = previousTimestamp ? Math.min((timestamp - previousTimestamp) / 1000, 0.05) : 0;
        const point = coasterTrack.getPointAtLength(cartDistance);
        const beforePoint = coasterTrack.getPointAtLength(Math.max(cartDistance - 2, 0));
        const afterPoint = coasterTrack.getPointAtLength(Math.min(cartDistance + 2, trackLength));
        const tangentLength = Math.hypot(afterPoint.x - beforePoint.x, afterPoint.y - beforePoint.y) || 1;
        const downhillSlope = (afterPoint.y - beforePoint.y) / tangentLength;
        const svg = coasterTrack.ownerSVGElement;
        const svgBounds = svg.getBoundingClientRect();
        const viewBox = svg.viewBox.baseVal;
        const scaleX = svgBounds.width / viewBox.width;
        const scaleY = svgBounds.height / viewBox.height;
        const x = (point.x - viewBox.x) * scaleX;
        const y = (point.y - viewBox.y) * scaleY;
        const angle = Math.atan2((afterPoint.y - beforePoint.y) * scaleY, (afterPoint.x - beforePoint.x) * scaleX) * 180 / Math.PI;

        coasterCart.style.left = `${x}px`;
        coasterCart.style.top = `${y}px`;
        coasterCart.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        cartVelocity += gravity * downhillSlope * deltaTime;
        cartVelocity *= Math.exp(-rollingResistance * deltaTime);
        cartVelocity = Math.max(cartVelocity, 70);
        cartDistance += cartVelocity * deltaTime;

        if (cartDistance >= trackLength) {
            cartDistance = 0;
            cartVelocity = 260;
        }
    }

    previousTimestamp = timestamp;
    window.requestAnimationFrame(animateCoaster);
}

window.requestAnimationFrame(animateCoaster);

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '25px',
    duration: 250,
    reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})