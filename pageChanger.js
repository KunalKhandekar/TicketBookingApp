const navlinkss = document.querySelectorAll(".nav_links");

Array.from(navlinkss).forEach(element => {
    if (element.href.includes(window.location.pathname)) {
        element.classList.add("navactive")
    }
});

if (location.href.includes("#")) {
    location.href.replace("#","")
}