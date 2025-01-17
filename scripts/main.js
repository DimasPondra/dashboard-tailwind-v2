// Toogle Theme
const toogleTheme = document.getElementById("toogle-theme");
const htmlTheme = document.getElementById("html-theme");
const iconSelect = document.getElementById("icon-select");

toogleTheme.addEventListener("click", () => {
    const htmlThemeClassList = htmlTheme.classList;

    if (htmlThemeClassList.contains("light")) {
        htmlThemeClassList.replace("light", "dark");
        toogleTheme.src = "./icons/light.png";

        iconSelect.src = "./icons/arrow-down-circle-white.png";
    } else {
        htmlThemeClassList.replace("dark", "light");
        toogleTheme.src = "./icons/dark.png";

        iconSelect.src = "./icons/arrow-down-circle.png";
    }
});
