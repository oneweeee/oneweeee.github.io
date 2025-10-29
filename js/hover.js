document.addEventListener('DOMContentLoaded', function() {
  const img1 = document.querySelector('.img-1');
  const img1Original = 'image/img/image-25.png';
  const img1Hover = 'image/img/image-27.png';
  
  const img2 = document.querySelector('.img-2');
  const img2Original = 'image/img/image-26.png';
  const img2Hover = 'image/img/image-28.png';

  const preloadImages = [];
  preloadImages.push(new Image().src = img1Hover);
  preloadImages.push(new Image().src = img2Hover);

  img1.addEventListener('mouseenter', function() {
    this.style.opacity = '0';
    setTimeout(() => {
      this.src = img1Hover;
      this.style.opacity = '1';
    }, 250);
  });

  img1.addEventListener('mouseleave', function() {
    this.style.opacity = '0';
    setTimeout(() => {
      this.src = img1Original;
      this.style.opacity = '1';
    }, 250);
  });


  img2.addEventListener('mouseenter', function() {
    this.style.opacity = '0';
    setTimeout(() => {
      this.src = img2Hover;
      this.style.opacity = '1';
    }, 250);
  });

  img2.addEventListener('mouseleave', function() {
    this.style.opacity = '0';
    setTimeout(() => {
      this.src = img2Original;
      this.style.opacity = '1';
    }, 250);
  });
});