let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
}

if (darkmode === "active") {
  enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
  //   the above is just a shorthand for an if-else statement, if first condition
  // is true, it will execute the first function, otherwise the second one
});
