
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const about = document.querySelector('.about');
    const finance = document.querySelector('.finance');
    const rows = document.querySelectorAll('.row');
    
    // Настройки анимации
    const animationSettings = {
        heroParallax: true,
        aboutAppear: true,
        financeAppear: true, // Добавлена настройка для finance
        scrollSpeed: 0.7
    };

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        // Анимация about
        if (animationSettings.aboutAppear) {
            const progress = Math.min(scrollY / (heroHeight * animationSettings.scrollSpeed), 1);
            about.style.opacity = progress;
            about.style.transform = `translateY(${50 - progress * 50}px)`;
        }
        
        // Анимация finance
        if (animationSettings.financeAppear && finance) {
            // Начинаем анимацию finance позже, чем about
            const financeStart = heroHeight * 1.5;
            const progress = Math.min((scrollY - financeStart) / (heroHeight * animationSettings.scrollSpeed), 1);
            finance.style.opacity = progress;
            finance.style.transform = `translateY(${50 - progress * 50}px)`;
        }
        
        // Параллакс для карусели
        if (animationSettings.heroParallax && rows.length > 0) {
            rows[0].style.transform = `translateX(${scrollY * 0.5}px)`;
            rows[1].style.transform = `translateX(${-scrollY * 0.3}px)`;
            rows[2].style.transform = `translateX(${scrollY * 0.7}px)`;
        }
    });

    window.dispatchEvent(new Event('scroll'));
});


document.addEventListener("DOMContentLoaded", () => {
  const downloadWrapper = document.querySelector(".download-wrapper");

  function handleDownloadScroll() {
    const rect = downloadWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      downloadWrapper.classList.add("visible");
    } else {
      downloadWrapper.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleDownloadScroll);
  window.addEventListener("resize", handleDownloadScroll);
  handleDownloadScroll(); // запуск при загрузке
});