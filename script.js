function showMessage() {
  document.getElementById("message").style.display = "block";
  createEffects();
}

function createEffects() {
  const effects = document.getElementById("effects");
  const symbols = ["✨", "🎊", "💫", "🎉"];

  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.classList.add("effect");
    span.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "-20px";
    span.style.animationDuration = "5s";

    effects.appendChild(span);

    // Remove after 5 seconds
    setTimeout(() => {
      span.remove();
    }, 5000);
  }
}
