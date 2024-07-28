const darkModeToggle = document.querySelector(".toggle");

darkModeToggle.addEventListener("click", () => {
  darkModeToggle.classList.toggle("active");
  document.body.classList.toggle("darkmode");
});
