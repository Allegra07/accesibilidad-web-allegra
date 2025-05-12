

document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("titulo-dislexia");
    const content = text.textContent;
    text.innerHTML = "";
  
    
    for (let letter of content) {
      const span = document.createElement("span");
      span.textContent = letter;
      text.appendChild(span);
  
      span.addEventListener("mouseenter", () => {
        span.classList.add("active");
      });
  
      span.addEventListener("mouseleave", () => {
        span.classList.remove("active");
      });
    }
  });
  