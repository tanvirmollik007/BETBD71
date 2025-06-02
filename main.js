
let canvas = document.getElementById("aviatorGame");
let ctx = canvas.getContext("2d");
let animationId;
let planeX = 10;
let planeY = 150;
let speed = 2;

function drawPlane() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(planeX, planeY, 10, 0, Math.PI * 2);
    ctx.fill();
}

function animatePlane() {
    drawPlane();
    planeX += speed;
    if (planeX > canvas.width) {
        cancelAnimationFrame(animationId);
        document.getElementById("statusText").innerText = "Game Over - Plane Crashed!";
        return;
    }
    animationId = requestAnimationFrame(animatePlane);
}

function startGame() {
    planeX = 10;
    document.getElementById("statusText").innerText = "";
    animatePlane();
}
