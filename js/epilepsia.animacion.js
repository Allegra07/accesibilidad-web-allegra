
const modal = document.getElementById('epilepsia-modal');
const flashing = document.getElementById('epilepsia-flashing');
const info = document.getElementById('epilepsia-info');
const startBtn = document.getElementById('epilepsia-start');
const stoptBtn = document.getElementById('epilepsia-stop');

startBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    flashing.style.display = 'flex';
});

stoptBtn.addEventListener('click', () => {
    flashing.style.display = 'none';
    info.style.display = 'block';
});
