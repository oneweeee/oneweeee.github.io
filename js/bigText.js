const aboutSection = document.querySelector('.about');
const title = document.querySelector('.about-big-text');

const observerNew = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  });
}, { threshold: 0.1 });

observerNew.observe(aboutSection);

function handleScroll() {
  const rect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const start = windowHeight * 0.85; 
  const end = rect.height + start;

  let progress = (start - rect.top) / end;

  progress = Math.min(Math.max(progress, 0), 1);

  const maxShift = -100;
  title.style.transform = `translateX(${progress * maxShift}%)`;
}


const financeSection = document.querySelector('.finance');
const financeTitle = document.querySelector('.finance-big-text');

const observerFinance = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.addEventListener('scroll', handleFinanceScroll);
    } else {
      window.removeEventListener('scroll', handleFinanceScroll);
    }
  });
}, { threshold: 0.1 });

observerFinance.observe(financeSection);

function handleFinanceScroll() {
  const rect = financeSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const start = windowHeight * 0.85; 
  const end = rect.height + start;

  let progress = (start - rect.top) / end;

  progress = Math.min(Math.max(progress, 0), 1);

  const maxShift = -100; 
  financeTitle.style.transform = `translateX(${progress * maxShift}%)`;
}
