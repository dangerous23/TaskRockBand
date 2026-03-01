const popup = document.getElementById("popup");
const mobileMenu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector(".mobile-open-btn");
const closeBtn = document.getElementById("closeMenu");
const closeNav = document.getElementById("nav");
//------------orderTicet---------//
document.addEventListener("click", (e) => {
  if (e.target.dataset.popup) {
    popup.classList.add("active");
  }
});

document.getElementById("closePopup").onclick = () =>
  popup.classList.remove("active");
//------------modalMenu---------//

openBtn.addEventListener("click", () => {
 mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
closeNav.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});



document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) return;

  const params = new URLSearchParams(new FormData(form)).toString();
  fetch(`https://example.com/?${params}`, { method: "GET" }).then(() => {
    popupText.textContent = "Форма успішно відправлена";
    popup.classList.add("active");
    form.reset();
  });
});
