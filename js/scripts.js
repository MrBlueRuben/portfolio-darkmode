const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");
const toggleImages = document.getElementById("toggle-images");
const rootStyles = document.documentElement.style;
console.log(rootStyles)
toggleTheme.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  // console.log(document.body)
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) { // If dark theme is enabled
    toggleIcon.classList.remove("sun-solid.svg");
    toggleIcon.classList.add("moon-solid.svg");
    toggleText.innerHTML = "Dark Mode";
    toggleIcon.src = "assets/moon-solid.svg";
    toggleImages.src = "assets/img/logo-fe-blanco.png";
  }
  else { // If dark theme is disabled
    toggleIcon.classList.remove("moon-solid.svg");
    toggleIcon.classList.add("sun-solid.svg");
    toggleText.innerHTML = "Light Mode";
    toggleIcon.src = "assets/sun-solid.svg";
    toggleImages.src = "assets/img/logo-fe-negro.png";
  }
});

toggleColors.addEventListener("click", (e) => {
  // console.log(e.target.dataset);
  // console.log(e.target.dataset.color);
  rootStyles.setProperty("--primary-color", e.target.dataset.color);


});
