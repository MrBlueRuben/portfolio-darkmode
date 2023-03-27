const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) { // If dark theme is enabled
    toggleIcon.classList.remove("sun-solid.svg");
    toggleIcon.classList.add("moon-solid.svg");
    toggleText.innerHTML = "Dark Mode";
    toggleIcon.src = "assets/moon-solid.svg";
  }
  else { // If dark theme is disabled
    toggleIcon.classList.remove("moon-solid.svg");
    toggleIcon.classList.add("sun-solid.svg");
    toggleText.innerHTML = "Light Mode";
    toggleIcon.src = "assets/sun-solid.svg";
  }
});
