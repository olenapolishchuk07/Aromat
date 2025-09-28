document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".menu-item");
  const popup = document.getElementById("popup");
  const popupFrame = document.getElementById("popup-image-frame");
  const popupName = document.getElementById("popup-name");
  const popupSizes = document.getElementById("popup-sizes");
  const closeBtn = document.querySelector(".popup .close");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const name = item.getAttribute("data-name");
      const img = item.getAttribute("data-img");

      // --- фото ---
      popupFrame.innerHTML = "";
      if (img && img.trim() !== "") {
        const image = document.createElement("img");
        image.src = img;
        image.alt = name;
        popupFrame.appendChild(image);
      } else {
        const noImg = document.createElement("div");
        noImg.classList.add("no-image");
        popupFrame.appendChild(noImg);
      }

      // --- назва ---
      popupName.textContent = name;

      // --- кнопки розмірів ---
      popupSizes.innerHTML = ""; // очищаємо попередні
      let sizes = ["S", "M", "L"];

      // якщо американо → без L
      if (name === "Американо") {
        sizes = ["S", "M"];
      }

      sizes.forEach(size => {
        const btn = document.createElement("button");
        btn.textContent = size;
        popupSizes.appendChild(btn);
      });

      // --- показати вікно ---
      popup.classList.add("active");
    });
  });

  // --- закриття ---
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
});
