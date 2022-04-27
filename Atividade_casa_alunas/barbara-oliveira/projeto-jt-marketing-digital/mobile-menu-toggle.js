function toggleMobileMenu() {
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".mobile-container .icon");

  const visible = menu.classList.contains("visible");

  if (visible) {
    menu.classList.remove("visible");
    menuIcon.classList.remove("active");
  } else {
    menu.classList.add("visible");
    menuIcon.classList.add("active");
  }
}
