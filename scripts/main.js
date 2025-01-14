// Toogle Theme
const toogleTheme = document.getElementById("toogle-theme");
const htmlTheme = document.getElementById("html-theme");

toogleTheme.addEventListener("click", () => {
    const htmlThemeClassList = htmlTheme.classList;

    if (htmlThemeClassList.contains("light")) {
        htmlThemeClassList.replace("light", "dark");
        toogleTheme.src = "./icons/light.png";
    } else {
        htmlThemeClassList.replace("dark", "light");
        toogleTheme.src = "./icons/dark.png";
    }
});
