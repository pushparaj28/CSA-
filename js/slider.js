document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".slide"));
  const dotsWrap = document.getElementById("sliderDots");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");
  let current = 0;
  let timer = null;

  const dots = slides.map((_, idx) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.setAttribute("aria-label", `Go to slide ${idx + 1}`);
    dot.addEventListener("click", () => {
      showSlide(idx);
      restartAuto();
    });
    dotsWrap?.appendChild(dot);
    return dot;
  });

  function showSlide(index) {
    slides.forEach((slide, idx) => slide.classList.toggle("active", idx === index));
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    timer = setInterval(nextSlide, 3000);
  }

  function restartAuto() {
    if (timer) clearInterval(timer);
    startAuto();
  }

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    restartAuto();
  });
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    restartAuto();
  });

  showSlide(0);
  startAuto();
});
