const themeToggleBtn = document.querySelector(".theme-toggle");

themeToggleBtn.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});