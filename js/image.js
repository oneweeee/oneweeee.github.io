      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        const row1 = document.querySelector('.row-1');
        const row2 = document.querySelector('.row-2');
        const row3 = document.querySelector('.row-3');

        row1.style.transform = `translateX(calc(${scrollY * 0.5}px - 50%))`;
        row2.style.transform = `translateX(calc(${-scrollY * 0.3}px - 50%))`;
        row3.style.transform = `translateX(calc(${scrollY * 0.7}px - 50%))`;
      });

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const commentsRow = document.querySelector('.finance-comments');

  if (commentsRow) {
    commentsRow.style.transform = `translateX(${-scrollY * 0.3}px)`;
  }
});