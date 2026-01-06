const storageKey = "theme";
const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const label = document.querySelector("[data-theme-label]");
const themeMeta = document.querySelector("meta[name=\"theme-color\"]");
const media = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (label) {
        label.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
    }
    if (toggle) {
        toggle.setAttribute("aria-pressed", theme === "dark");
    }
    if (themeMeta) {
        themeMeta.setAttribute("content", theme === "dark" ? "#0b1216" : "#f5f3ef");
    }
}

function getPreferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
        return stored;
    }
    return media.matches ? "dark" : "light";
}

applyTheme(getPreferredTheme());

if (toggle) {
    toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        localStorage.setItem(storageKey, next);
        applyTheme(next);
    });
}

media.addEventListener("change", (event) => {
    if (localStorage.getItem(storageKey)) {
        return;
    }
    applyTheme(event.matches ? "dark" : "light");
});