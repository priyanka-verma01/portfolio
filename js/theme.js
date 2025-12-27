/* =========================
   THEME TOGGLE LOGIC
========================= */

const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

/* Load saved theme on page load */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeToggleBtn.textContent = "☀️";
} else {
    themeToggleBtn.textContent = "🌙";
}

/* Toggle theme on button click */
themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggleBtn.textContent = "🌙";
    }
});
