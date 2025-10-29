document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.finance-img');

    // Распределяем стороны
    images.forEach((img, index) => {
        if (!img.classList.contains("left") && !img.classList.contains("right")) {
            img.classList.add(index % 2 === 0 ? "left" : "right");
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    images.forEach(img => observer.observe(img));
});


window.addEventListener("scroll", () => {
  const images = document.querySelectorAll(".social-img");

  images.forEach((img) => {
    const rect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Чем ближе к центру экрана — тем больше scale
    const distanceToCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);
    const maxDistance = windowHeight / 2 + rect.height / 2;
    const progress = Math.min(1, 1 - distanceToCenter / maxDistance); // от 0 до 1

    const scale = 0.5 + 0.5 * progress; // от 0.5 до 1
    img.style.transform = `scale(${scale})`;
  });
});
