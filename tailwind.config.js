/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                "custom-blue": "#295F98",
                "custom-blue-hover": "#0350A1",
                "custom-orange": "#F6995C",
                "custom-orange-hover": "#FF7F2B",
                "custom-black": "#41444B",
                "custom-white": "#FBFBFB",
                "custom-dark": "#3A3D43",
                "custom-light": "#F2F3F3",
            },
        },
    },
    darkMode: "selector",
    plugins: [],
};
