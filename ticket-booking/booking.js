
import { pvr } from './data.js';



let url = window.location.href;
let url_segment = url.split('?');
const movie = (url_segment[1]);

switch (movie) {
    case "shaitaan":
        movieAdder
            (
                "shaitaan",
                "../image/poster/1.avif",
                "Shaitaan",
                "2h 12m",
                "../trailer/shaitaan.mp4"
            );
        break;
    case "madgaonExpress":
        movieAdder
            (
                "madgaonExpress",
                "../image/poster/2.avif",
                "Madgaon Express",
                "2h 25m",
                "../trailer/Madgaon Express.mp4"
            );
        break;
    case "veer":
        movieAdder
            (
                "veer",
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/swatantra-veer-savarkar-et00330062-1709646313.jpg",
                "Swatantrya Veer Savarkar",
                "2h 58m",
                "../trailer/Swatantrya Veer Savarkar.mp4"
            );
        break;
    case "panda":
        movieAdder
            (
                "panda",
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kung-fu-panda-4-et00379741-1706177646.jpg",
                "Kung Fu Panda 4",
                "1h 33m",
                "../trailer/KUNG FU PANDA 4.mp4"
            );
        break;
    case "yodha":
        movieAdder
            (
                "yodha",
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/yodha-et00318073-1710241050.jpg",
                "Yodha",
                "2h 13m",
                "../trailer/YODHA.mp4"
            );
        break;
    case "article370":
        movieAdder
            (
                "article370",
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/article-370-et00384444-1708669471.jpg",
                "Article 370",
                "2h 40m",
                "../trailer/Article 370.mp4"
            );
        break;
    case "dune":
        movieAdder
            (
                "dune",
                "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dune-part-two-et00331567-1706167890.jpg",
                "Dune: Part Two",
                "2h 46m",
                "../trailer/Dune Part Two.mp4"
            );
        break;
}

let activeTabInnerText;

function handleTabClick(event) {
    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    event.target.classList.add('active');

    // Store and log the inner text of the active tab
    activeTabInnerText = event.target.innerText;

    filterPVRByDate(activeTabInnerText)
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener("click", handleTabClick);
});


// to add the details of selected movie
function movieAdder
    (htmlClass, img, title, duration, trailer) {

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
                        <li class="tab">${tendays[0]}</li>
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

let addseats = (arr) => {
    arr.forEach((el) => {
        const { series, row_section, seat, price, a, b, c, d, e, f, g, h, i } = el;


        for (let index = 0; index < series.length; index++) {
            let row = document.createElement('div');
            row.className = 'row';

            let booked_seats = [];
            booked_seats = [...eval(series[index].toLocaleLowerCase())];
            // console.log(booked_seats);

            for (let seats = 0; seats < seat; seats++) {

                if (seats === 0) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span)
                }

                let li = document.createElement('div');
                let filter = booked_seats.filter(el => {
                    return el === seats;
                })

                if (filter.length > 0) {
                    li.className = 'chair booked';
                } else {
                    li.className = 'chair';
                }

                li.id = series[index] + seats;
                li.setAttribute('book', seats);
                li.setAttribute('sr', series[index]);
                li.innerText = price[index];

                li.onclick = () => {
                    if (li.className === 'chair booked') {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected')
                    }

                    let len = Array.from(document.getElementsByClassName('selected')).length;
                    if (len > 0) {
                        document.getElementById('button-n').style.display = 'flex'
                    } else {
                        document.getElementById('button-n').style.display = 'none'
                    }
                }

                row.appendChild(li);

                if (seats === seat-1) {
                    let span = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span)
                }
            }

            document.getElementById('seatsAdder').append(row);
        }
    })
}

function filterPVRByDate(selectedDate) {
    try {
        let data = pvr.filter(obj => obj.date === selectedDate && obj.movie === movie);
        console.log(data)
        if (data.length > 0) {
            addseats(data);
        } else {
            console.log("No data found for the selected date and movie.");
        }
    } catch (error) {
        console.error("Error occurred while filtering PVR:", error);
    }
}


document.getElementById('button-n').addEventListener('click', ()=>{
    Array.from(document.getElementsByClassName('selected')).forEach(el => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr').toLocaleLowerCase();


        let obj = {
            movie: movie,
            date: activeTabInnerText
        }

        let getData = pvr.map((obj) => {
            if (obj.movie === movie && obj.date === activeTabInnerText) {
                obj[seat_sr].push(+seat_no);
            }
            return obj;
        });


        document.getElementById('seatsAdder').innerHTML = '';
        let datamovie = getData.filter(obj=> obj.date === activeTabInnerText && obj.movie === movie);
        addseats(datamovie);

        document.querySelector('header').style.display = 'unset';
        document.querySelector('.ticket-container').style.display = 'block';
        document.querySelector('.book').style.display = 'none';
        document.querySelector('.book2').style.display = 'none';
        document.querySelector('.seat-detail').style.display = 'none';
        document.getElementById('button-n').style.display = 'none';
        document.getElementById('button-p').style.display = 'flex';

        let dateofshow = activeTabInnerText.split(' ');
        let tic = document.createElement('div');
        tic.className = 'ticket';
        tic.innerHTML = `<div class="barcode">
        <div class="card">
            <h6>ROW ${seat_sr.toLocaleUpperCase()}</h6>
            <h6>${dateofshow[0]} ${dateofshow[1]}</h6>
        </div>
        <div class="card">
            <h6>Seat ${seat_no}</h6>
            <h6>06:00 PM</h6>
        </div>
    
        <svg id="${seat_sr}${seat_no}barcode"></svg>
    
        <h5>
            <img src="../image/logo.png">
        </h5>
    </div>
    <div class="tic-details" style="background: url('https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg') center 0px/cover;">
        <div class="type">4DX</div>
        <h5 class="pvr"><span>Movies</span>HUB</h5>
        <h1>${movie.toLocaleUpperCase()}</h1>
        <div class="seat-det">
            <div class="seat-cr">
                <h6>ROW</h6>
                <h6>${seat_sr.toLocaleUpperCase()}</h6>
            </div>
            <div class="seat-cr">
                <h6>SEAT</h6>
                <h6>${seat_no}</h6>
            </div>
            <div class="seat-cr">
                <h6>DATE</h6>
                <h6>${dateofshow[0]} <sub>${dateofshow[1]}</sub></h6>
            </div>
            <div class="seat-cr">
                <h6>TIME</h6>
                <h6>06:00 <sub>PM</sub></h6>
            </div>
        </div>
    </div>`

        document.getElementById('ticket-cont').appendChild(tic);

        JsBarcode(`#${seat_sr}${seat_no}barcode`, `${seat_sr.toLocaleUpperCase()}${seat_no}${el.innerText}${dateofshow[0]}`);

    });
})


document.getElementById('button-p').addEventListener('click', () => {
    document.querySelector('header').style.display = 'none';
    document.querySelector('.ticket-container').style.display = 'none';
    document.querySelector('.book').style.display = 'unset';
    document.querySelector('.book2').style.display = 'unset';
    document.querySelector('.seat-detail').style.display = 'flex';
    document.getElementById('button-n').style.display = 'none';
    document.getElementById('button-p').style.display = 'none';
})