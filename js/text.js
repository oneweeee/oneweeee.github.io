document.addEventListener("DOMContentLoaded", function () {
  // === Анимация .about-text ===
  const container = document.querySelector(".about-text");
  const aboutSection = document.querySelector(".about");
  const fullText = `"Трати Крати" — это не приложение, а ваш личный финансовый тролль. Здесь каждая трата встречается едким комментарием, аналитика подаётся в формате демотиваторов, которые кричат "Эй, расточитель!" — так мы превращаем рутину бюджетирования в игру, где вы либо побеждаете свои привычки, либо получаете эпическую порцию стыда.`;

  container.innerHTML = "";
  for (let char of fullText) {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.color = "rgba(0, 0, 0, 0.2)";
    span.style.transition = "color 0.2s ease-out";
    container.appendChild(span);
  }

  const spans = container.querySelectorAll("span");

  function updateAboutOpacity() {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || window.pageYOffset;
    const elementTop = rect.top + scrollTop;
    const sectionHeight = 600;

    const progress = Math.min(Math.max((scrollTop + windowHeight - elementTop) / (sectionHeight + windowHeight), 0), 1);
    const visibleChars = Math.floor(progress * spans.length);

    spans.forEach((span, i) => {
      const intensity = Math.max(0, Math.min(1, ((progress * spans.length - i) / 10)));
      span.style.color = i < visibleChars ? `rgba(0, 0, 0, ${intensity.toFixed(2)})` : `rgba(0, 0, 0, 0.2)`;
    });
  }

  window.addEventListener("scroll", updateAboutOpacity);
  window.addEventListener("resize", updateAboutOpacity);
  updateAboutOpacity();

  // === Цитата в .about-blockquote p:nth-child(1) ===
  const quoteText = `«Человек — единственное существо,\nкоторое тратит деньги, которых у него нет,\nна ненужные вещи, чтобы впечатлить людей,\nкоторых он терпеть не может».`;
  const quoteElement = document.querySelector(".about-blockquote p:nth-child(1)");
  if (quoteElement) {
    quoteElement.innerHTML = "";

    for (let char of quoteText) {
      if (char === "\n") {
        quoteElement.appendChild(document.createElement("br"));
        continue;
      }
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.color = "rgba(0, 0, 0, 0.1)";
      span.style.transition = "color 0.2s ease-out";
      quoteElement.appendChild(span);
    }

    const quoteSpans = quoteElement.querySelectorAll("span");
    const quoteBlock = document.querySelector(".about-blockquote");

    function updateQuoteOpacity() {
      const rect = quoteBlock.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || window.pageYOffset;
      const blockTop = rect.top + scrollTop;
      const blockHeight = 400;

      const progress = Math.min(Math.max((scrollTop + windowHeight - blockTop + 750) / (blockHeight + windowHeight), 0), 5);
      const visibleChars = Math.floor(progress * quoteSpans.length);

      quoteSpans.forEach((span, i) => {
        span.style.color = i < visibleChars ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.1)";
      });
    }

    window.addEventListener("scroll", updateQuoteOpacity);
    window.addEventListener("resize", updateQuoteOpacity);
    updateQuoteOpacity();
  }

  // === Блоки .finance-text и .finance-text-accent ===
const financeSections = [
  {
    selector: ".finance-text",
    text: `"Трати Крати” — это не просто цифры\nв таблице. Это ваш личный тролль-коуч,\nкоторый превращает финансовые\nпровалы в уроки с юмором.`,
  },
  {
    selector: ".finance-text-accent",
    text: `Чем чаще вы ошибаетесь, тем язвительнее\nстановятся уведомления. Хотите мотивации?\nПопробуйте потратить зарплату за три дня —\nнаши комментарии запомнятся на всю жизнь.`
  }
];

financeSections.forEach(({ selector, text }) => {
  const el = document.querySelector(selector);
  if (!el) return;

  el.innerHTML = "";

  const lines = text.split('\n');
  const spanList = [];

  lines.forEach((line, lineIndex) => {
    for (let char of line) {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.color = "rgba(255, 255, 255, 0.1)";
      span.style.transition = "color 0.2s ease-out";
      el.appendChild(span);
      spanList.push(span);
    }

    if (lineIndex < lines.length - 1) {
      el.appendChild(document.createElement("br"));
    }
  });

  function updateFinanceOpacity() {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || window.pageYOffset;
    const blockTop = rect.top + scrollTop;
    const blockHeight = el.offsetHeight + 400;

    const progress = Math.min(Math.max((scrollTop + windowHeight - blockTop) / (blockHeight + windowHeight), 0), 1);
    const visibleChars = Math.floor(progress * spanList.length);

    spanList.forEach((span, i) => {
      span.style.color = i < visibleChars ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.1)";
    });
  }

  window.addEventListener("scroll", updateFinanceOpacity);
  window.addEventListener("resize", updateFinanceOpacity);
  updateFinanceOpacity();
});

});
