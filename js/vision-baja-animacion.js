
//Visión Baja
document.addEventListener("DOMContentLoaded", () => {

const container = document.getElementById('container');
let clearTextElem = null;
let maskCanvas = null;
let maskCtx = null;
const distanceThreshold = 10;

let lastX = null, lastY = null;
let clearTimer = null;


function initCanvas() {

    const rect = container.getBoundingClientRect();
    maskCanvas = document.createElement('canvas');
    maskCanvas.width = rect.width;
    maskCanvas.height = rect.height;
    maskCtx = maskCanvas.getContext('2d');
    maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
}

function drawCircle(x, y) {
  const innerRadius = 68;
  const outerRadius = 80;
  const gradient = maskCtx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  maskCtx.fillStyle = gradient;
  maskCtx.beginPath();
  maskCtx.arc(x, y, outerRadius, 0, Math.PI * 2);
  maskCtx.fill();
}

function updateMaskImage() {
  const dataURL = maskCanvas.toDataURL();
  clearTextElem.style.maskImage = `url(${dataURL})`;
  clearTextElem.style.webkitMaskImage = `url(${dataURL})`;
}

container.addEventListener('mousemove', (e) => {
  if (clearTimer !== null) {
    clearTimeout(clearTimer);
    clearTimer = null;
  }

  if (clearTextElem) {
    clearTextElem.style.opacity = 1;
  }

  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (!clearTextElem) {
    clearTextElem = document.createElement('div');
    clearTextElem.className = 'clear-text';
    clearTextElem.innerHTML = "Visión<br>Baja";
    container.appendChild(clearTextElem);
    initCanvas();
  }

  if (lastX === null || lastY === null || Math.hypot(x - lastX, y - lastY) > distanceThreshold) {
    drawCircle(x, y);
    updateMaskImage();
    lastX = x;
    lastY = y;
  }
});

container.addEventListener('mouseleave', () => {
  if (clearTextElem) {
    clearTextElem.style.opacity = 0;
    clearTimer = setTimeout(() => {
      maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
      updateMaskImage();
      lastX = lastY = null;
    }, 2000);
  }
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      window.location.href = 'index.html';
    }
  });


});

