// dates
function createNextTenDates(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentDate = new Date(dateString);
    let nextTenDates = [];
    for (let i = 0; i < 11; i++) {
        let day = currentDate.getDate();
        let monthName = months[currentDate.getMonth()];
        let formattedDate = `${day} ${monthName}`;
        nextTenDates.push(formattedDate);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return nextTenDates;
}

function getNextDays() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let monthIndex = currentDate.getMonth();
    let year = currentDate.getFullYear();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = months[monthIndex];
    let formattedDate = `${day} ${monthName}, ${year}`;
    let nextTenDates = createNextTenDates(formattedDate);

    return nextTenDates;
}

function cardAdder(htmlClass, img, title, duration, trailer) {

    const trailerlink = document.querySelector(".trailerVideo")
    trailerlink.src = trailer;
    const tendays = getNextDays();

    const details = `<div class="details ${htmlClass}">
<div class="image">
    <img src="${img}">
</div>
<div class="content">
    <div class="title-line">
        <h1>${title}</h1>
    <h2><i class="fa-regular fa-clock"></i> ${duration}</h2>
    </div>
    <div class="date-selector">
    <h2>Select the date:</h2>
    <div class="wrapper date">
                    <div class="icon"><i id="left" class="fa-solid fa-angle-left"></i></div>
                    <ul class="tabs-box">
                        <li class="tab active">${tendays[0]}</li>
                        <li class="tab">${tendays[1]}</li>
                        <li class="tab">${tendays[2]}</li>
                        <li class="tab">${tendays[3]}</li>
                        <li class="tab">${tendays[4]}</li>
                        <li class="tab">${tendays[5]}</li>
                        <li class="tab">${tendays[6]}</li>
                        <li class="tab">${tendays[7]}</li>
                        <li class="tab">${tendays[8]}</li>
                        <li class="tab">${tendays[9]}</li>
                    </ul>
                    <div class="icon"><i id="right" class="fa-solid fa-angle-right"></i></div>
                </div>
                </div>
</div>
</div>`

    const mainContainer = document.body.querySelector(".book");
    const newDetails = document.createElement("div")
    newDetails.innerHTML = details
    mainContainer.append(newDetails);
};

cardAdder(
    "madgaonExpress",
    "../image/poster/2.avif",
    "Madgaon Express",
    "2h 25m",
    "../trailer/Madgaon Express.mp4"
)

// slider Date and time
const tabsBox = document.querySelector(".tabs-box"),
    allTabs = tabsBox.querySelectorAll(".tab"),
    arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;
let startX;
let scrollLeft;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const startDragging = (e) => {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = tabsBox.scrollLeft;
}

const drag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX) * 2; // You can adjust the factor to control sensitivity
    tabsBox.scrollLeft = scrollLeft - walk;
    handleIcons(tabsBox.scrollLeft)
}

const stopDragging = () => {
    isDragging = false;
}

tabsBox.addEventListener("mousedown", startDragging);
tabsBox.addEventListener("touchstart", startDragging);

tabsBox.addEventListener("mousemove", drag);
tabsBox.addEventListener("touchmove", drag);

document.addEventListener("mouseup", stopDragging);
document.addEventListener("touchend", stopDragging);
