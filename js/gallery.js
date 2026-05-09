document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const selected = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        const show = selected === "all" || selected === category;
        item.style.display = show ? "block" : "none";
      });
    });
  });

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const src = img?.getAttribute("src");
      const alt = img?.getAttribute("alt") || "Gallery image";
      if (!src || !lightbox || !lightboxImage) return;
      lightboxImage.src = src;
      lightboxImage.alt = alt;
      lightbox.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox?.classList.remove("show");
    document.body.style.overflow = "";
  }

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});
