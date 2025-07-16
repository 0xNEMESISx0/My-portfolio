/*
    █▀█ █░█ █▀▄ █▀▀ █▄░█ █▀▀
    █▀▀ █▄█ █▄▀ ██▄ █░▀█ ██▄

    Developed by Ahmed Emad — 0xNEMESISx0
    Red Teamer 

    "Code is a weapon. Use it with precision."
*/



// Show header on scroll up, hide on scroll down
let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");
const sidebar = document.getElementById("scroll-sidebar");

window.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // طالع لفوق
        header.style.top = "0";
        sidebar.classList.remove("sidebar-visible");
        sidebar.classList.add("sidebar-hidden");
    } else {
        // نازل لتحت
        header.style.top = "-100px";
        sidebar.classList.remove("sidebar-hidden");
        sidebar.classList.add("sidebar-visible");
    }

    prevScrollPos = currentScrollPos;
});


console.log("%c☠️ Curious minds dig too deep...", "color: crimson; font-size: 18px; font-weight: bold;");
console.log("%cYou’ve just opened the rabbit hole.", "color: gray; font-size: 14px;");
console.log("%cNot everything you see was meant to be seen.", "color: darkred; font-style: italic;");