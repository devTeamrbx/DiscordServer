
const meineLinks = [
    { name: "Google", url: "https://google.de" },
    { name: "Spiegel", url: "https://spiegel.de" },
    { name: "YouTube", url: "https://youtube.com" }
];


const container = document.getElementById("button-container");
meineLinks.forEach(link => {
    const button = document.createElement("a");
    button.href = link.url;
    button.innerText = link.name;
    button.className = "link-button";
    button.target = "_blank";
    container.appendChild(button);
});


const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    menuBtn.classList.toggle("open");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("open");
}

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);


const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
updateToggleUI(savedTheme);

themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleUI(newTheme);
});

function updateToggleUI(theme) {
    if (theme === "dark") {
        themeIcon.innerText = "☀️";
        themeText.innerText = "Light Mode";
    } else {
        themeIcon.innerText = "🌙";
        themeText.innerText = "Dark Mode";
    }
}
