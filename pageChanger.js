const navlinkss = document.querySelectorAll(".nav_links");

const alllinkTags = Array.from(navlinkss);

alllinkTags.forEach(element => {
    const navpathname = new URL(element.href).pathname;

    if ((window.location.pathname === navpathname) || (window.location.pathname) === "/index.html" && (navpathname === "/")) {
        element.classList.add("navactive")
    }
});

if (location.href.includes("#")) {
    location.href.replace("#","")
}