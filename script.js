const gif = document.getElementById('moving-gif');
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = 2; 
let dy = 2; 
const gifWidth = 100; 
const gifHeight = 100; 

function moveGif() {
    x += dx;
    y += dy;

    
    if (x + gifWidth >= window.innerWidth || x <= 0) {
        dx *= -1; 
    }
    if (y + gifHeight >= window.innerHeight || y <= 0) {
        dy *= -1; 
    }

    
    gif.style.left = `${x}px`;
    gif.style.top = `${y}px`;

    requestAnimationFrame(moveGif); 
}

moveGif();
