
const userLang = navigator.language.startsWith('de') ? 'de' : 'en';

function translateStaticElements() {
    document.querySelectorAll('[data-lang-de]').forEach(element => {
        element.innerText = element.getAttribute(`data-lang-${userLang}`);
    });
}

async function loadLinks() {
    try {
        const response = await fetch('links.json');
        const meineLinks = await response.json();
        
        const container = document.getElementById("button-container");
        meineLinks.forEach(link => {
            const button = document.createElement("a");
            button.href = link.url;
            button.innerText = link.name[userLang] || link.name['en'];
            button.className = "link-button";
            button.target = "_blank";
            container.appendChild(button);
        });
    } catch (error) {
        console.error("Fehler beim Laden der Links:", error);
    }
}

translateStaticElements();
loadLinks();

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

document.getElementById("year").innerText = new Date().getFullYear();

