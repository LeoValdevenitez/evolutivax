export const openMenu = () => {
  const menu = document.querySelector(".popup-mobile-menu");
  if (menu) {
    menu.classList.add("active");
  } else {
    console.warn("Elemento .popup-mobile-menu no encontrado");
  }
};

export const closeMenu = () => {
  const menu = document.querySelector(".popup-mobile-menu");
  if (menu) {
    menu.classList.remove("active");
  } else {
    console.warn("Elemento .popup-mobile-menu no encontrado");
  }
};

