
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "image/img/image-1.png", "image/img/image-2.png", "image/img/image-3.png",
    "image/img/image-4.png", "image/img/image-5.png", "image/img/image-6.png",
    "image/img/image-7.png", "image/img/image-8.png", "image/img/image-9.png",
    "image/img/image-10.png", "image/img/image-11.png", "image/img/image-12.png",
    "image/img/image-13.png", "image/img/image-14.png", "image/img/image-15.png",
    "image/img/image-16.png",
  ];

  const zone = document.getElementById("hero-zone");
  let index = 0;
  let lastX = null, lastY = null;
  let lastTriggerTime = 0;

  zone.addEventListener("mousemove", (e) => {
    const rect = zone.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = Date.now();

    if (lastX !== null && lastY !== null) {
      const deltaX = Math.abs(x - lastX);
      const deltaY = Math.abs(y - lastY);
      if (deltaX < 5 && deltaY < 5) return; // движение слишком мелкое
    }

    if (now - lastTriggerTime < 100) return;
    lastTriggerTime = now;

    lastX = x;
    lastY = y;

    spawnTrail(x, y);
  });

  function spawnTrail(x, y) {
    const img = document.createElement("img");
    img.src = images[index % images.length];
    img.className = "hero-image";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    zone.appendChild(img);

    requestAnimationFrame(() => {
      const rotate = ((Math.random() * 20) - 10).toFixed(1);
      img.style.opacity = "1";
      img.style.transform = `translate(-50%, -50%) scale(1) rotate(${rotate}deg)`;
    });

    setTimeout(() => {
      img.style.opacity = "0";
      img.style.transform = `translate(-50%, -50%) scale(0.8) rotate(0deg)`;
      setTimeout(() => {
        if (img.parentElement === zone) {
          zone.removeChild(img);
        }
      }, 400);
    }, 100);

    index++;
  }
});

