
document.addEventListener("DOMContentLoaded", () => {
const cursorWrapper = document.querySelector('.cursor-line-wrapper');

    document.addEventListener('mousemove', (e) => {
        if (cursorWrapper) {
         cursorWrapper.style.left = `${e.clientX - 50}px`;
         cursorWrapper.style.top = `${e.clientY + 20}px`;
        }
    });

});