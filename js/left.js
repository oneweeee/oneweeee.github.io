document.addEventListener("DOMContentLoaded", () => {
  const downloadWrapper = document.querySelector(".download-wrapper");

  function handleDownloadScroll() {
    const rect = downloadWrapper.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.4 && rect.bottom > 0) {
      downloadWrapper.classList.add("visible");
    } else {
      downloadWrapper.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleDownloadScroll);
  window.addEventListener("resize", handleDownloadScroll);
  handleDownloadScroll(); // запуск при загрузке
});