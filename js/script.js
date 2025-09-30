document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".menu-item");
  const popup = document.getElementById("popup");
  const popupFrame = document.getElementById("popup-image-frame");
  const popupName = document.getElementById("popup-name");
  const popupSizes = document.getElementById("popup-sizes");
  const closeBtn = document.querySelector(".popup .close");
  const closeButtons = document.querySelectorAll('.close');

  // --- Popup для додатку ---
  const appPopup = document.getElementById("app-popup");
  const appCloseBtn = appPopup.querySelector(".close");
  const appButtons = document.querySelectorAll(".download-btn, .hero button");

  appButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      appPopup.classList.add("active");
    });
  });

  appCloseBtn.addEventListener("click", () => {
    appPopup.classList.remove("active");
  });

  appPopup.addEventListener("click", (e) => {
    if (e.target === appPopup) {
      appPopup.classList.remove("active");
    }
  });

  // --- Ціни для кожного напою ---
  const prices = {
    "Еспресо": { S: 25, M: 30, L: 35 },
    "Лунго": { S: 30, M: 35, L: 40 },
    "Допіо": { S: 35, M: 40, L: 45 },
    "Американо": { S: 25, M: 30 },
    "Лате": { S: 40, M: 45, L: 50 },
    "Капучіно": { S: 35, M: 40, L: 45 },
    "Флет-вайт": { S: 40, M: 45, L: 50 },
    "Раф": { S: 45, M: 50, L: 55 },
    "Гарячий шоколад": { S: 35, M: 40, L: 45 },
    "Какао": { S: 30, M: 35, L: 40 },
    "Чай": { S: 25, M: 30, L: 35 },
    "Глінтвейн": { S: 50, M: 60, L: 70 },
    "Бамбл": { S: 45, M: 50, L: 55 },
    "Еспресо-тонік": { S: 40, M: 45, L: 50 },
    "Ісе-лате": { S: 40, M: 45, L: 50 },
    "Холодний Раф": { S: 45, M: 50, L: 55 },
    "Ісе-какао": { S: 35, M: 40, L: 45 },
    "Ісе-tea": { S: 30, M: 35, L: 40 }
  };

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

      // --- ціни по розмірах ---
      popupSizes.innerHTML = "";
      let sizes = prices[name] ? Object.keys(prices[name]) : [];

      sizes.forEach(size => {
        const p = document.createElement("p");
        p.textContent = `${size}: ${prices[name][size]} грн`;
        popupSizes.appendChild(p);
      });

      // --- показати вікно ---
      popup.classList.add("active");
    });
  });

  // --- закриття popup напоїв ---
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }

  // Додаткова доступність: клавіші Enter/Space для всіх кнопок закриття
  closeButtons.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
});
