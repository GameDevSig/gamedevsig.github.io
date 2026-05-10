let darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
let isDarkMode = darkModeQuery.matches;

function updateThemeOverride() {
    isDarkMode = darkModeQuery.matches;
    const dataTheme = document.documentElement.getAttribute("data-theme");
    const themeToggleButtons = document.getElementsByClassName('theme-toggle-button');
    if (dataTheme) {
        if (dataTheme == "dark") {
            setCookie("themeOverride", isDarkMode ? "" : "dark", 1);
            isDarkMode = true;
        } else if (dataTheme == "light") {
            setCookie("themeOverride", isDarkMode ? "light" : "", 1);
            isDarkMode = false;
        } else {
            setCookie("themeOverride", "", 1);
        }
    }
    for (let i = 0; i < themeToggleButtons.length; i++) {
        if (isDarkMode) {
            themeToggleButtons[i].innerHTML = '<i class="fa-solid fa-moon" style="width: 1em;"></i>';
        } else {
            themeToggleButtons[i].innerHTML = '<i class="fa-solid fa-sun" style="width: 1em;"></i>';
        }
    }
    if (typeof shaderMaterial !== 'undefined' && shaderMaterial.vertexShader) {
        updateThemeInRenderer();
    }
}

function setThemeOverride(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeOverride();
}

window.addEventListener('load', () => {
    updateThemeOverride();
    const themeToggleButtons = document.getElementsByClassName('theme-toggle-button');
    for (let i = 0; i < themeToggleButtons.length; i++) {
        themeToggleButtons[i].addEventListener('click', () => {
            if (isDarkMode) {
                setThemeOverride("light");
            } else {
                setThemeOverride("dark");
            }
        });
    }

    darkModeQuery.addEventListener("change", updateThemeOverride);
});